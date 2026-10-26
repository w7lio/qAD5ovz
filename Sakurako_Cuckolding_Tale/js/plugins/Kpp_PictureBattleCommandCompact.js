//=============================================================================
// RPG Maker MZ - Kpp_PictureBattleCommandCompact.js
//=============================================================================
// Copyright (c) 2020-2024 カッピ
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//
// ウェブサイト
// https://birdwind.net/
//
// Twitter
// https://twitter.com/kappi_bw

/*:
 * @target MZ
 * @plugindesc ver1.03 バトルコマンド画像化コンパクト版
 * @author カッピ
 * @url https://birdwind.net/plugin/
 *
 * @help Kpp_PictureBattleCommandCompact.js
 * 
 * バトル画面のコマンドウィンドウのデザインを変更します。
 * ウィンドウの項目に、枠画像が追加されます。
 * 画像はプラグインパラメータで差し替えできます。
 *
 * 枠画像は、次のフォルダに入れてください。
 * img/pictures/
 *
 * ＜スキルリストの枠画像＞
 * 戦闘中のスキルリストに表示される枠画像は、
 * プラグインパラメータで指定する以外に、データベースのメモ欄でも変更できます。
 * データベースで指定しなかったスキルのみ、
 * プラグインパラメータで指定した画像を表示します。
 *
 * データベースで指定するには、スキルのメモ欄に以下のように記述します。
 * <commandPicture:画像ファイル名>
 *
 * 例) <commandPicture:BattleCommand_Heal>
 *
 * ※拡張子(.png)は書きません
 * ※画像は img/pictures/ フォルダに入れておいてください
 *
 * @param fileFight
 * @text 戦うコマンドの画像
 * @desc 「戦う」コマンドに表示する画像ファイル
 * @default BattleCommand_Fight
 * @type file
 * @dir img/pictures/
 *
 * @param fileEscape
 * @text 逃げるコマンドの画像
 * @desc 「逃げる」コマンドに表示する画像ファイル
 * @default BattleCommand_Escape
 * @type file
 * @dir img/pictures/
 *
 * @param fileAttack
 * @text 攻撃コマンドの画像
 * @desc 「攻撃」コマンドに表示する画像ファイル
 * @default BattleCommand_Fight
 * @type file
 * @dir img/pictures/
 *
 * @param fileSkill
 * @text スキルコマンドの画像
 * @desc 「スキル(必殺技など)」コマンドに表示する画像ファイル｜「スキルタイプごとの画像」が指定されていれば、そちらを優先
 * @default BattleCommand_Skill
 * @type file
 * @dir img/pictures/
 *
 * @param fileGuard
 * @text 防御コマンドの画像
 * @desc 「防御」コマンドに表示する画像ファイル
 * @default BattleCommand_Guard
 * @type file
 * @dir img/pictures/
 *
 * @param fileItem
 * @text アイテムコマンドの画像
 * @desc 「アイテム」コマンドに表示する画像ファイル
 * @default BattleCommand_Item
 * @type file
 * @dir img/pictures/
 *
 * @param fileItemList
 * @text アイテムリストの画像
 * @desc 戦闘中のアイテムリストに表示する画像ファイル
 * @default BattleCommand_ItemList
 * @type file
 * @dir img/pictures/
 *
 * @param fileSkillList
 * @text スキルリストの画像
 * @desc 戦闘中のスキルリストに表示する画像ファイル / データベースで指定されていれば、そちらを優先
 * @default BattleCommand_SkillList
 * @type file
 * @dir img/pictures/
 *
 * @param fileEnemy
 * @text エネミー選択の画像
 * @desc 戦闘中のエネミー選択ウィンドウに表示する画像ファイル
 * @default BattleCommand_Enemy
 * @type file
 * @dir img/pictures/
 * 
 * @param fileSkillType
 * @text スキルタイプごとの画像
 * @desc アクターコマンドに表示するスキルタイプごとの画像ファイル｜データベースのスキルタイプ設定の順番で指定
 * @default []
 * @type file[]
 * @dir img/pictures/
 *
 * @param withCommandSkill
 * @text CommandSkillと併用
 * @desc CommandSkill.jsと併用した場合の競合対策を有効にする
 * @type boolean
 * @default false
 * 
 * @param withVariableActorCommand
 * @text VariableActorCommandと併用
 * @desc Keke_VariableActorCommand.jsと併用した場合の競合対策を有効にする
 * @type boolean
 * @default false
 *
 * @param hideDefaultText
 * @text コマンドテキスト非表示
 * @desc コマンドテキストを非表示にし、画像のみ描画する
 * @type boolean
 * @default false
 * 
 * @param hideCommandCursor
 * @text 選択カーソル非表示
 * @desc 選択中のコマンドに表示されるカーソルを非表示にする
 * @type boolean
 * @default false
 * 
 * @param selectedScale
 * @text 選択中コマンドの大きさ(%)
 * @desc 選択しているコマンドの拡大率(%)
 * @type number
 * @min 10
 * @max 100
 * @default 100
 * 
 * @param unselectedScale
 * @text 非選択コマンドの大きさ(%)
 * @desc 選択していないしているコマンドの拡大率(%)
 * @type number
 * @min 10
 * @max 100
 * @default 80
 * 
 * @param groupMaxCol
 * @text 横方向に並べるコマンド数
 * @type none
 * @value ------------------
 * 
 * @param maxColPartyCommand
 * @text パーティコマンド
 * @desc パーティコマンドウィンドウの横方向のコマンド最大数
 * @type number
 * @default 0
 * @min 0
 * @max 10
 * @parent groupMaxCol
 * 
 * @param maxColActorCommand
 * @text アクターコマンド
 * @desc アクターコマンドウィンドウの横方向のコマンド最大数
 * @type number
 * @default 0
 * @min 0
 * @max 10
 * @parent groupMaxCol
 * 
 * @param maxColItemList
 * @text アイテムリスト
 * @desc バトル中のアイテムリストウィンドウの横方向のコマンド最大数
 * @type number
 * @default 0
 * @min 0
 * @max 10
 * @parent groupMaxCol
 * 
 * @param maxColSkillList
 * @text スキルリスト
 * @desc バトル中のスキルリストウィンドウの横方向のコマンド最大数
 * @type number
 * @default 0
 * @min 0
 * @max 10
 * @parent groupMaxCol
 * 
 * @param maxColEnemy
 * @text エネミー選択
 * @desc エネミー選択ウィンドウの横方向のコマンド最大数
 * @type number
 * @default 0
 * @min 0
 * @max 10
 * @parent groupMaxCol
 * 
 * @param groupWindowPosition
 * @text ウィンドウ位置
 * @type none
 * @value ------------------
 * 
 * @param positionPartyCommand
 * @text パーティコマンド
 * @desc パーティコマンドウィンドウの位置
 * @type select
 * @option Auto｜自動
 * @value Auto
 * @option Center｜中央
 * @value Center
 * @default Auto
 * @parent groupWindowPosition
 * 
 * @param positionActorCommand
 * @text アクターコマンド
 * @desc アクターコマンドウィンドウの位置
 * @type select
 * @option Auto｜自動
 * @value Auto
 * @option Center｜中央
 * @value Center
 * @default Auto
 * @parent groupWindowPosition
 * 
 * @param positionItemList
 * @text アイテムリスト
 * @desc バトル中のアイテムリストウィンドウの位置
 * @type select
 * @option Auto｜自動
 * @value Auto
 * @option Center｜中央
 * @value Center
 * @default Auto
 * @parent groupWindowPosition
 * 
 * @param positionSkillList
 * @text スキルリスト
 * @desc バトル中のスキルリストウィンドウの位置
 * @type select
 * @option Auto｜自動
 * @value Auto
 * @option Center｜中央
 * @value Center
 * @default Auto
 * @parent groupWindowPosition
 * 
 * @param positionEnemy
 * @text エネミー選択
 * @desc エネミー選択ウィンドウの位置
 * @type select
 * @option Auto｜自動
 * @value Auto
 * @option Center｜中央
 * @value Center
 * @default Auto
 * @parent groupWindowPosition
 *
 * @noteParam commandPicture
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData skills
 * 
 * @noteParam skillPicture
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData skills
 * 
 * @noteParam itemPicture
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData items
 * 
 * @noteParam enemyPicture
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData enemies
 * 
 */

