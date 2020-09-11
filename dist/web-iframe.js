"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iframe_1 = require("./provider/iframe");
const rxjs_1 = require("rxjs");
const isIframeExist = (eleId) => {
    return !!document.getElementById(eleId);
};
class WebIframe extends iframe_1.Iframe {
    createIframe() {
        return new rxjs_1.Observable((subscriber) => {
            if (!isIframeExist(this.sdkId)) {
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', this.endpoint);
                iframe.setAttribute('id', this.sdkId);
                iframe.style.width = '640px';
                iframe.style.height = '480px';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
                iframe.onload = () => {
                    iframe.style.display = 'block';
                    this.iframe = new rxjs_1.BehaviorSubject(iframe);
                    subscriber.next(iframe);
                };
            }
        });
    }
    closeIframe() {
        const iframe = document.getElementById(this.sdkId);
        iframe.remove();
    }
    openIframe() {
        return this.getIframe();
    }
    getIframe() {
        if (this.iframe) {
            return this.iframe;
        }
        return this.createIframe();
    }
    postMessage(payload) {
        this.getIframe()
            .subscribe(iframe => iframe.contentWindow.postMessage(payload, this.endpoint));
    }
}
exports.WebIframe = WebIframe;
//# sourceMappingURL=web-iframe.js.map