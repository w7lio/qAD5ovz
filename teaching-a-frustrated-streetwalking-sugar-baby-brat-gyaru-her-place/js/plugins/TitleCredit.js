//=============================================================================
// TitleCredit.js  --  translator credit + Ko-fi link on the title screen
//=============================================================================
/*:
 * @target MV
 * @plugindesc Fan-translation credit and Ko-fi link, drawn on the title screen.
 * @author CoffeeLover2022
 *
 * @param credit
 * @text Credit line
 * @default Translated by CoffeeLover2022
 *
 * @param kofi
 * @text Ko-fi link
 * @default ko-fi.com/coffeelover2022
 *
 * @help
 * MANDATORY on every release (CLAUDE.md: the title/starter image carries the credit, and the
 * Ko-fi link belongs on the title and the loading screen, nowhere else).
 *
 * ---------------------------------------------------------------------------
 * THREE THINGS ABOUT THIS GAME THAT EACH KILLED AN EARLIER VERSION SILENTLY.
 * All three were finally measured by having the plugin write a log through nw.js's `fs`,
 * because nothing about them is visible in a screenshot -- the credit simply was not there.
 *
 * 1. THE TITLE IS NOT Scene_Title. The hook never fired once; no Scene_Title is ever entered.
 *    The title screen is a MAP.
 * 2. IT IS NOT THE START MAP EITHER. `$dataSystem.startMapId` is 2, and the game boots there
 *    and immediately transfers to map 3 ("(Autorun Bypass)"), which is what the player sees.
 *    So `mapId() === startMapId` is false by the time anyone looks, and so is "latch the first
 *    map you see".
 * 3. A SPRITE ADDED ONCE GETS BURIED. This game builds its title from PictureSpine +
 *    kz_PictureChoices, which add children AFTER the scene has started. A sprite added in
 *    `create` or on the first update ends up underneath them. Measured directly: the scene's
 *    child count kept climbing (5 -> 6 -> 7) while a bright red test box stayed invisible.
 *    Re-appending every frame fixes it -- `addChild` on an existing child just moves it to the
 *    end of the list -- and costs nothing.
 *
 * Hence: hook Scene_Map.update, draw on any map that is not the story map, and re-assert the
 * sprite's position in the child list every frame.
 *
 * WHY A PLUGIN AND NOT A PIXEL STAMP ON THE TITLE IMAGE.
 * The standing rule says stamp the title IMAGE. Here there is no title image to stamp: the art
 * is a 4096x4096 Spine atlas, and `img\pictures\titleppc.png` is not art at all -- it is 100%
 * opaque and is a PictureCallCommon click-region map. Drawing at runtime puts the same words on
 * the same screen and is undone by deleting one file.
 */
(() => {
    "use strict";
    const P = PluginManager.parameters("TitleCredit");
    const CREDIT = String(P.credit || "Translated by CoffeeLover2022");
    const KOFI = String(P.kofi || "ko-fi.com/coffeelover2022");

    // WHICH SCREEN IS THE TITLE — fifth answer, and the first one that is actually about the
    // title. Map id is not a discriminator: the game boots on map 2, transfers to map 3, and
    // then plays the whole story on map 3 as well.
    //
    // Switch 62 `日付` was the fourth answer and it was WRONG, reported by Kevin playing the
    // shipped build: the credit plate turned up on the earnings screen after the first sex
    // scene. 62 is not "play has started", it is "show the date HUD", and the game turns it OFF
    // all over normal play. Measured in the event data: 19 OFF sites against 12 ON, including
    // `CE 4 並列 ウィンドウ消去`, `CE 148 翌朝`, `CE 151 通常`, `CE 158 翌日演出` and every H
    // common event (`op1b h`, `好感度1 特殊h前`, `好感度3 特殊h`, `好感度4 END h`). So the plate
    // was drawing over cutscenes and H scenes too, not only over the result screen -- against
    // the standing rule that the credit and the Ko-fi link appear on the title and the mascot
    // loading screen and NOWHERE else.
    //
    // Switch 37 is named `タイトルPPC` and is the game's own "the title menu is up" flag: ON in
    // `CE 37 \タイトル` and in the two Continue sub-menu events, OFF in `CE 46 \t移動先共通`
    // (the transfer that leaves the title) and in `CE 83 //回想表示` (the recollection gallery).
    // That is the screen this credit belongs on, named by the developer.
    const TITLE_SWITCH = 37;

    function onTitle() {
        if (typeof $gameSwitches === "undefined" || !$gameSwitches) return false;
        return $gameSwitches.value(TITLE_SWITCH);
    }

    function buildSprite() {
        const w = Graphics.width;
        const bmp = new Bitmap(w, Graphics.height);
        // A plate, because the top-right of this title is her silver hair and white-on-silver
        // is unreadable however thick the outline.
        const PW = 430, PH = 78, PX = w - PW - 18, PY = 14;
        bmp.fillRect(PX, PY, PW, PH, "rgba(0,0,0,0.58)");
        bmp.fillRect(PX, PY, PW, 3, "#e0a355");
        bmp.outlineColor = "rgba(0,0,0,0.9)";
        bmp.outlineWidth = 4;
        bmp.fontSize = 24;
        bmp.textColor = "#ffffff";
        bmp.drawText(CREDIT, PX + 14, PY + 9, PW - 28, 30, "center");
        bmp.fontSize = 21;
        bmp.textColor = "#e0a355";
        bmp.drawText(KOFI, PX + 14, PY + 42, PW - 28, 28, "center");
        return new Sprite(bmp);
    }

    const _mapUpdate = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _mapUpdate.call(this);
        if (!$gameMap) return;
        if (onTitle()) {
            if (!this._translatorCredit) this._translatorCredit = buildSprite();
            this.addChild(this._translatorCredit);   // re-assert to the top every frame
        } else if (this._translatorCredit) {
            this.removeChild(this._translatorCredit);
            this._translatorCredit = null;
        }
    };
})();