(() => {
	'use strict';

	const pluginName = decodeURIComponent(document.currentScript.src).match(/^.*\/js\/plugins\/(.+)\.js$/)[1];
	const parameters = PluginManager.parameters(pluginName);
	
	const paramFileFight = parameters['fileFight'] || '';
	const paramFileEscape = parameters['fileEscape'] || '';
	const paramFileAttack = parameters['fileAttack'] || '';
	const paramFileSkill = parameters['fileSkill'] || '';
	const paramFileGuard = parameters['fileGuard'] || '';
	const paramFileItem = parameters['fileItem'] || '';
	const paramFileItemList = parameters['fileItemList'] || '';
	const paramFileSkillList = parameters['fileSkillList'] || '';
	const paramFileEnemy = parameters['fileEnemy'] || '';

	const paramFileSkillType = JSON.parse(parameters['fileSkillType'] || "[]");
	const paramWithCommandSkill = (parameters['withCommandSkill'] == "true");
	const paramWithVariableActorCommand = (parameters['withVariableActorCommand'] == "true");
	const paramHideDefaultText = (parameters['hideDefaultText'] == "true");
	const paramHideCommandCursor = (parameters['hideCommandCursor'] == "true");

	const paramSelectedScale = Number(parameters['selectedScale'] || 100);
	const paramUnselectedScale = Number(parameters['unselectedScale'] || 80);

	const paramMaxColPartyCommand = Number(parameters['maxColPartyCommand'] || 0);
	const paramMaxColActorCommand = Number(parameters['maxColActorCommand'] || 0);
	const paramMaxColItemList = Number(parameters['maxColItemList'] || 0);
	const paramMaxColSkillList = Number(parameters['maxColSkillList'] || 0);
	const paramMaxColEnemy = Number(parameters['maxColEnemy'] || 0);

	const paramPositionPartyCommand = String(parameters['positionPartyCommand'] || "Auto");
	const paramPositionActorCommand = String(parameters['positionActorCommand'] || "Auto");
	const paramPositionItemList = String(parameters['positionItemList'] || "Auto");
	const paramPositionSkillList = String(parameters['positionSkillList'] || "Auto");
	const paramPositionEnemy = String(parameters['positionEnemy'] || "Auto");
	
	// --------------------------------------------------------
	// Window_Selectable
	// --------------------------------------------------------

	const _Window_Selectable_itemWidth = Window_Selectable.prototype.itemWidth;
	const _Window_Selectable_itemHeight = Window_Selectable.prototype.itemHeight;
	const _Window_Selectable_clearItem = Window_Selectable.prototype.clearItem;

	Window_Selectable.prototype.createSpritePictureCommand = function() {
		if (this._readyDrawStaticPictures) {
			if (this._spritePictureCommand == null) {
				this._spritePictureCommand = new Sprite(new Bitmap(this.contents.width, this.contents.height));
				const containerIndex = this._clientArea.children.indexOf(this._cursorSprite);
    			this._clientArea.addChildAt(this._spritePictureCommand, containerIndex);
			}
		}
	};

	Window_Selectable.prototype.clearItem = function(index) {
		_Window_Selectable_clearItem.call(this, index);

		if (this._readyDrawStaticPictures) {
			const rect = this.itemRect(index);
			this._spritePictureCommand.bitmap.clearRect(rect.x, rect.y, rect.width, rect.height);
		}
	};

	Window_Selectable.prototype.drawStaticPictureCommand = function(index) {
		if (this._readyDrawStaticPictures) {
			if (index < this.maxItems() && index >= 0) {
				const pictureName = this.pictureName(index);
				if (pictureName != "") {
					const rect = this.itemRect(index);
					const itemBitmap = ImageManager.loadPicture(pictureName);
					const clearScale = paramSelectedScale / 100.0;
					
					this._spritePictureCommand.bitmap.clearRect(
						rect.x + rect.width / 2 - itemBitmap.width * clearScale / 2,
						rect.y + rect.height / 2 - itemBitmap.height * clearScale / 2,
						itemBitmap.width * clearScale, itemBitmap.height * clearScale);
					
					const itemScale = (this._index == index ? paramSelectedScale : paramUnselectedScale) / 100.0;
					this._spritePictureCommand.bitmap.blt(itemBitmap,
						0, 0, this.itemWidth(), this.itemHeight(), 
						rect.x + rect.width / 2 - itemBitmap.width * itemScale / 2,
						rect.y + rect.height / 2 - itemBitmap.height * itemScale / 2,
						itemBitmap.width * itemScale, itemBitmap.height * itemScale);
				}
			}
		}
	};

	Window_Selectable.prototype.tryLoadCommandPictures = function() {
	};

	Window_Selectable.prototype.refreshStaticPictureCommand = function(bitmap, position = "Auto") {
		this._sourceBitmapWidth = bitmap.width;
		this._sourceBitmapHeight = bitmap.height;		

		let width = this.maxCols() * (this.itemWidth() + 0) + this.padding * 2;
		let height = this.maxRows() * this.itemHeight() + this.padding * 2;

		if (position == "Center") {
			width = Math.min(Graphics.boxWidth, width);
			const x = Graphics.boxWidth / 2 - width / 2;
			const y = Graphics.boxHeight - SceneManager._scene.windowAreaHeight() - height;

			this.move(x, y, width, Math.min(Graphics.boxHeight, height));
		}
		else {
			const x = Math.max(0, Math.min(this.x, Graphics.boxWidth - width));
			const y = Math.max(0, Math.min(this.y, Graphics.boxHeight - height));

			this.move(x, y, Math.min(Graphics.boxWidth, width), Math.min(Graphics.boxHeight, height));
		}
		
		this.destroyContents();
		this.contents = new Bitmap(width, height);
		this.resetFontSettings();

		if (this._spritePictureCommand) {
			this._spritePictureCommand.bitmap.destroy();
			this._spritePictureCommand.bitmap = new Bitmap(width, height);
		}

		if (paramHideDefaultText) {
			this._contentsSprite.visible = false;
		}
	};

	Window_Selectable.prototype.itemWidth = function() {
		if (this._sourceBitmapWidth) return Number(this._sourceBitmapWidth);

		return _Window_Selectable_itemWidth.call(this);
	};
	
	Window_Selectable.prototype.itemHeight = function() {
		if (this._sourceBitmapHeight) return Number(this._sourceBitmapHeight);

		return _Window_Selectable_itemHeight.call(this);
	};

	// --------------------------------------------------------
	// Window_PartyCommand
	// --------------------------------------------------------

	if (paramFileFight && paramFileFight != '') {

		const _Window_PartyCommand_initialize = Window_PartyCommand.prototype.initialize;
		const _Window_PartyCommand_drawItem = Window_PartyCommand.prototype.drawItem;
		const _Window_PartyCommand_refresh = Window_PartyCommand.prototype.refresh;
		const _Window_PartyCommand_paint = Window_PartyCommand.prototype.paint;
		const _Window_PartyCommand_select = Window_PartyCommand.prototype.select;

		Window_PartyCommand.prototype.initialize = function(rect) {						
			_Window_PartyCommand_initialize.call(this, rect);

			if (paramFileFight) ImageManager.loadPicture(paramFileFight);
			if (paramFileEscape) ImageManager.loadPicture(paramFileEscape);
		};

		Window_PartyCommand.prototype.refresh = function() {
			this.clearCommandList();
			this.makeCommandList();

			this.tryLoadCommandPictures();
			this.createSpritePictureCommand();

			_Window_PartyCommand_refresh.call(this);
		};

		Window_PartyCommand.prototype.paint = function() {
			if (this._spritePictureCommand) this._spritePictureCommand.bitmap.clear();
			_Window_PartyCommand_paint.call(this);
		};

		Window_PartyCommand.prototype.drawItem = function(index) {
			this.drawStaticPictureCommand(index);

			_Window_PartyCommand_drawItem.call(this, index);
		};

		Window_PartyCommand.prototype.select = function(index) {
			const oldIndex = this._index;

			_Window_PartyCommand_select.call(this, index);

			this.drawStaticPictureCommand(oldIndex);
			this.drawStaticPictureCommand(index);
		};

		Window_PartyCommand.prototype.tryLoadCommandPictures = function() {
			if (this._readyDrawStaticPictures) return;

			const pic1 = ImageManager.loadPicture(paramFileFight);
			if (pic1 == null || !pic1.isReady()) return;

			if (paramFileEscape && paramFileEscape != '') {
				const pic2 = ImageManager.loadPicture(paramFileEscape);
				if (pic2 == null || !pic2.isReady()) return;
			}
				
			this._readyDrawStaticPictures = true;
			this.refreshStaticPictureCommand(pic1, paramPositionPartyCommand);
		};

		Window_PartyCommand.prototype.pictureName = function(index) {
			if (paramFileFight && this._list[index].symbol == 'fight') return paramFileFight;
			if (paramFileEscape && this._list[index].symbol == 'escape') return paramFileEscape;
			
			return "";
		};

		if (paramHideCommandCursor) {
			Window_PartyCommand.prototype.refreshCursor = function() {
				this.setCursorRect(0, 0, 0, 0);
			};
		}

		if (paramMaxColPartyCommand >= 1) {
			Window_PartyCommand.prototype.maxCols = function() {
				return paramMaxColPartyCommand;
			};
		};
	}

	// --------------------------------------------------------
	// Window_ActorCommand
	// --------------------------------------------------------

	if (paramFileAttack && paramFileAttack != '') {

		const _Window_ActorCommand_initialize = Window_ActorCommand.prototype.initialize;
		const _Window_ActorCommand_drawItem = Window_ActorCommand.prototype.drawItem;
		const _Window_ActorCommand_refresh = Window_ActorCommand.prototype.refresh;
		const _Window_ActorCommand_paint = Window_ActorCommand.prototype.paint;
		const _Window_ActorCommand_select = Window_ActorCommand.prototype.select;

		Window_ActorCommand.prototype.initialize = function(rect) {						
			_Window_ActorCommand_initialize.call(this, rect);

			if (paramFileAttack) ImageManager.loadPicture(paramFileAttack);
			if (paramFileGuard) ImageManager.loadPicture(paramFileGuard);
			if (paramFileSkill) ImageManager.loadPicture(paramFileSkill);	
			if (paramFileItem) ImageManager.loadPicture(paramFileItem);

			this._commandPictureNames = {};

			if (paramFileSkillType && paramFileSkillType.length >= 1) {
				for (const skillType of paramFileSkillType) {
					if (skillType) this._commandPictureNames[skillType] = false;
				}
			}
			
			if (paramWithCommandSkill || paramWithVariableActorCommand) {
				for (const skill of $dataSkills) {
					if (skill) {
						if (skill.meta.commandPicture) this._commandPictureNames[skill.meta.commandPicture] = false;
						else if (skill.meta.skillPicture) this._commandPictureNames[skill.meta.skillPicture] = false;
					}
				}
			}
			
			for (const file in this._commandPictureNames) {
				ImageManager.loadPicture(file);
			}
		}

		Window_ActorCommand.prototype.refresh = function() {
			//this.clearCommandList();
			//this.makeCommandList();

			this.tryLoadCommandPictures();
			this.createSpritePictureCommand();

			_Window_ActorCommand_refresh.call(this);
			
		};

		Window_ActorCommand.prototype.paint = function() {
			if (this._spritePictureCommand) this._spritePictureCommand.bitmap.clear();
			if (this._readyDrawStaticPictures) {
				const defaultBitmap = ImageManager.loadPicture(paramFileAttack);
				this.refreshStaticPictureCommand(defaultBitmap, paramPositionActorCommand);
			}
			_Window_ActorCommand_paint.call(this);
		};

		Window_ActorCommand.prototype.drawItem = function(index) {
			this.drawStaticPictureCommand(index);

			_Window_ActorCommand_drawItem.call(this, index);
		};

		Window_ActorCommand.prototype.select = function(index) {
			const oldIndex = this._index;

			_Window_ActorCommand_select.call(this, index);

			this.drawStaticPictureCommand(oldIndex);
			this.drawStaticPictureCommand(index);
		};

		Window_ActorCommand.prototype.tryLoadCommandPictures = function() {
			if (this._readyDrawStaticPictures) return;

			for (const file of [paramFileAttack, paramFileGuard, paramFileItem, paramFileSkill]) {
				if (file) {
					const bitmap = ImageManager.loadPicture(file);
					if (!bitmap.isReady()) return;
				}
			}

			for (const file in this._commandPictureNames) {
				if (this._commandPictureNames[file] === false) {
					const bitmap = ImageManager.loadPicture(file);
					if (bitmap && bitmap.isReady()) this._commandPictureNames[file] = true;
					else return;
				}
			}

			this._readyDrawStaticPictures = true;
		};

		Window_ActorCommand.prototype.pictureName = function(index) {
			if (paramFileAttack && this._list[index].symbol == 'attack') return paramFileAttack;
			if (paramFileGuard && this._list[index].symbol == 'guard') return paramFileGuard;
			if (paramFileItem && this._list[index].symbol == 'item') return paramFileItem;
			if (paramFileSkill && this._list[index].symbol == 'skill') {
				if (paramFileSkillType && paramFileSkillType.length >= 1) {
					
					if (this._list[index].ext) {
						const skillTypeId = Number(this._list[index].ext) - 1;
						if (paramFileSkillType[skillTypeId]) {
							return paramFileSkillType[skillTypeId];
						}
					}
				}

				return paramFileSkill;
			}
			if (paramWithCommandSkill) {
				if (this._list[index].symbol == 'special' && this._list[index].ext && this._list[index].ext.id > 0) {
					const skill = this._list[index].ext;
					if (skill?.meta?.commandPicture) return skill.meta.commandPicture;
					if (skill?.meta?.skillPicture) return skill.meta.skillPicture;
					if (skill?.meta?.itemPicture) return skill.meta.itemPicture;
				}
			}

			if (paramWithVariableActorCommand) {
				if (this._list[index].symbol == 'skillOne' && this._list[index].ext > 0) {
					const skill = $dataSkills[this._list[index].ext];
					if (skill?.meta?.commandPicture) return skill.meta.commandPicture;
					if (skill?.meta?.skillPicture) return skill.meta.skillPicture;
					return paramFileSkill;
				}
				if (this._list[index].symbol == 'itemOne' && this._list[index].ext > 0) {
					const item = $dataItems[this._list[index].ext];
					if (item?.meta?.itemPicture) return item.meta.itemPicture;
					return paramFileSkill;
				}
			}

			return "";
		};

		if (paramHideCommandCursor) {
			Window_ActorCommand.prototype.refreshCursor = function() {
				this.setCursorRect(0, 0, 0, 0);
			};
		}

		if (paramMaxColActorCommand >= 1) {
			Window_ActorCommand.prototype.maxCols = function() {
				return paramMaxColActorCommand;
			};
		}
	}

	// --------------------------------------------------------
	// Window_BattleItem
	// --------------------------------------------------------

	if (paramFileItemList && paramFileItemList != '') {

		const _Window_BattleItem_initialize = Window_BattleItem.prototype.initialize;
		const _Window_BattleItem_drawItem = Window_BattleItem.prototype.drawItem;
		const _Window_BattleItem_refresh = Window_BattleItem.prototype.refresh;
		const _Window_BattleItem_paint = Window_BattleItem.prototype.paint;
		const _Window_BattleItem_select = Window_BattleItem.prototype.select;

		Window_BattleItem.prototype.initialize = function(rect) {						
			_Window_BattleItem_initialize.call(this, rect);

			if (paramFileItemList) ImageManager.loadPicture(paramFileItemList);

			this._itemPictureNames = {};

			for (const item of $dataItems) {
				if (item && item.meta.itemPicture) this._itemPictureNames[item.meta.itemPicture] = false;
			}

			for (const file in this._itemPictureNames) {
				ImageManager.loadPicture(file);
			}
		};

		Window_BattleItem.prototype.refresh = function() {
			this.tryLoadCommandPictures();
			this.createSpritePictureCommand();

			_Window_BattleItem_refresh.call(this);
		};

		Window_BattleItem.prototype.paint = function() {
			if (this._spritePictureCommand) this._spritePictureCommand.bitmap.clear();
			if (this._readyDrawStaticPictures) {
				const defaultBitmap = ImageManager.loadPicture(paramFileItemList);
				this.refreshStaticPictureCommand(defaultBitmap, paramPositionItemList);
			}

			_Window_BattleItem_paint.call(this);
		};

		Window_BattleItem.prototype.drawItem = function(index) {
			this.drawStaticPictureCommand(index);

			_Window_BattleItem_drawItem.call(this, index);
		};

		Window_BattleItem.prototype.select = function(index) {
			const oldIndex = this._index;

			_Window_BattleItem_select.call(this, index);

			this.drawStaticPictureCommand(oldIndex);
			this.drawStaticPictureCommand(index);
		};

		Window_BattleItem.prototype.tryLoadCommandPictures = function() {
			if (this._readyDrawStaticPictures) return;

			const defaultBitmap = ImageManager.loadPicture(paramFileItemList);
			if (!defaultBitmap.isReady()) return;

			if (this._itemPictureNames.length >= 1) {
				for (const file in this._itemPictureNames) {
					if (this._itemPictureNames[file] === false) {
						const bitmap = ImageManager.loadPicture(file);
						if (bitmap && bitmap.isReady()) this._itemPictureNames[file] = true;
						else return;
					}
				}
			}

			this._readyDrawStaticPictures = true;
			this.refreshStaticPictureCommand(defaultBitmap, paramPositionItemList);
		};

		Window_BattleItem.prototype.pictureName = function(index) {
			const item = this.itemAt(index);

			if (item && item.meta.itemPicture) return item.meta.itemPicture;

			return paramFileItemList ? paramFileItemList : "";
		};

		if (paramHideCommandCursor) {
			Window_BattleItem.prototype.refreshCursor = function() {
				this.setCursorRect(0, 0, 0, 0);
			};
		}

		if (paramMaxColItemList && paramMaxColItemList >= 1) {
			Window_BattleItem.prototype.maxCols = function() {
				return paramMaxColItemList;
			};
		};
	};

	// --------------------------------------------------------
	// Window_BattleSkill
	// --------------------------------------------------------

	if (paramFileSkillList && paramFileSkillList != "") {

		const _Window_BattleSkill_initialize = Window_BattleSkill.prototype.initialize;
		const _Window_BattleSkill_drawItem = Window_BattleSkill.prototype.drawItem;
		const _Window_BattleSkill_refresh = Window_BattleSkill.prototype.refresh;
		const _Window_BattleSkill_paint = Window_BattleSkill.prototype.paint;
		const _Window_BattleSkill_select = Window_BattleSkill.prototype.select;

		Window_BattleSkill.prototype.initialize = function(rect) {						
			_Window_BattleSkill_initialize.call(this, rect);

			if (paramFileSkillList) ImageManager.loadPicture(paramFileSkillList);

			this._skillPictureNames = {};

			for (const skill of $dataSkills) {
				if (skill && skill.meta.commandPicture) this._skillPictureNames[skill.meta.commandPicture] = false;
				else if (skill && skill.meta.skillPicture) this._skillPictureNames[skill.meta.skillPicture] = false;
			}

			for (const file in this._skillPictureNames) {
				ImageManager.loadPicture(file);
			}
		};

		Window_BattleSkill.prototype.refresh = function() {
			this.tryLoadCommandPictures();
			this.createSpritePictureCommand();

			_Window_BattleSkill_refresh.call(this);
		};

		Window_BattleSkill.prototype.paint = function() {
			if (this._spritePictureCommand) this._spritePictureCommand.bitmap.clear();
			if (this._readyDrawStaticPictures) {
				const defaultBitmap = ImageManager.loadPicture(paramFileSkillList);
				this.refreshStaticPictureCommand(defaultBitmap, paramPositionSkillList);
			}

			_Window_BattleSkill_paint.call(this);
		};

		Window_BattleSkill.prototype.drawItem = function(index) {
			this.drawStaticPictureCommand(index);

			_Window_BattleSkill_drawItem.call(this, index);
		};

		Window_BattleSkill.prototype.select = function(index) {
			const oldIndex = this._index;

			_Window_BattleSkill_select.call(this, index);

			this.drawStaticPictureCommand(oldIndex);
			this.drawStaticPictureCommand(index);
		};

		Window_BattleSkill.prototype.tryLoadCommandPictures = function() {
			if (this._readyDrawStaticPictures) return;

			const defaultBitmap = ImageManager.loadPicture(paramFileSkillList);
			if (!defaultBitmap.isReady()) return;

			for (const file in this._skillPictureNames) {
				if (this._skillPictureNames[file] === false) {
					const bitmap = ImageManager.loadPicture(file);
					if (bitmap && bitmap.isReady()) this._skillPictureNames[file] = true;
					else return;
				}
			}

			this._readyDrawStaticPictures = true;
			this.refreshStaticPictureCommand(defaultBitmap, paramPositionSkillList);
		};

		Window_BattleSkill.prototype.pictureName = function(index) {
			const item = this.itemAt(index);

			if (item && item.meta.commandPicture) return item.meta.commandPicture;
			if (item && item.meta.skillPicture) return item.meta.skillPicture;

			return paramFileSkillList ? paramFileSkillList : "";
		};

		if (paramHideCommandCursor) {
			Window_BattleSkill.prototype.refreshCursor = function() {
				this.setCursorRect(0, 0, 0, 0);
			};
		}

		if (paramMaxColSkillList >= 1) {
			Window_BattleSkill.prototype.maxCols = function() {
				return paramMaxColSkillList;
			};
		};
	};

	// --------------------------------------------------------
	// Window_BattleEnemy
	// --------------------------------------------------------

	if (paramFileEnemy && paramFileEnemy != "") {

		const _Window_BattleEnemy_initialize = Window_BattleEnemy.prototype.initialize;
		const _Window_BattleEnemy_drawItem = Window_BattleEnemy.prototype.drawItem;
		const _Window_BattleEnemy_refresh = Window_BattleEnemy.prototype.refresh;
		const _Window_BattleEnemy_paint = Window_BattleEnemy.prototype.paint;
		const _Window_BattleEnemy_select = Window_BattleEnemy.prototype.select;

		Window_BattleEnemy.prototype.initialize = function(rect) {						
			_Window_BattleEnemy_initialize.call(this, rect);

			if (paramFileEnemy) ImageManager.loadPicture(paramFileEnemy);
			
			this._enemyPictureNames = {};

			for (const enemy of $dataEnemies) {
				if (enemy && enemy.meta.enemyPicture) this._enemyPictureNames[enemy.meta.enemyPicture] = false;
			}

			for (const file in this._enemyPictureNames) {
				ImageManager.loadPicture(file);
			}
		};

		Window_BattleEnemy.prototype.refresh = function() {
			this.tryLoadCommandPictures();
			this.createSpritePictureCommand();

			_Window_BattleEnemy_refresh.call(this);
		};

		Window_BattleEnemy.prototype.paint = function() {
			if (this._spritePictureCommand) this._spritePictureCommand.bitmap.clear();
			_Window_BattleEnemy_paint.call(this);
		};

		Window_BattleEnemy.prototype.drawItem = function(index) {
			this.drawStaticPictureCommand(index);

			_Window_BattleEnemy_drawItem.call(this, index);
		};

		Window_BattleEnemy.prototype.select = function(index) {
			const oldIndex = this._index;

			_Window_BattleEnemy_select.call(this, index);

			this.drawStaticPictureCommand(oldIndex);
			this.drawStaticPictureCommand(index);
		};

		Window_BattleEnemy.prototype.tryLoadCommandPictures = function() {
			if (this._readyDrawStaticPictures) return;
			
			const defaultBitmap = ImageManager.loadPicture(paramFileEnemy);
			if (!defaultBitmap.isReady()) return;

			for (const file in this._enemyPictureNames) {
				if (this._enemyPictureNames[file] === false) {
					const bitmap = ImageManager.loadPicture(file);
					if (bitmap && bitmap.isReady()) this._enemyPictureNames[file] = true;
					else return;
				}
			}

			this._readyDrawStaticPictures = true;
			this.refreshStaticPictureCommand(defaultBitmap, paramPositionEnemy);
		};

		Window_BattleEnemy.prototype.pictureName = function(index) {
			if (index < 0) return paramFileEnemy;
			
			const enemy = this._enemies[index].enemy();
			if (enemy == null) return paramFileEnemy;
			if (enemy?.meta?.enemyPicture) return enemy.meta.enemyPicture;
		
			return paramFileEnemy;
		};

		if (paramHideCommandCursor) {
			Window_BattleEnemy.prototype.refreshCursor = function() {
				this.setCursorRect(0, 0, 0, 0);
			};
		}

		if (paramMaxColEnemy && paramMaxColEnemy >= 1) {
			Window_BattleEnemy.prototype.maxCols = function() {
				return paramMaxColEnemy;
			};
		};
	};

})();