"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iframe_1 = require("./provider/iframe");
const react_native_1 = require("react-native");
const react_native_webview_1 = require("react-native-webview");
const react_1 = require("react");
class NativeIframe extends iframe_1.Iframe {
    constructor() {
        super(...arguments);
        this.IFrame = () => {
            const [open, setOpen] = react_1.useState(false);
            const initIframe = react_1.useCallback((webView) => {
                this.iframe = webView;
            }, []);
            const openIframe = react_1.useCallback(() => {
                setOpen(true);
            }, []);
            const closeIframe = react_1.useCallback(() => {
                setOpen(false);
            }, []);
            const viewRef = react_1.useCallback((view) => {
                this.view = {
                    openIframe,
                    closeIframe,
                };
            }, []);
            return (react_1.default.createElement(react_native_1.View, { ref: viewRef },
                react_1.default.createElement(react_native_webview_1.WebView, { ref: initIframe, source: { uri: this.endpoint }, onMessage: this.onMessage, style: {
                        height: '70%',
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                    } })));
        };
    }
    closeIframe() {
        if (this.view) {
            this.view.closeIframe();
        }
    }
    openIframe() {
        if (this.view) {
            this.view.openIframe();
        }
    }
    postMessage(payload) {
        if (this.iframe) {
            this.view.openIframe();
            this.iframe.postMessage(payload);
        }
    }
    onMessage(event) {
        if (!event.nativeEvent && event.nativeEvent.url !== this.endpoint) {
            return;
        }
    }
}
exports.NativeIframe = NativeIframe;
//# sourceMappingURL=native-iframe.js.map