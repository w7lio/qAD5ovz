/*:
 * @plugindesc Keeps DTextPicture text pictures inside the visible game screen.
 * @author Translation patch
 *
 * @param Margin
 * @type number
 * @min 0
 * @default 18
 * @desc Minimum distance, in pixels, between dynamic text and the screen edge.
 *
 * @help
 * Load this plugin after DTextPicture.
 *
 * The displayed text is not edited or shortened. When a dynamic text picture
 * would cross a screen edge, only its rendered position is adjusted.
 */

(function() {
    'use strict';

    var pluginName = 'DTextPictureScreenClamp';
    var parameters = PluginManager.parameters(pluginName);
    var margin = Math.max(0, Number(parameters.Margin || 18));
    var _Sprite_Picture_updatePosition = Sprite_Picture.prototype.updatePosition;

    Sprite_Picture.prototype.updatePosition = function() {
        _Sprite_Picture_updatePosition.apply(this, arguments);
        this.clampDTextPictureToScreen();
    };

    Sprite_Picture.prototype.clampDTextPictureToScreen = function() {
        var picture = this.picture();
        if (!picture || !picture.dTextInfo || !this.bitmap) {
            return;
        }

        var screenWidth = Graphics.boxWidth;
        var screenHeight = Graphics.boxHeight;
        var scaleX = Math.abs(picture.scaleX()) / 100;
        var scaleY = Math.abs(picture.scaleY()) / 100;
        var width = this.bitmap.width * scaleX;
        var height = this.bitmap.height * scaleY;
        var left = this.x - width * this.anchor.x;
        var top = this.y - height * this.anchor.y;
        var maxRight = screenWidth - margin;
        var maxBottom = screenHeight - margin;

        if (width <= screenWidth - margin * 2) {
            if (left < margin) {
                this.x += margin - left;
            } else if (left + width > maxRight) {
                this.x -= left + width - maxRight;
            }
        } else {
            this.x = screenWidth / 2 + width * (this.anchor.x - 0.5);
        }

        if (height <= screenHeight - margin * 2) {
            if (top < margin) {
                this.y += margin - top;
            } else if (top + height > maxBottom) {
                this.y -= top + height - maxBottom;
            }
        } else {
            this.y = screenHeight / 2 + height * (this.anchor.y - 0.5);
        }
    };
})();
