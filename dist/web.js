"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("./provider/sdk");
const web_iframe_1 = require("./web-iframe");
const web_transporter_1 = require("./web-transporter");
exports.IceteaId = sdk_1.sdkBuilder(sdk_1.SdkBase, {
    target: 'web',
    baseUrl: 'http://localhost:3000',
    Transporter: web_transporter_1.WebTransporter,
    Iframe: web_iframe_1.WebIframe,
});
//# sourceMappingURL=web.js.map