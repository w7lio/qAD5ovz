//=============================================================================
// .js
//
// ----------------------------------------------------------------------------
// by ecf5DTTzl6h6lJj02
// //
// ----------------------------------------------------------------------------
// Copyright (C) 202X ecf5DTTzl6h6lJj02
//	This software is released under the MIT lisence.
//	http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 
 * @author ecf5DTTzl6h6lJj02
 *
 *
 * @help
 * オプション画面に背景画像を表示します。
 * 
 * @param backgroundImage
 * @text 背景画像設定
 * @desc オプション画面に表示する背景画像の設定です。
 * @type struct<imageSettings>
 * @default
 */

/*~struct~imageSettings:
 * @param fileName
 * @text 画像ファイル名
 * @desc 背景として表示する画像名です。
 * 画像は img/pictures/ から探します。
 * @type file
 * @dir img/pictures/
 * @require 1
 * @default
 * 
 * @param anchorType
 * @text 原点
 * @text 画像の原点(アンカー)を指定します。
 * 左上、もしくは、中央を選択してください。
 * @type select
 * @option 左上
 * @value 0
 * @option 中央
 * @value 1
 * @default 0
 * 
 * @param x
 * @text 表示 X 座標
 * @desc 画像を表示する X 座標です。
 * 原点の X 座標が、この値に設定されます。
 * @type number
 * @default 0
 * 
 * @param y
 * @text 表示 Y 座標
 * @desc 画像を表示する Y 座標です。
 * 原点の Y 座標が、この値に設定されます。
 * @type number
 * @default 0
 * 
 * @param switchId
 * @text 背景画像表示スイッチID
 * @desc 設定したスイッチIDが ON の時のみ、背景画像を表示します。
 * なし(0) を設定している場合は、常に表示します。
 * @type switch
 * @default 0
 */

 (()=>{
    'use strict'

    const pluginName = decodeURI(document.currentScript.src).replace(/.*\/(.*)\.js$/, '$1');
    function parseImageSetting(settings) {
        console.log(settings);
        try {
            if (typeof settings === 'string') {
            return JSON.parse(settings, (key, value) => {
                switch(key) {
                    case 'fileName':
                        if (typeof value !== 'string') {
                            throw Error(`『画像ファイル名』が正しく設定されていません。: ${value}`);
                        }
                        return value;
                    case 'anchorType':
                        if (isNaN(value)) {
                            throw Error(`『原点』が正しく設定されていません。: ${value}`);
                        }
                        return parseInt(value);
                    case 'x':
                        if (isNaN(value)) {
                            throw Error(`『表示 X 座標』が正しく設定されていません。: ${value}`);
                        }
                        return parseInt(value);
                    case 'y':
                        if (isNaN(value)) {
                            throw Error(`『表示 Y 座標』が正しく設定されていません。: ${value}`);
                        }
                        return parseInt(value);
                    case 'switchId':
                        if (isNaN(value)) {
                            throw Error(`『背景表示スイッチID』が正しく設定されていません。: ${value}`)
                        }
                        return parseInt(value);
                    default:
                        return value;
                }
                });
            } else {
                throw Error('背景画像設定が正しく設定されていません。');
            }
        } catch(e) {
            throw Error(`以下の原因により、背景画像設定ができませんでした。\n${e.message}`);
        }
    }

    // --------------------------プラグインパラメータの取得-----------------------------
    const parameters = PluginManager.parameters(pluginName);
    console.log(parameters);
    const OBI_ImageSettings = parseImageSetting(parameters['backgroundImage']);
    console.log(OBI_ImageSettings);
    // -------------------------------------------------------------------------------

    const _Scene_Options_initialize = Scene_Options.prototype.initialize;
    Scene_Options.prototype.initialize = function() {
        _Scene_Options_initialize.apply(this, arguments);
        this._backgroundImage = null;
    };

    const _Scene_Options_create = Scene_Options.prototype.create;
    Scene_Options.prototype.create = function() {
        _Scene_Options_create.apply(this, arguments);
        if (OBI_ImageSettings.fileName !== '' && (OBI_ImageSettings.switchId === 0 || $gameSwitches.value(OBI_ImageSettings.switchId))) {
            this.createBackImage();
        }
    };
    
    Scene_Options.prototype.createBackImage = function() {
        this._backgroundImage = new Sprite();
        this._backgroundImage.bitmap = ImageManager.loadPicture(OBI_ImageSettings.fileName);
        if (OBI_ImageSettings.anchorType === 0) {
            this._backgroundImage.anchor.x = 0;
            this._backgroundImage.anchor.y = 0;
        } else {
            this._backgroundImage.anchor.x = 0.5;
            this._backgroundImage.anchor.y = 0.5;
        }
        this._backgroundImage.x = OBI_ImageSettings.x;
        this._backgroundImage.y = OBI_ImageSettings.y;
        this.addChildAt(this._backgroundImage, 1);
    };

 })();
