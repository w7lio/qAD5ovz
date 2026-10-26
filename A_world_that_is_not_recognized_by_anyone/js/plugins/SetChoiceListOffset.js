//=============================================================================
// SetChoiceListOffset.js
//=============================================================================

/*:
 * @plugindesc 選択肢ウィンドウの位置を補正します。
 * @author jp_asty
 *
 * @param offsetX
 * @type number
 * @min -9007199254740991
 * @max +9007199254740991
 * @default 0
 * @desc ドット単位で指定します。左がマイナスで、右がプラスです。
 * @text 横方向の補正値
 *
 * @param offsetY
 * @type number
 * @min -9007199254740991
 * @max +9007199254740991
 * @default 0
 * @desc ドット単位で指定します。上がマイナスで、下がプラスです。
 * @text 縦方向の補正値
 *
 * @help
 * 選択肢ウィンドウの位置を補正します。
 *
 * 利用規約
 * パブリックドメインです。ご自由にお使い下さい。
 */
(function() {

  'use strict';
  const inParams = PluginManager.parameters("SetChoiceListOffset");
  const offsetX = Number(inParams["offsetX"]);
  const offsetY = Number(inParams["offsetY"]);

  //-----------------------------------------------------------------------------
  // Window_ChoiceList
  //
  const _Window_ChoiseList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
  Window_ChoiceList.prototype.updatePlacement = function() {
    _Window_ChoiseList_updatePlacement.call(this);
    this.x += offsetX;
    this.y += offsetY;
  };

})();
