//==============================================================================
// DragSpine.js
//
// Version : 1.9.0 2023/05/29
//==============================================================================

/*:
    * @plugindesc 表示したSpineスケルトンをマウスでドラッグして移動させることができるプラグイン ver.1.71
    * @author Su
    * @version 1.0
    * @target MV
    *
    * @param Variables
    * @type struct<StoreVariables>[]
    * @default []
    * @desc ピクチャ番号ごとに保存する変数を設定できます
    * @text 保存する変数の設定
    *
    * @param Regions
    * @type struct<Region>[]
    * @default []
    * @desc ピクチャ番号ごとに移動境界を設定できます
    * @text 移動境界の設定
    * 
    * @param TitleBar
    * @type boolean
    * @default true
    * @desc タイトルバーに座標、拡大率を表示する
    * @text 座標・拡大率を表示
    *
    * @param Target
    * @text == ピクチャ選択設定 ==
    *
    * @param SelectableSwitches
    * @type struct<SelectableSwitch>[]
    * @default []
    * @desc 動かせるピクチャをスイッチで切り替えられます
    * @text スイッチで切替
    * @parent Target
    *
    * @param NeedsDrag
    * @type boolean
    * @default false
    * @desc 選択するためにクリックしてホールドすることが必要になります
    * Off のときはポインターを乗せるだけで選択されます
    * @text クリックして選択
    * @parent Target
    *
    * @param ToneDown
    * @type number
    * @decimals 1
    * @max 1.0
    * @default 1.0
    * @desc 掴んだ時に指定値まで画像を暗くします
    * 1.0 なら変化はありません
    * @text ドラッグ時にトーンを下げる
    * @parent  Target
    *
    * @param Movement
    * @text === ピクチャ移動の設定 ===
    *
    * @param AxisLockKey
    * @type combo 
    * @option shift
    * @option control
    * @option tab
    * @default shift
    * @desc 移動させる軸を固定するキーを設定します
    * default: shift
    * @text 軸固定キー
    * @parent Movement
    *
    * @param Scaling
    * @text === 拡大・縮小設定 ===
    *
    * @param ScaleLimits
    * @type struct<ScaleLimit>[]
    * @parent Scaling
    * @desc 拡大率の最小値と最大値を設定します
    * @text 拡大率の制限
    *
    * @param ScaleCenter
    * @type select
    * @option Spineのルート座標
    * @value Origin
    * @option ポインター(マウス等)座標
    * @value Pointer
    * @default Pointer
    * @parent Scaling
    * @desc 指定した座標を中心にして拡大・縮小を行います
    * @text 拡大・縮小の中心
    *
    * ============================================================================
    * 概要
    * ============================================================================
    * @help
    * 表示したSpineスケルトンを、マウスでドラッグして動かすことができます。
    * ドラッグすると、ウィンドウタイトルに最後に掴んだスケルトンの座標と、初期位置からの移動量を表示します。
    * ドラッグ中にマウスホイールを回転させるとスケール値を変更し、同様に現在のスケール値を表示することができます。
    * 拡大・縮小の中心を、Spineのデータに設定されたルート座標と、マウス等のポインター座標のどちらにするか選ぶことができます。
    * ドラッグ中に Ctrl+C を押すとクリップボードに座標または拡大率をコピーすることができます。
    * 　 x座標、y座標、拡大率の順にコピーする値が変わります。
    *
    * ============================================================================
    * 使い方
    * ============================================================================
    * 前提として、Spine のデータに境界ボックスが設定されている必要があります。
    * これが無い場合は掴むことができません。
    *
    * 現在は左クリックするだけで、一番上に表示されているスケルトンを掴みます。
    * クリックして選択を On にしていると、ホールドした状態でのみ移動や拡大・縮小を行えるようになります。
    * Off の時は、マウスオーバーしているピクチャの拡大・縮小が可能になります。
    * 
    * 指定したキーを押している間、x軸またはy軸のみに移動方向を固定することができます。
    *
    * 動かしたいピクチャの番号を指定することで、そのピクチャ番号に割り当てられているスケルトンを選択できるようになります。
    * また、選択の可不可は以下の方法で実行中に変更することが可能です。
    * ・選択可能にする
    *       選択不可状態のピクチャの上にカーソルを置いた状態で固定キーを押す
    * ・選択できなくする
    *       選択可能状態のピクチャをドラッグしたまま固定キーを押す
    *
    * ============================================================================
    * プラグインコマンド
    * ============================================================================
    * - S_RESET_POS
    *  座標を元の位置に戻します
    *
    * - S_RESET_ALL
    *  座標とスケール値を元に戻します
    *
    * ※常に動作してしまうので、ゲームの要素として必要ない場合はデプロイ前にOFFにするようにしてください。
    * ※マウスカーソルがウィンドウの外に出ている場合、マウスホイールの入力を取得しないようなので注意してください。
    *
    *
*/

