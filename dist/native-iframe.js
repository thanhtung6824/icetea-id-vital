var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Iframe } from './provider/iframe';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import React, { useState, useCallback } from 'react';
var NativeIframe = /** @class */ (function (_super) {
    __extends(NativeIframe, _super);
    function NativeIframe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iframe = null;
        _this.IFrame = function () {
            var _a = useState(false), open = _a[0], setOpen = _a[1];
            var initIframe = useCallback(function (webView) {
                _this.iframe = webView;
            }, []);
            var openIframe = useCallback(function () {
                setOpen(true);
            }, []);
            var closeIframe = useCallback(function () {
                setOpen(false);
            }, []);
            var viewRef = useCallback(function (view) {
                _this.view = {
                    openIframe: openIframe,
                    closeIframe: closeIframe,
                };
            }, []);
            return (React.createElement(View, { ref: viewRef },
                React.createElement(WebView, { ref: initIframe, source: { uri: _this.endpoint }, onMessage: _this.onMessage, style: {
                        height: '70%',
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                    } })));
        };
        return _this;
    }
    NativeIframe.prototype.closeIframe = function () {
        if (this.view) {
            this.view.closeIframe();
        }
    };
    NativeIframe.prototype.openIframe = function () {
        if (this.view) {
            this.view.openIframe();
        }
    };
    NativeIframe.prototype.postMessage = function (payload) {
        if (this.iframe) {
            this.view.openIframe();
            this.iframe.postMessage(payload);
        }
    };
    NativeIframe.prototype.onMessage = function (event) {
        if (!event.nativeEvent && event.nativeEvent.url !== this.endpoint) {
            return;
        }
    };
    return NativeIframe;
}(Iframe));
export { NativeIframe };
//# sourceMappingURL=native-iframe.js.map