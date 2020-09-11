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
import { SdkBase, sdkBuilder } from './provider/sdk';
import { NativeTransporter } from './native-transporter';
import { NativeIframe } from './native-iframe';
var NativeSdk = /** @class */ (function (_super) {
    __extends(NativeSdk, _super);
    function NativeSdk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NativeSdk.prototype, "IFrame", {
        get: function () {
            return this.iframe.IFrame;
        },
        enumerable: false,
        configurable: true
    });
    return NativeSdk;
}(SdkBase));
export { NativeSdk };
export var IceteaId = sdkBuilder(NativeSdk, {
    target: 'react-native',
    baseUrl: 'http://localhost:3000',
    Transporter: NativeTransporter,
    Iframe: NativeIframe,
});
//# sourceMappingURL=native-sdk.js.map