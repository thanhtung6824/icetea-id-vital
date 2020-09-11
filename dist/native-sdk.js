"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("./provider/sdk");
const native_transporter_1 = require("./native-transporter");
const native_iframe_1 = require("./native-iframe");
class NativeSdk extends sdk_1.SdkBase {
    get IFrame() {
        return this.iframe.IFrame;
    }
}
exports.NativeSdk = NativeSdk;
exports.IceteaId = sdk_1.sdkBuilder(NativeSdk, {
    target: 'react-native',
    baseUrl: 'http://localhost:3000',
    Transporter: native_transporter_1.NativeTransporter,
    Iframe: native_iframe_1.NativeIframe,
});
//# sourceMappingURL=native-sdk.js.map