(function () {
    'use strict';
    var _Window_Base_createContents = Window_Base.prototype.createContents;
    Window_Base.prototype.createContents = function() {
        _Window_Base_createContents.apply(this, arguments);
        this.contents.outlineColor = 'rgba(248, 60, 246, 0.8)';
        this.contents.outlineWidth = 3;
    };
})();