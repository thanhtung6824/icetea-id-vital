var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Iframe } from './provider/iframe';
import { Observable, BehaviorSubject } from 'rxjs';
var isIframeExist = function (eleId) {
    return !!document.getElementById(eleId);
};
var WebIframe = /** @class */ (function (_super) {
    __extends(WebIframe, _super);
    function WebIframe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iframe = null;
        return _this;
    }
    WebIframe.prototype.createIframe = function () {
        var _this = this;
        return new Observable(function (subscriber) {
            if (!isIframeExist(_this.sdkId)) {
                var iframe_1 = document.createElement('iframe');
                iframe_1.setAttribute('src', _this.endpoint);
                iframe_1.setAttribute('id', _this.sdkId);
                iframe_1.style.width = '640px';
                iframe_1.style.height = '480px';
                iframe_1.style.display = 'none';
                document.body.appendChild(iframe_1);
                iframe_1.onload = function () {
                    iframe_1.style.display = 'block';
                    _this.iframe = new BehaviorSubject(iframe_1);
                    subscriber.next(iframe_1);
                };
            }
        });
    };
    WebIframe.prototype.closeIframe = function () {
        var iframe = document.getElementById(this.sdkId);
        iframe === null || iframe === void 0 ? void 0 : iframe.remove();
    };
    WebIframe.prototype.openIframe = function () {
        return this.getIframe();
    };
    WebIframe.prototype.getIframe = function () {
        if (this.iframe) {
            return this.iframe;
        }
        return this.createIframe();
    };
    WebIframe.prototype.postMessage = function (payload) {
        var _this = this;
        this.getIframe()
            .subscribe(function (iframe) { var _a; return (_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(payload, _this.endpoint); });
    };
    return WebIframe;
}(Iframe));
export { WebIframe };
//# sourceMappingURL=web-iframe.js.map