/*~struct~StoreVariables:
    * @param PictureId
    * @type number
    * @min 1
    * @default 1
    * @desc データ記録対象となるピクチャ番号を指定します
    * @text ピクチャ番号
    *
    * @param PositionX
    * @type variable
    * @default 100
    * @desc X 座標を格納する変数を指定します
    * @text X 座標
    * @parent Variables
    *
    * @param PositionY
    * @type variable
    * @default 101
    * @desc Y 座標を格納する変数を指定します
    * @text Y 座標
    * @parent Variables
    *
    * @param OffsetX
    * @type variable
    * @default 102
    * @desc 差分の X 座標を格納する変数を指定します
    * @text 差分 X 座標
    * @parent Variables
    *
    * @param OffsetY
    * @type variable
    * @default 103
    * @desc 差分の Y 座標を格納する変数を指定します
    * @text 差分 Y 座標
    * @parent Variables
    *
    * @param ScaleX
    * @type variable
    * @default 104
    * @desc X 軸のスケール値を格納する変数を指定します
    * @text X 軸スケール値
    * @parent Variables
    *
    * @param ScaleY
    * @type variable
    * @default 105
    * @desc Y 軸のスケール値を格納する変数を指定します
    * @text Y 軸スケール値
    * @parent Variables
*/

/*~struct~Region:
    * @param PictureId
    * @type number
    * @min 1
    * @default 1
    * @desc 境界を制限するピクチャ番号を指定します
    * @text ピクチャ番号
    *
    * @param MinX
    * @type number
    * @max 9007199254740991
    * @min -9007199254740991
    * @default 0
    * @desc x 座標の最小値を設定します
    * @text x 座標最小値
    *
    * @param MaxX
    * @type number
    * @max 9007199254740991
    * @min -9007199254740991
    * @default 816
    * @desc x 座標の最大値を設定します
    * @text x 座標最大値
    *
    * @param MinY
    * @type number
    * @max 9007199254740991
    * @min -9007199254740991
    * @default 0
    * @desc y 座標の最小値を設定します
    * @text y 座標最小値
    *
    * @param MaxY
    * @type number
    * @max 9007199254740991
    * @min -9007199254740991
    * @default 624
    * @desc y 座標の最大値を設定します
    * @text y 座標最大値
*/

/*~struct~SelectableSwitch:
    * @param Symbol
    * @type string
    * @desc ピクチャ以外に使用されているSpine を指定するために使用します
    * @text シンボル
    *
* @param PictureId
* @type number
* @text ピクチャ番号
* 
* @param Switch
* @type switch
* @text スイッチ
*/

/*~struct~ScaleLimit:
    * @param PictureId
    * @type number
    * @desc 拡大率を制限する対象となるピクチャの番号を指定します
    * @text ピクチャ番号
    *
    * @param MaxScale
    * @type number
    * @decimals 2
    * @parent Scaling
    * @desc 拡大率の最大値を設定します
    * 1.00 を等倍とします。
    * @text 拡大率の最大値
    *
    * @param MinScale
    * @type number
    * @decimals 2
    * @default 0.10
    * @parent Scaling
    * @desc 拡大率の最小値を設定します
    * 1.00 を等倍とします。
    * @text 拡大率の最小値
*/

// ちょっとこの座標の初期位置を基準にした処理だと、別の所でアニメーションさせようとした時にバグるのでは
// TODO:別のシーンから戻ると位置がリセットされるようなので確認
// 自分で忘れてたのでメモ
// 　シンボルはピクチャ以外でSpineを扱うときに使うもの
// 　シンボルを Game_Spine に追加する処理を実装する必要がある
//   シンボルが設定されているとピクチャ番号での指定ができなくなるので、これに対応するかどうか


