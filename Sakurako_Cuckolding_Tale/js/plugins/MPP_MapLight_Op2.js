//=============================================================================
// MPP_MapLight_Op2.js
//=============================================================================
// Copyright (c) 2021 - 2024 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MV MZ
 * @plugindesc The brightness of the tile changes depending on the region.
 * @author Mokusei Penguin
 * @url 
 *
 * @base MPP_MapLight
 * @orderAfter MPP_MapLight
 *
 * @help [version 1.2.1]
 * - This plugin is for RPG Maker MV and MZ.
 * 
 * ▼ Plugin command
 *  〇 MV / MZ
 *  
 *  〇 ChangeRegionLights boolean  / changeRegionLights
 *      boolean : true / false (Enable / Disable)
 *   - Enables or disables region lighting.
 * 
 * 
 * ▼ Plugin parameter details
 *  〇 About light level
 *   - You can set the brightness of the tile with the region ID.
 *   - The higher the level, the brighter it becomes.
 * 
 *  〇 Region ID array specification
 *   - When setting numbers in an array, you can specify numbers from n to m
 *     by writing n-m.
 *         Example: 1-4,8,10-12
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠ is half-width)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 *  @command changeRegionLights
 *      @desc 
 *      @arg boolean
 *          @desc 
 *          @type boolean
 *          @default true
 * 
 * 
 *  @param Light Level 1 Regions
 *      @desc 
 *      @default 1,9,17,25,33,41,49,57
 *
 *  @param Light Level 2 Regions
 *      @desc 
 *      @default 2,10,18,26,34,42,50,58
 *
 *  @param Light Level 3 Regions
 *      @desc 
 *      @default 3,11,19,27,35,43,51,59
 *
 *  @param Light Level 4 Regions
 *      @desc 
 *      @default 4,12,20,28,36,44,52,60
 *
 *  @param Light Level 5 Regions
 *      @desc 
 *      @default 5,13,21,29,37,45,53,61
 *
 *  @param Light Level 6 Regions
 *      @desc 
 *      @default 6,14,22,30,38,46,54,62
 *
 *  @param Light Level 7 Regions
 *      @desc 
 *      @default 7,15,23,31,39,47,55,63
 *
 */

/*:ja
 * @target MV MZ
 * @plugindesc リージョンでそのタイルの明るさが変わります。
 * @author 木星ペンギン
 * @url 
 *
 * @base MPP_MapLight
 * @orderAfter MPP_MapLight
 *
 * @help [version 1.2.1]
 * - このプラグインはRPGツクールMVおよびMZ用です。
 * 
 * ▼ プラグインコマンド
 *  〇 MV / MZ
 *  
 *  〇 リージョン灯り変更 boolean  / リージョン灯り変更
 *      boolean : true / false (有効 / 無効)
 *   - リージョン灯りの有効/無効を変更します。
 * 
 * 
 * ▼ プラグインパラメータ 詳細
 *  〇 明るさレベルについて
 *   - リージョンIDでそのタイルの明るさを設定できます。
 *   - レベルが高いほど明るくなります。
 * 
 *  〇 リージョンIDの配列指定
 *   - 数値を配列で設定する際、n-m と表記することでnからmまでの数値を指定できます。
 *       例 : 1-4,8,10-12
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠は半角)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 *  @command changeRegionLights
 *      @text リージョン灯り変更
 *      @desc 
 *      @arg boolean
 *          @text 有効/無効
 *          @desc 
 *          @type boolean
 *          @default true
 * 
 * 
 *  @param Light Level 1 Regions
 *      @text 明るさレベル1リージョン
 *      @desc 
 *      @default 1,9,17,25,33,41,49,57
 *
 *  @param Light Level 2 Regions
 *      @text 明るさレベル2リージョン
 *      @desc 
 *      @default 2,10,18,26,34,42,50,58
 *
 *  @param Light Level 3 Regions
 *      @text 明るさレベル3リージョン
 *      @desc 
 *      @default 3,11,19,27,35,43,51,59
 *
 *  @param Light Level 4 Regions
 *      @text 明るさレベル4リージョン
 *      @desc 
 *      @default 4,12,20,28,36,44,52,60
 *
 *  @param Light Level 5 Regions
 *      @text 明るさレベル5リージョン
 *      @desc 
 *      @default 5,13,21,29,37,45,53,61
 *
 *  @param Light Level 6 Regions
 *      @text 明るさレベル6リージョン
 *      @desc 
 *      @default 6,14,22,30,38,46,54,62
 *
 *  @param Light Level 7 Regions
 *      @text 明るさレベル7リージョン
 *      @desc 
 *      @default 7,15,23,31,39,47,55,63
 *
 */

