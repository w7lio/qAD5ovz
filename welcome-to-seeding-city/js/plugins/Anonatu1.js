/*:
 * @plugindesc いろいろ
 *
 * @author meteo.H
 *
 * @param normalSize
 * @desc 標準フォントサイズ
 * @default 28
 *
 * @param wWidth
 * @desc メッセージウィンドウ幅
 * @default 
 *
 * @param wRows
 * @desc メッセージウィンドウ行数
 * @default 4
 *
 * @param wReplace
 * @desc 下位置調整
 * @default 0
 *
 * @param noFaceIndent
 * @desc 顔グラ無しのインデント
 * @default 0
 *
 * @param faceIndent
 * @desc 顔グラ有りのインデント
 * @default 168
 *
 * @param hpGaugeColor1
 * @desc HPゲージ色１
 * @default 20
 *
 * @param hpGaugeColor2
 * @desc HPゲージ色２
 * @default 21
 *
 * @param mpGaugeColor1
 * @desc MPゲージ色１
 * @default 22
 *
 * @param mpGaugeColor2
 * @desc MPゲージ色２
 * @default 23
 *
 * @param GaugeBgColor
 * @desc ゲージの背景色
 * 初期値: 19
 * @default 19 
 *
 * @param OutLineWidth
 * @desc アウトライン幅
 * 初期値: 4
 * @default 4
 *
 * @param DayVariable
 * @desc 日数変数
 * 初期値: 0
 * @default 0
 *
 * @param AchieveVariable1
 * @desc 施設開放率変数
 * 初期値: 0
 * @default 0
 *
 * @param AchieveVariable2
 * @desc 攻略達成率変数
 * 初期値: 0
 * @default 0
 *
 * @help テスト
 * 
 */
 
 (function() {
	var parameters = PluginManager.parameters('Anonatu1');
	//パラメーター
	var normalsize = Number(parameters['normalSize'] || 28);
	var wwidth = Number(parameters['wWidth'] || null);
	var wrows = Number(parameters['wRows'] || 4);
	var wreplace = Number(parameters['wReplace'] || 0);
	var nofaceindent = Number(parameters['noFaceIndent'] || 0);
	var faceindent = Number(parameters['faceIndent'] || 168);
	var hgc1 = Number(parameters['hpGaugeColor1'] || 20);
	var hgc2 = Number(parameters['hpGaugeColor2'] || 21);
	var mgc1 = Number(parameters['mpGaugeColor1'] || 22);
	var mgc2 = Number(parameters['mpGaugeColor2'] || 23);
	var gbgc = Number(parameters['GaugeBgColor'] || 19);
	var olinew = Number(parameters['OutLineWidth'] || 4);
	var DV = Number(parameters['DayVariable'] || 0);
	var AV1 = Number(parameters['AchieveVariable1'] || 0);
	var AV2 = Number(parameters['AchieveVariable2'] || 0);
	
	//font & message
	
	var _Window_Base_standardFontSize = Window_Base.prototype.standardFontSize;
	Window_Base.prototype.standardFontSize = function() {
		_Window_Base_standardFontSize.call(this);
    	return normalsize;
	};
	
	var _Window_Message_windowWidth = Window_Message.prototype.windowWidth;
	Window_Message.prototype.windowWidth = function() {
		_Window_Message_windowWidth.call(this);
    	return (wwidth || Graphics.boxWidth);
	};
	
	var _Window_Message_numVisibleRows = Window_Message.prototype.numVisibleRows;
	Window_Message.prototype.numVisibleRows = function() {
		_Window_Message_numVisibleRows.call(this);
    	return wrows;
	};
	
	var _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
	Window_Message.prototype.updatePlacement = function() {
    	this._positionType = $gameMessage.positionType();
    	if (this._positionType == 0){
    		this.x = 0;
    		this.y = this._positionType * (Graphics.boxHeight - this.height) / 2 + 100;
    	}else if(this._positionType == 1){
    		this.x = 140;
    		this.y = this._positionType * (Graphics.boxHeight - this.height) / 2;
    	}else{
    		this.x = 0;
    		this.y = this._positionType * (Graphics.boxHeight - this.height) / 2 - wreplace;
    	}
    	this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;
	};
	
	
	var _Window_Message_newLineX = Window_Message.prototype.newLineX;
	Window_Message.prototype.newLineX = function() {
		_Window_Message_newLineX.call(this);
		return $gameMessage.faceName() === '' ? nofaceindent : faceindent;
	};
	
	//GaugeColor
	
	var _Window_Base_hpGaugeColor1 = Window_Base.prototype.hpGaugeColor1;
	Window_Base.prototype.hpGaugeColor1 = function() {
    	return this.textColor(hgc1);
	};

	var _Window_Base_hpGaugeColor2 = Window_Base.prototype.hpGaugeColor2;
	Window_Base.prototype.hpGaugeColor2 = function() {
    	return this.textColor(hgc2);
	};

	var _Window_Base_mpGaugeColor1 = Window_Base.prototype.mpGaugeColor1;
	Window_Base.prototype.mpGaugeColor1 = function() {
    	return this.textColor(mgc1);
	};

	var _Window_Base_mpGaugeColor2 = Window_Base.prototype.mpGaugeColor2;
	Window_Base.prototype.mpGaugeColor2 = function() {
    	return this.textColor(mgc2);
	};
	
	var _Window_Base_gaugeBackColor = Window_Base.prototype.gaugeBackColor;
    Window_Base.prototype.gaugeBackColor = function () {
        return this.textColor(gbgc);
    };
    
    //Outline
    
    var _Window_Base_createContents = Window_Base.prototype.createContents;
    Window_Base.prototype.createContents = function() {
        _Window_Base_createContents.apply(this, arguments);
        this.contents.outlineWidth = olinew;
    };
	
	//SceneManager nonblur
	
	var _SceneManager_snapForBackground = SceneManager.snapForBackground;
	SceneManager.snapForBackground = function() {
    	this._backgroundBitmap = this.snap();
    	//this._backgroundBitmap.blur();
	};
	
	//savefile
	
	var _DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
	DataManager.makeSavefileInfo = function() {
    	var info = {};
    	info.globalId   = this._globalId;
    	info.title      = $dataSystem.gameTitle;
    	info.mapname    = $gameMap.displayName();
    	info.characters = $gameParty.charactersForSavefile();
    	info.faces      = $gameParty.facesForSavefile();
    	info.playtime   = $gameSystem.playtimeText();
    	info.day		= $gameVariables.value(DV);
    	info.achieve1	= $gameVariables.value(AV1);
    	info.achieve2	= $gameVariables.value(AV2);
    	info.timestamp  = Date.now();
    	return info;
	};
	
	var _Window_SavefileList_drawFileId = Window_SavefileList.prototype.drawFileId;
	Window_SavefileList.prototype.drawFileId = function(id, x, y) {
		this.contents.fontSize = 20;
    	this.drawText(TextManager.file + ' ' + id, x, y, 60);
	};
	
	var _Window_SavefileList_drawContents = Window_SavefileList.prototype.drawContents;
	Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
    	var bottom = rect.y + rect.height;
    	this.contents.fontSize = 18;
        this.drawText(info.day + '日目', rect.x + 64, rect.y, rect.width - 128);
    	var lineHeight = this.lineHeight();
    	this.contents.fontSize = 18;
        this.drawText('施設開放　' + info.achieve1 + '％', rect.x + 64, rect.y + 24, rect.width - 128);
        this.drawText('キャラ攻略　' + info.achieve2 + '％', rect.x + 216, rect.y + 24, rect.width - 128);
        this.drawPlaytime(info, rect.x, rect.y + 24, rect.width);
	};
	
	
})();