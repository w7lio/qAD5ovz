//=============================================================================
// SimpleVoice.js
// ----------------------------------------------------------------------------
// (C)2017 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.3.3 2022/10/19 ループ再生時にも波形情報を取得できるように
// 1.3.2 2022/08/16 チャンネル番号と変数番号の紐づけがされていない状態だとオプションのボイス音量の項目が消えてしまう問題を修正
// 1.3.1 2022/06/28 再生中の音声の波形の大きさを変数に取得できる機能を追加
// 1.3.0 2021/06/27 ボイス演奏の予約ができるコマンドを追加
// 1.2.0 2021/03/04 演奏ファイルをサブフォルダから指定できる機能を追加
// 1.1.3 2020/04/15 1.1.2の修正で同時再生したボイスの停止が動作しない問題を修正
// 1.1.2 2020/04/08 異なるチャンネルで短い間隔で複数のボイスを再生した場合に、先に再生したボイスが演奏されない問題を修正
// 1.1.1 2019/01/22 イベント高速化で再生したとき、SV_STOP_VOICEが効かなくなる場合がある問題を修正
// 1.1.0 2017/07/16 ボイスのチャンネル指定機能を追加。同一チャンネルのボイスが同時再生されないようになります。
// 1.0.1 2017/06/26 英語表記のプラグインコマンドの指定方法を変更
// 1.0.0 2017/06/25 初版
// ----------------------------------------------------------------------------
// [Blog]   : https://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc SimpleVoicePlugin
 * @author triacontane
 *
 * @param FolderName
 * @type string
 * @desc ボイスファイルが格納されているフォルダ名です。
 * @default voice
 *
 * @param OptionName
 * @type string
 * @desc オプション画面に表示されるボイス音量の設定項目名称です。
 * @default ボイス 音量
 *
 * @param OptionValue
 * @type number
 * @desc ボイス音量の初期値です。
 * @default 100
 *
 * @help ボイス演奏を簡易サポートします。
 * 通常の効果音とは格納フォルダを分けられるほか、オプション画面で
 * 別途音量指定が可能になります。
 *
 * 演奏及びループ演奏はプラグインコマンドから行います。
 *
 * プラグインコマンド詳細
 *  イベントコマンド「プラグインコマンド」から実行。
 *  （パラメータの間は半角スペースで区切る）
 *
 * SV_ボイスの演奏 aaa 90 100 0 2 # 指定したボイスを演奏します。
 * SV_PLAY_VOICE aaa 90 100 0 2   # 同上
 * ※具体的な引数は以下の通りです。
 * 0 : ファイル名(拡張子不要)
 * 1 : 音量(省略した場合は90)
 * 2 : ピッチ(省略した場合は100)
 * 3 : 位相(省略した場合は0)
 * 4 : チャンネル番号
 *
 * チャンネル番号(数値)を指定すると、停止するときに指定したチャンネルと一致する
 * すべてのボイスを一度に停止することができます。
 * これにより同一のチャンネルのボイスが重なって演奏されないようになります。
 *
 * SV_ボイスのループ演奏 aaa 90 100 0 # 指定したボイスをループ演奏します。
 * SV_PLAY_LOOP_VOICE aaa 90 100 0    # 同上
 *
 * SV_ボイスの停止 aaa # ボイスaaaの演奏を停止します。
 * SV_STOP_VOICE aaa   # 同上
 * SV_ボイスの停止 1   # チャンネル[1]で再生した全てのボイスの演奏を停止します。
 * SV_STOP_VOICE 1     # 同上
 * ※引数を省略した場合は全てのボイスを停止します。
 *
 * チャンネル番号と変数番号を紐づけることで、指定したチャンネル番号に流れている音の波形の大きさを変数に取得することができます。
 * 音の大きさは0から100で取得されます。
 * 
 * This plugin is released under the MIT License.
 */