(() => {
    'use strict';

    const pluginName = document.currentScript.src.split('/').pop().replace(/\.js$/, '');
    const pluginParams = PluginManager.parameters(pluginName);
    const parsedParams = JSON.parse(JSON.stringify(
        pluginParams,
        (key, value) => {
            try { return JSON.parse(value); } catch (e) { }
            return value
        }
    ));
    // イベントテスト実行時以外では無視する
    // if (!DataManager.isEventTest()) return;

    let showOnTitleBar = parsedParams['TitleBar'];

    let needsDrag = parsedParams['NeedsDrag'];
    let scaleCenter = parsedParams['ScaleCenter'];

    const storeVariables = parsedParams['Variables'].reduce((acc, value) => {
        acc[value['PictureId']] = {
            posVarX: value['PositionX'], posVarY: value['PositionY'],
            offsetVarX: value['OffsetX'], offsetVarY: value['OffsetY'],
            scaleVarX: value['ScaleX'], scaleVarY: value['ScaleY'],
        };
        return acc;
    }, {});

    const regions = parsedParams['Regions'].reduce((acc, value) => {
        acc[value['PictureId']] = {
            minX: value['MinX'], minY: value['MinY'],
            maxX: value['MaxX'], maxY: value['MaxY'],
        };
        return acc;
    }, {});

    const selectableSwitches = parsedParams['SelectableSwitches'].reduce((acc, value) => {
        acc[value['Symbol'] || value['PictureId']] = value['Switch'];
        return acc;
    }, {});

    // const targetPictures = parsedParams['TargetPictures'].filter(num => num > 0);
    // const targetPictures = parsedParams['TargetPictures'].filter(num => num > 0)
    //     .reduce((acc, value) => { acc[value] = true; return acc; }, {});
    const targetPictures = {};
    const lockKey = parsedParams['LockKey'];

    const axisLockKey = parsedParams['AxisLockKey'];
    const toneDown = parsedParams['ToneDown'];

    const scaleLimits = parsedParams['ScaleLimits'];

    let isDrag = null;

    // ドラッグ開始のポインター座標
    let triggeredPos = { x: 0, y: 0 };

    // ドラッグ開始時のスケルトンルート座標
    let beforeMov = { x: 0, y: 0 };

    let posDiff = { x: 0, y: 0 };
    let diffScale = { x: 0, y: 0 };

    let axisLock = { x: false, x: false };

    let originalTitle = '';

    (_clear_ => {
        TouchInput.clear = function () {
            _clear_.call(this);

            this.mouseX = 0;
            this.mouseY = 0;
        }
    })(TouchInput.clear);

    (__onMouseMove_ => {
        TouchInput._onMouseMove = function (event) {
            __onMouseMove_.apply(this, arguments);

            this.mouseX = Graphics.pageToCanvasX(event.pageX);
            this.mouseY = Graphics.pageToCanvasY(event.pageY);
        }
    })(TouchInput._onMouseMove);

    (_updateDocumentTitle_ => {
        Scene_Boot.prototype.updateDocumentTitle = function () {
            _updateDocumentTitle_.call(this);

            originalTitle = document.title;
        }
    })(Scene_Boot.prototype.updateDocumentTitle);

    (_init_ => {
        Sprite_Spine.prototype.init = function () {
            _init_.call(this);

            if (scaleLimits) {
                this.scaleLimit = scaleLimits[scaleLimits.findIndex(e => e['PictureId'] === this._pictureId)] || null;
            }
        }
    })(Sprite_Spine.prototype.init);

    const switchSelectable = (sprite, touchPos) => {
        // キーで選択の可不可を切り替える
        // const hitTest = sprite.spine().hitTest(touchPos.x, touchPos.y);
        // if (hitTest && hitTest.length) {
        //     if (Input.isTriggered(lockKey)) {
        //         targetPictures[sprite._pictureId] = !targetPictures[sprite._pictureId];
        //     }
        // }
        const id = sprite.symbol || sprite._pictureId;
        if (selectableSwitches[id]) {
            targetPictures[id] = $gameSwitches.value(selectableSwitches[id]);
        }
    };

    const setDrag = (sprite, touchPos) => {
        isDrag = sprite;

        triggeredPos = touchPos;
        beforeMov.x = sprite.x;
        beforeMov.y = sprite.y;

        posDiff.x = 0;
        posDiff.y = 0;

        diffScale.x = 0;
        diffScale.y = 0;

        if (!sprite.initialPos) sprite.initialPos = { x: sprite.x, y: sprite.y };
    };

    const release = (spine) => {
        // 色を戻す
        
        isDrag = null;

        posDiff.x = 0;
        posDiff.y = 0;

        diffScale.x = 0;
        diffScale.y = 0;
    };

    const updateMove = (sprite, pointerPos) => {

        posDiff = Object.keys(beforeMov).reduce((res, value) => {
            res[value] = pointerPos[value] - triggeredPos[value];
            return res;
        }, {});

        if (Input.isPressed(axisLockKey)) {
            if (Math.abs(posDiff.x) > Math.abs(posDiff.y)) {
                axisLock.x = false;
                axisLock.y = true;
            } else {
                axisLock.x = true;
                axisLock.y = false;
            }
        } else {
            axisLock.x = false;
            axisLock.y = false;
        }


    };

    const setScale = (sprite, pointerPos) => {
        const spine = sprite.spine();
        // スケーリング
        const currentScale = spine.scale;
        const parentScale = sprite.parent.scale;
        const rate = parentScale.x;

        if (TouchInput.wheelY) {
            const sign = -Math.sign(TouchInput.wheelY);
            const dScale = {
                x: sign * 0.01 * (1 / rate),
                y: sign * 0.01 * (1 / rate)
            };
            const newScale = { x: currentScale.x + dScale.x, y: currentScale.y + dScale.y };

            if (sprite.scaleLimit) {
                const minScale = sprite.scaleLimit['MinScale'] / rate;
                const maxScale = sprite.scaleLimit['MaxScale'] / rate;
                if (minScale && newScale.x < minScale) {
                    newScale.x = minScale;
                    newScale.y = minScale;
                } else if (maxScale && newScale.x > maxScale) {
                    newScale.x = maxScale;
                    newScale.y = maxScale;
                }
            }

            spine.setScale(newScale.x, newScale.y);

            dScale.x = newScale.x - currentScale.x;
            dScale.y = newScale.y - currentScale.y;

            if (dScale.x === 0 && dScale.y === 0) return;

            // マウス中心の拡縮になるように座標を調整する
            if (scaleCenter === 'Pointer') {
                const currentVec = {
                    x: ((sprite.x) * parentScale.x + sprite.parent.x - pointerPos.x) / (currentScale.x * rate),
                    y: ((sprite.y) * parentScale.y + sprite.parent.y - pointerPos.y) / (currentScale.y * rate)
                };
                diffScale.x += currentVec.x * dScale.x;
                diffScale.y += currentVec.y * dScale.y;
            }
        }
    };

    Input.keyMapper[67] = 'copy';
    let copyCycle = 0;
    const numCopyTarget = 3;

    (_update_ => {
        Sprite_Spine.prototype.update = function () {
            _update_.call(this);

            const spine = this.spine();
            if (!spine) return;

            const touchPos = { x: TouchInput.x, y: TouchInput.y };


            switchSelectable(this, touchPos);
            if (!targetPictures[this.symbol || this._pictureId]) return;

            if (TouchInput.isTriggered()) {

                // 境界ボックスによるキャッチ判定
                if (spine.hitTest(touchPos.x, touchPos.y).length) {
                    setDrag(this, touchPos);
                }
            }

            if (!TouchInput.isPressed()) {
                release(spine);
            }

            if (isDrag == this) {
                let rate = 1.0;
                rate = this.parent.scale.x;

                if (Input.isTriggered(lockKey)) {
                    targetPictures[this.symbol || this._pictureId] = false;
                    release(spine);

                    return;
                }

                // 選択されている間色を変える
                

                // スケーリング
                setScale(this, touchPos);

                // スケルトンを移動させる
                if (TouchInput.isMoved()) {
                    updateMove(this, touchPos);
                }

if (spine.hitTest(touchPos.x, touchPos.y).length)  {

$gameSwitches.setValue(160,true)

}

                const region = regions[this._pictureId];
                let newPosX = beforeMov.x + (axisLock.x ? 0 : posDiff.x / rate) + diffScale.x;
                let newPosY = beforeMov.y + (axisLock.y ? 0 : posDiff.y / rate) + diffScale.y;

                if (region) {
                    const roundedPosition = { x: Math.round(newPosX * rate), y: Math.round(newPosY * rate) }
                    const realPosition = { x: this.parent.x + roundedPosition.x, y: this.parent.y + roundedPosition.y };
                    if (realPosition.x < region.minX) {
                        newPosX = (region.minX - this.parent.x) / rate;
                    } else if (realPosition.x >= region.maxX) {
                        newPosX = (region.maxX - this.parent.x) / rate;
                    }
                    if (realPosition.y < region.minY) {
                        newPosY = (region.minY - this.parent.y) / rate;
                    } else if (realPosition.y >= region.maxY) {
                        newPosY = (region.maxY - this.parent.y) / rate;
                    }
                }

                this.x = newPosX;
                this.y = newPosY;

                // 変数に保存
                storeData(this);

                if(showOnTitleBar){
                updateWindowTitle(this);
                }


                // ショートカットの入力受付
                if (Input.isPressed('control') && Input.isTriggered('copy')) {
                    switch (copyCycle) {
                        case 0:
                            copyToClipBoard(realPosition(this).x);
                            break;
                        case 1:
                            copyToClipBoard(realPosition(this).y);
                            break;
                        case 2:
                            copyToClipBoard(scalePercentage(this));
                            break;
                    }
                    copyCycle++;
                    if (copyCycle >= numCopyTarget) copyCycle = 0;
                }
            } else if (isDrag == null) {

                const mousePos = { x: TouchInput.mouseX, y: TouchInput.mouseY };

                let hit = spine.hitTest(mousePos.x, mousePos.y);
                if (!needsDrag && hit && hit.length) {
                    if (!this.initialPos) this.initialPos = { x: this.x, y: this.y };

                    const currentScale = spine.scale;
                    const parentScale = this.parent.scale;

                    const rate = this.parent.scale.x;

                    if (TouchInput.wheelY) {
                        const sign = -Math.sign(TouchInput.wheelY);
                        const dScale = {
                            x: sign * 0.01 * (1 / rate),
                            y: sign * 0.01 * (1 / rate)
                        };
                        const newScale = { x: currentScale.x + dScale.x, y: currentScale.y + dScale.y };
                        if (this.scaleLimit) {
                            const minScale = this.scaleLimit['MinScale'] / rate;
                            const maxScale = this.scaleLimit['MaxScale'] / rate;
                            if (minScale && newScale.x < minScale) {
                                newScale.x = minScale;
                                newScale.y = minScale;
                            } else if (maxScale && newScale.x > maxScale) {
                                newScale.x = maxScale;
                                newScale.y = maxScale;
                            }
                        }

                        spine.setScale(newScale.x, newScale.y);

                        dScale.x = newScale.x - currentScale.x;
                        dScale.y = newScale.y - currentScale.y;

                        // マウス中心の拡縮になるように座標を調整する
                        if (scaleCenter === 'Pointer') {
                            const currentVec = {
                                x: ((this.x) * parentScale.x + this.parent.x - mousePos.x) / (currentScale.x * rate),
                                y: ((this.y) * parentScale.y + this.parent.y - mousePos.y) / (currentScale.y * rate)
                            };

                            const region = regions[this._pictureId];
                            let newPosX = this.x + currentVec.x * dScale.x;
                            let newPosY = this.y + currentVec.y * dScale.y;
                            if (region) {
                                const roundedPosition = { x: Math.round(newPosX * rate), y: Math.round(newPosY * rate) }
                                const realPosition = { x: this.parent.x + roundedPosition.x, y: this.parent.y + roundedPosition.y };
                                if (realPosition.x < region.minX) {
                                    newPosX = (region.minX - this.parent.x) / rate;
                                } else if (realPosition.x >= region.maxX) {
                                    newPosX = (region.maxX - this.parent.x) / rate;
                                }
                                if (realPosition.y < region.minY) {
                                    newPosY = (region.minY - this.parent.y) / rate;
                                } else if (realPosition.y >= region.maxY) {
                                    newPosY = (region.maxY - this.parent.y) / rate;
                                }
                            }
                            this.x = newPosX;
                            this.y = newPosY;
                        }
                    }

                    // 変数に保存
                    storeData(this);

                    if(showOnTitleBar){
                    updateWindowTitle(this);
                    }
                }
            }

            // ログ出力
            const storeVar = storeVariables[this._pictureId];
            if (!storeVar) return;

            return;
            console.log(
                this._pictureId,
                $gameVariables.value(storeVar.posVarX),
                $gameVariables.value(storeVar.posVarY),
                $gameVariables.value(storeVar.offsetVarX),
                $gameVariables.value(storeVar.offsetVarY),
                $gameVariables.value(storeVar.scaleVarX),
                $gameVariables.value(storeVar.scaleVarY),
            );
        }
    })(Sprite_Spine.prototype.update);

    const realPosition = (sprite) => {
        const rate = sprite.parent.scale.x;
        return {
            x: sprite.parent.x + sprite.x * rate,
            y: sprite.parent.y + sprite.y * rate
        };
    }
    const scalePercentage = (sprite) => {
        return Math.round(sprite.spine().scale.x * 100 * sprite.parent.scale.x);
    }

    const storeData = (sprite) => {
        const storeVar = storeVariables[sprite._pictureId];
        if (!storeVar) return;

        const spine = sprite.spine();
        const rate = sprite.parent.scale.x;

        const roundedPosition = { x: Math.round(sprite.x * rate), y: Math.round(sprite.y * rate) }
        const offset = { x: roundedPosition.x - sprite.initialPos.x, y: roundedPosition.y - sprite.initialPos.y };
        const realPosition = { x: sprite.parent.x + roundedPosition.x, y: sprite.parent.y + roundedPosition.y };

        // 変数に保存
        $gameVariables.setValue(storeVar.posVarX, realPosition.x);
        $gameVariables.setValue(storeVar.posVarY, realPosition.y);
        $gameVariables.setValue(storeVar.offsetVarX, offset.x);
        $gameVariables.setValue(storeVar.offsetVarY, offset.y);

        const formedScale = { x: Math.round(spine.scale.x * 100 * rate), y: Math.round(spine.scale.y * 100 * rate) };

        $gameVariables.setValue(storeVar.scaleVarX, formedScale.x);
        $gameVariables.setValue(storeVar.scaleVarY, formedScale.y);
    }

    const updateWindowTitle = (sprite) => {
        const spine = sprite.spine();

        const parent = sprite.parent;
        const rate = parent.scale.x;

        const roundedPosition = { x: Math.round(sprite.x * rate), y: Math.round(sprite.y * rate) }
        const offset = { x: roundedPosition.x - sprite.initialPos.x, y: roundedPosition.y - sprite.initialPos.y };
        const realPosition = { x: parent.x + roundedPosition.x, y: parent.y + roundedPosition.y };

        const formedScale = { x: Math.round(spine.scale.x * 100 * rate), y: Math.round(spine.scale.y * 100 * rate) };

        document.title = `${originalTitle} \/ Position={x:${realPosition.x}, y:${realPosition.y}} offset={x:${offset.x}, y:${offset.y}} \/ Scale={x:${formedScale.x}%, y:${formedScale.y}%}`;

    };

    const copyToClipBoard = function (value) {
        const listener = function (e) {
            e.clipboardData.setData("text/plain", value);
            e.preventDefault();
            document.removeEventListener("copy", listener);
        }

        document.addEventListener("copy", listener);
        // https での接続じゃないとAPIの方が使えないので非推奨ですが使ってます
        document.execCommand("copy");
    };

    // TABキーを一回目で動作するようにする
    (__shouldPreventDefault_ => {
        Input._shouldPreventDefault = function (keyCode) {
            return __shouldPreventDefault_.apply(this, arguments) || keyCode === 9;
        }
    })(Input._shouldPreventDefault);

    (_pluginCommand_ => {
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _pluginCommand_.apply(this, arguments);

            if (command === 'S_RESET_POS') {
                for (let i = 0; i < $gameScreen.maxPictures(); i++) {
                    if (!$gameScreen.picture(i)) continue;

                    const spine = $gameScreen.spine(i);
                    if (!spine.skeleton) continue;

                    spine.setOffset(0, 0);
                }
            }
            else if (command === 'S_RESET_ALL') {
                for (let i = 0; i < $gameScreen.maxPictures(); i++) {
                    if (!$gameScreen.picture(i)) continue;

                    const spine = $gameScreen.spine(i);
                    if (!spine.skeleton) continue;

                    spine.setOffset(0, 0);
                    spine.setScale(1, 1);
                }
            }
        }
    })(Game_Interpreter.prototype.pluginCommand);
})();