(() => {
    'use strict';

    const pluginName = 'MPP_MapLight_Op2';
    
    // Plugin Parameters
    const parameters = PluginManager.parameters(pluginName);
    const convertToSet = (param) => {
        return param.split(',').reduce((r, item) => {
            if (item) {
                const match = /(\d+)-(\d+)/.exec(item);
                if (match) {
                    for (const n of range(+match[1], +match[2] + 1)) {
                        r.add(n);
                    }
                } else {
                    r.add(+item);
                }
            }
            return r;
        }, new Set());
    };
    const param_LightRegions = [];
    for (let i = 0; i < 7; i++) {
        const paramName = `Light Level ${i + 1} Regions`;
        param_LightRegions[i] = convertToSet(parameters[paramName]);
    }
    
    /**
     * start から end までの整数を返すイテレータ。
     * 
     * @param {number} start - 最初の数値。
     * @param {number} end - 最後の数値（範囲には含まれない）。
     * @returns {number}
     */
    const range = function* (start, end) {
        for (let i = start; i < end; i++) {
            yield i;
        }
    };

    //-------------------------------------------------------------------------
    // Tilemap

    if (Tilemap.prototype._paintAllTiles) {
        
        const _Tilemap__paintAllTiles = Tilemap.prototype._paintAllTiles;
        Tilemap.prototype._paintAllTiles = function(startX, startY) {
            this._darknessLayer.clearBase();
            _Tilemap__paintAllTiles.apply(this, arguments);
        };

        const _Tilemap__paintTiles = Tilemap.prototype._paintTiles;
        Tilemap.prototype._paintTiles = function(startX, startY, x, y) {
            _Tilemap__paintTiles.apply(this, arguments);
            this._paintDarknessBitmap(startX, startY, x, y);
        };

    } else {
        
        const _Tilemap__addAllSpots = Tilemap.prototype._addAllSpots;
        Tilemap.prototype._addAllSpots = function(startX, startY) {
            this._darknessLayer.clearBase();
            _Tilemap__addAllSpots.apply(this, arguments);
        };

        const _Tilemap__addSpot = Tilemap.prototype._addSpot;
        Tilemap.prototype._addSpot = function(startX, startY, x, y) {
            _Tilemap__addSpot.apply(this, arguments);
            this._paintDarknessBitmap(startX, startY, x, y);
        };
        
    }

    Tilemap.prototype._paintDarknessBitmap = function(startX, startY, x, y) {
        const level = this._getDarknessLevel(startX + x, startY + y);
        this._darknessLayer._paintBaseBitmap(x, y, level);
    };

    Tilemap.prototype._getDarknessLevel = function(x, y) {
        if ($gameMap.isRegionLightsHidden()) {
            return 0;
        }
        const regionId = this._readMapData(x, y, 5);
        return param_LightRegions.findIndex(regions => regions.has(regionId)) + 1;
    };

    Tilemap.prototype._paintFillDarkness = function() {
        this._darknessLayer.bltBase();
    };

    const _Tilemap_createDarknessBitmap = Tilemap.prototype.createDarknessBitmap;
    Tilemap.prototype.createDarknessBitmap = function() {
        _Tilemap_createDarknessBitmap.call(this);
        const widthWithMargin = this.width + this._margin * 2;
        const heightWithMargin = this.height + this._margin * 2;
        const tileCols = Math.ceil(widthWithMargin / this.tileWidth) + 1;
        const tileRows = Math.ceil(heightWithMargin / this.tileHeight) + 1;
        this._darknessLayer.createBaseBitmap(tileCols, tileRows);
    };

    //-------------------------------------------------------------------------
    // ShaderTilemap
    
    if (Tilemap.prototype._paintAllTiles) {

        const _ShaderTilemap__paintAllTiles = ShaderTilemap.prototype._paintAllTiles;
        ShaderTilemap.prototype._paintAllTiles = function(startX, startY) {
            this._darknessLayer.clearBase();
            _ShaderTilemap__paintAllTiles.apply(this, arguments);
        };

        const _ShaderTilemap__paintTiles = ShaderTilemap.prototype._paintTiles;
        ShaderTilemap.prototype._paintTiles = function(startX, startY, x, y) {
            _ShaderTilemap__paintTiles.apply(this, arguments);
            this._paintDarknessBitmap(startX, startY, x, y);
        };

    }

    //-------------------------------------------------------------------------
    // DarknessLayer
    
    const _DarknessLayer_destroy = DarknessLayer.prototype.destroy;
    DarknessLayer.prototype.destroy = function() {
        if (this._baseBitmap) {
            this._baseBitmap.destroy();
        }
        _DarknessLayer_destroy.call(this);
    };

    DarknessLayer.prototype.createBaseBitmap = function(width, height) {
        this._baseBitmap = new Bitmap(width, height);
    };

    DarknessLayer.prototype.clearBase = function() {
        if (this._baseBitmap) {
            this._baseBitmap.clear();
        }
    };

    DarknessLayer.prototype.bltBase = function() {
        const bitmap = this.bitmap;
        const { width:sw, height:sh } = this._baseBitmap;
        const { width:dw, height:dh } = bitmap;
        bitmap.clear();
        bitmap.blt(this._baseBitmap, 0, 0, sw, sh, 0, 0, dw, dh);
    };

    DarknessLayer.prototype._paintBaseBitmap = function(x, y, level) {
        const baseBitmap = this._baseBitmap;
        baseBitmap.paintOpacity = 255 * (7 - level) / 7;
        baseBitmap.fillRect(x, y, 1, 1, $gameMap.darknessColor());
    };

    //-------------------------------------------------------------------------
    // Game_Map

    const _Game_Map_initialize = Game_Map.prototype.initialize;
    Game_Map.prototype.initialize = function() {
        _Game_Map_initialize.apply(this, arguments);
        this._regionLightsVisible = true;
    };

    Game_Map.prototype.isRegionLightsHidden = function() {
        return this._regionLightsVisible === false;
    };
    
    Game_Map.prototype.visibleRegionLights = function() {
        this._regionLightsVisible = true;
    };
    
    Game_Map.prototype.hiddenRegionLights = function() {
        this._regionLightsVisible = false;
    };
    
    //-------------------------------------------------------------------------
    // Game_Interpreter

    const _mzCommands = {
        ChangeRegionLights: { name:'changeRegionLights', keys:['boolean'] }
    };
    Object.assign(_mzCommands, {
        'リージョン灯り変更': _mzCommands.ChangeRegionLights
    });

    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        const mzCommand = _mzCommands[command];
        if (mzCommand) {
            const args2 = Object.assign(
                {}, ...mzCommand.keys.map((k, i) => ({ [k]: args[i] || '' }))
            );
            PluginManager.callCommandMV(this, pluginName, mzCommand.name, args2);
        }
    };

    //-------------------------------------------------------------------------
    // PluginManager
    
    const _registerCommandName = PluginManager.registerCommand
        ? 'registerCommand'
        : 'registerCommandMV';
    
    PluginManager[_registerCommandName](pluginName, 'changeRegionLights', args => {
        if (args.boolean === 'true') {
            $gameMap.visibleRegionLights();
        } else {
            $gameMap.hiddenRegionLights();
        }
    });

})();