/*:ja
 * @plugindesc 簡易ボイスプラグイン
 * @author トリアコンタン, moca
 *
 * @param フォルダ名
 * @type string
 * @desc ボイスファイルが格納されているフォルダ名です。
 * @default voice
 *
 * @param オプション名称
 * @type string
 * @desc オプション画面に表示されるボイス音量の設定項目名称です。
 * @default ボイス 音量
 *
 * @param オプション初期値
 * @type number
 * @desc ボイス音量の初期値です。
 * @default 100
 * 
 * @param チャンネル番号と変数番号の紐づけ
 * @type struct<Vector2>[]
 * 
 * 
 * @help ボイス演奏を簡易サポートします。
 * 通常の効果音とは格納フォルダを分けられるほか、オプション画面で
 * 別途音量指定が可能になります。
 *
 * 演奏及びループ演奏はプラグインコマンドから行います。
 *
 * プラグインコマンド詳細
 *  イベントコマンド「プラグインコマンド」から実行。
 *  （パラメータの間は半角スペースで区切る）
 *
 * SV_ボイスの演奏 aaa 90 100 0 2 # 指定したボイスを演奏します。
 * SV_PLAY_VOICE aaa 90 100 0 2   # 同上
 * ※具体的な引数は以下の通りです。
 * 0 : ファイル名(拡張子不要)
 * 1 : 音量(省略した場合は90)
 * 2 : ピッチ(省略した場合は100)
 * 3 : 位相(省略した場合は0)
 * 4 : チャンネル番号
 * ※ファイル名にパスを指定するとサブフォルダの効果音を演奏できます。
 * 例：SV_PLAY_VOICE sub/aaa 90 100 0 2
 *
 * チャンネル番号(数値)を指定すると、停止するときに指定したチャンネルと一致する
 * すべてのボイスを一度に停止することができます。
 * これにより同一のチャンネルのボイスが重なって演奏されないようになります。
 *
 * SV_ボイスのループ演奏 aaa 90 100 0 # 指定したボイスをループ演奏します。
 * SV_PLAY_LOOP_VOICE aaa 90 100 0    # 同上
 *
 * SV_ボイスの停止 aaa # ボイスaaaの演奏を停止します。
 * SV_STOP_VOICE aaa   # 同上
 * SV_ボイスの停止 1   # チャンネル[1]で再生した全てのボイスの演奏を停止します。
 * SV_STOP_VOICE 1     # 同上
 * ※引数を省略した場合は全てのボイスを停止します。
 *
 * SV_ボイスの演奏の予約 aaa 90 100 0 2 # 指定したボイス演奏を予約します。
 * SV_RESERVE_VOICE aaa 90 100 0 2   # 同上
 * SV_ボイスのループ演奏の予約 aaa 90 100 0 2 # 指定したループボイス演奏を予約します。
 * SV_RESERVE_LOOP_VOICE aaa 90 100 0 2   # 同上
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

/*~struct~Vector2:
 * @param ChannelNumber
 * @type number
 * @desc チャンネル番号
 * @default 0
 * @min 0
 * 
 * @param VariableNumber
 * @type number
 * @desc 変数番号
 * @default 0
 * @min 0
 */

