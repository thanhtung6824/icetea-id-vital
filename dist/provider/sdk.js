"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_handler_1 = require("./exception-handler");
const helpers_1 = require("../helpers");
const user_1 = require("../api/user");
class SdkBase {
    constructor(apiKey) {
        if (!apiKey) {
            throw exception_handler_1.missingApiKeyError();
        }
        this.endpoint = helpers_1.urlBuilder(exports.SdkConfiguration.baseUrl).origin;
        this.user = new user_1.UserApi(this);
        this.sdkId = btoa(JSON.stringify({
            apiKey: apiKey,
            target: exports.SdkConfiguration.target,
            baseUrl: exports.SdkConfiguration.baseUrl,
        }));
    }
    get transporter() {
        if (!this._transport) {
            this._transport = new exports.SdkConfiguration.Transporter(this.endpoint);
        }
        return this._transport;
    }
    get iframe() {
        if (!this._iframe) {
            this._iframe = new exports.SdkConfiguration.Iframe(this.endpoint, this.sdkId);
        }
        return this._iframe;
    }
}
exports.SdkBase = SdkBase;
exports.SdkConfiguration = {};
function sdkBuilder(IceteaIdInstance, configuration) {
    Object.assign(exports.SdkConfiguration, configuration);
    return IceteaIdInstance;
}
exports.sdkBuilder = sdkBuilder;
//# sourceMappingURL=sdk.js.map