(function () {
    'use strict';
    var pluginName = 'SimpleVoice';
    var metaTagPrefix = 'SV_';

    //=============================================================================
    // ローカル関数
    //  プラグインパラメータやプラグインコマンドパラメータの整形やチェックをします
    //=============================================================================
    var getParamString = function (paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return '';
    };

    var getParamNumber = function (paramNames, min, max) {
        var value = getParamString(paramNames);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(value) || 0).clamp(min, max);
    };

    var getArgNumber = function (arg, min, max) {
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(arg) || 0).clamp(min, max);
    };

    var convertEscapeCharacters = function (text) {
        if (isNotAString(text)) text = '';
        var windowLayer = SceneManager._scene._windowLayer;
        return windowLayer ? windowLayer.children[0].convertEscapeCharacters(text) : text;
    };

    var isNotAString = function (args) {
        return String(args) !== args;
    };

    var convertAllArguments = function (args) {
        for (var i = 0; i < args.length; i++) {
            args[i] = convertEscapeCharacters(args[i]);
        }
        return args;
    };

    var setPluginCommand = function (commandName, methodName) {
        pluginCommandMap.set(metaTagPrefix + commandName, methodName);
    };

    var getVariableHandle = function (arg) {
        var value = {};
        if(PluginManager.parameters(pluginName)[arg] !== "[]" && PluginManager.parameters(pluginName)[arg] !== ""){
            JSON.parse(PluginManager.parameters(pluginName)[arg]).map(x => JSON.parse(x)).forEach(x => {
                value[Number.parseInt(x.ChannelNumber, 10)] = Number.parseInt(x.VariableNumber, 10);
            });
        }
        return value;
    }

    //=============================================================================
    // パラメータの取得と整形
    //=============================================================================
    var param = {};
    param.folderName = getParamString(['FolderName', 'フォルダ名']);
    param.optionName = getParamString(['OptionName', 'オプション名称']);
    param.optionValue = getParamNumber(['OptionValue', 'オプション初期値']);
    param.variableHandle = getVariableHandle('チャンネル番号と変数番号の紐づけ');

    var pluginCommandMap = new Map();
    setPluginCommand('ボイスの演奏', 'execPlayVoice');
    setPluginCommand('PLAY_VOICE', 'execPlayVoice');
    setPluginCommand('ボイスのループ演奏', 'execPlayLoopVoice');
    setPluginCommand('PLAY_LOOP_VOICE', 'execPlayLoopVoice');
    setPluginCommand('ボイスの停止', 'execStopVoice');
    setPluginCommand('STOP_VOICE', 'execStopVoice');
    setPluginCommand('ボイスの演奏の予約', 'execReserveVoice');
    setPluginCommand('RESERVE_VOICE', 'execReserveVoice');
    setPluginCommand('ボイスのループ演奏の予約', 'execReserveLoopVoice');
    setPluginCommand('RESERVE_LOOP_VOICE', 'execReserveLoopVoice');

    //=============================================================================
    // Game_Interpreter
    //  プラグインコマンドを追加定義します。
    //=============================================================================
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        var pluginCommandMethod = pluginCommandMap.get(command.toUpperCase());
        if (pluginCommandMethod) {
            this[pluginCommandMethod](convertAllArguments(args));
        }
    };

    Game_Interpreter.prototype.execPlayVoice = function (args, loop) {
        var voice = {};
        voice.name = args.length >= 1 ? args[0] : '';
        voice.volume = args.length >= 2 ? getArgNumber(args[1], 0, 100) : 90;
        voice.pitch = args.length >= 3 ? getArgNumber(args[2], 50, 150) : 100;
        voice.pan = args.length >= 4 ? getArgNumber(args[3], -100, 100) : 0;
        var channel = args.length >= 5 ? getArgNumber(args[4], 1) : undefined;
        AudioManager.playVoice(voice, loop || false, channel);
    };

    Game_Interpreter.prototype.execPlayLoopVoice = function (args) {
        this.execPlayVoice(args, true);
    };

    Game_Interpreter.prototype.execReserveVoice = function (args, loop) {
        var channel = args.length >= 5 ? getArgNumber(args[4], 1) : undefined;
        if (AudioManager.isExistVoiceChannel(channel)) {
            setTimeout(this.execReserveVoice.bind(this, args, loop), 16);
            return;
        }
        this.execPlayVoice(args, loop);
    };

    Game_Interpreter.prototype.execReserveLoopVoice = function (args) {
        this.execReserveVoice(args, true);
    };

    Game_Interpreter.prototype.execStopVoice = function (args) {
        var channel = Number(args[0]);
        if (isNaN(channel)) {
            AudioManager.stopVoice(args[0], null);
        } else {
            AudioManager.stopVoice(null, channel);
        }
    };

    //=============================================================================
    // ConfigManager
    //  ボイスボリュームの設定機能を追加します。
    //=============================================================================
    Object.defineProperty(ConfigManager, 'voiceVolume', {
        get: function () {
            return AudioManager._voiceVolume;
        },
        set: function (value) {
            AudioManager.voiceVolume = value;
        }
    });

    var _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function () {
        var config = _ConfigManager_makeData.apply(this, arguments);
        config.voiceVolume = this.voiceVolume;
        return config;
    };

    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function (config) {
        _ConfigManager_applyData.apply(this, arguments);
        var symbol = 'voiceVolume';
        this.voiceVolume = config.hasOwnProperty(symbol) ? this.readVolume(config, symbol) : param.optionValue;
    };

    //=============================================================================
    // Window_Options
    //  ボイスボリュームの設定項目を追加します。
    //=============================================================================
    var _Window_Options_addVolumeOptions = Window_Options.prototype.addVolumeOptions;
    Window_Options.prototype.addVolumeOptions = function () {
        _Window_Options_addVolumeOptions.apply(this, arguments);
        this.addCommand(param.optionName, 'voiceVolume');
    };

    /**
     * Analyser付きのWebAudio
     */
    function WebAudioWithAnalyser() {
        this.initialize.apply(this, arguments);
    }
    
    WebAudioWithAnalyser.prototype = Object.create(WebAudio.prototype);
    WebAudioWithAnalyser.prototype.constructor = WebAudioWithAnalyser;
    
    WebAudioWithAnalyser.prototype.initialize = function(url) {
        WebAudio.prototype.initialize.call(this, url);

        this._analyser = null;
        this._count = 0;
    };

    WebAudioWithAnalyser.prototype._createNodes = function() {
        WebAudio.prototype._createNodes.call(this);

        this._analyser = WebAudio._context.createAnalyser();
        this._analyser.fftSize = 2048;
        this._count = new Uint8Array(this._analyser.frequencyBinCount);
    };

    WebAudioWithAnalyser.prototype._connectNodes = function() {
        WebAudio.prototype._connectNodes.call(this);

        this._sourceNode.connect(this._analyser);
        // this._analyser.connect(WebAudio._context.destination);
    };

    //=============================================================================
    // AudioManager
    //  ボイスの演奏機能を追加定義します。
    //=============================================================================
    Object.defineProperty(AudioManager, 'voiceVolume', {
        get: function () {
            return this._voiceVolume;
        },
        set: function (value) {
            this._voiceVolume = value;
        }
    });

    AudioManager.updateVoiceParameters = function (buffer, voice) {
        this.updateBufferParameters(buffer, this._voiceVolume, voice);
    };

    /**
     * Analyser付きのWebAudioの作成
     */
    AudioManager.createBufferWithAnalyser = function(folder, name) {
        var ext = this.audioFileExt();
        var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
        if (this.shouldUseHtml5Audio() && folder === 'bgm') {
            if(this._blobUrl) Html5Audio.setup(this._blobUrl);
            else Html5Audio.setup(url);
            return Html5Audio;
        } else {
            // return new WebAudio(url);
            return new WebAudioWithAnalyser(url);
        }
    };

    AudioManager._voiceBuffers = [];
    AudioManager._voiceVolume = 100;
    AudioManager.playVoice = function (voice, loop, channel) {
        if (voice.name) {
            this.stopVoice(voice.name, channel);
            var realPath = this.getRealVoicePath(param.folderName, voice.name);
            var realName = this.getRealVoiceName(voice.name);
            var buffer = this.createBufferWithAnalyser(realPath, realName);
            this.updateVoiceParameters(buffer, voice);
            buffer.play(loop);
            buffer.name = voice.name;
            buffer.channel = channel;
            this._voiceBuffers.push(buffer);
        }
    };

    AudioManager.getRealVoicePath = function (path1, path2) {
        if (path2.includes('/')) {
            return path1 + '/' + path2.replace(/(.*)\/.*/, function () {
                return arguments[1];
            });
        } else {
            return path1;
        }
    };

    AudioManager.getRealVoiceName = function (path) {
        if (path.includes('/')) {
            return path.replace(/.*\/(.*)/, function () {
                return arguments[1];
            });
        } else {
            return path;
        }
    };

    AudioManager.stopVoice = function (name, channel) {
        this._voiceBuffers.forEach(function (buffer) {
            if (!name && !channel || buffer.name === name || buffer.channel === channel) {
                buffer.stop();
                // 変数に波形情報を格納
                if(buffer.channel in param.variableHandle){
                    $gameVariables.setValue(param.variableHandle[buffer.channel], 0);
                }
            }
        });
        this.filterPlayingVoice();
    };

    AudioManager.filterPlayingVoice = function () {
        this._voiceBuffers = this._voiceBuffers.filter(function(buffer) {
            var playing = buffer.isPlaying() || !buffer.isReady();
            if (!playing) {
                buffer.stop();
                // 変数に波形情報を格納
                if(buffer.channel in param.variableHandle){
                    $gameVariables.setValue(param.variableHandle[buffer.channel], 0);
                }
            }
            return playing;
        });
    };

    AudioManager.isExistVoiceChannel = function (channel) {
        this.filterPlayingVoice();
        return this._voiceBuffers.some(function (buffer) {
            if (buffer._sourceNode && buffer._sourceNode.loop) {
                return false;
            }
            return buffer.channel === channel || channel === undefined;
        });
    };

    var _AudioManager_stopAll = AudioManager.stopAll;
    AudioManager.stopAll = function () {
        _AudioManager_stopAll.apply(this, arguments);
        this.stopVoice();
    };

    //=============================================================================
    // Scene_Base
    //  フェードアウト時にSEの演奏も停止します。
    //=============================================================================
    var _Scene_Base_fadeOutAll = Scene_Base.prototype.fadeOutAll;
    Scene_Base.prototype.fadeOutAll = function () {
        _Scene_Base_fadeOutAll.apply(this, arguments);
        AudioManager.stopVoice();
    };

    var _Scene_Base_update = Scene_Base.prototype.update;
    Scene_Base.prototype.update = function () {
        _Scene_Base_update.apply(this, arguments);

        // 全バッファの音声を確認する
        AudioManager._voiceBuffers.filter(e => {
            // Analyserがあって再生中のもののみ
            return ('_analyser' in e && e.isPlaying())
        }).forEach(e => {
            if(e._analyser !== null){
                // 時間領域の波形データを格納する
                e._analyser.getByteTimeDomainData(e._count);

                // この関数実行タイミングでの波形データの最大値を取得
                let number = e._count.reduce((a, b) => Math.max(a, b));
                number = Math.floor((number - 128) / 128 * 100);

                // チャンネル番号→変数番号に変換して数値をセットする
                if(e.channel in param.variableHandle){
                    $gameVariables.setValue(param.variableHandle[e.channel], number);
                }
            }
        });
    };
})();
