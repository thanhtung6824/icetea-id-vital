import { missingApiKeyError } from './exception-handler';
import { urlBuilder } from '../helpers';
import { UserApi } from '../api/user';
var SdkBase = /** @class */ (function () {
    function SdkBase(apiKey) {
        if (!apiKey) {
            throw missingApiKeyError();
        }
        this.endpoint = urlBuilder(SdkConfiguration.baseUrl).origin;
        this.user = new UserApi(this);
        this.sdkId = btoa(JSON.stringify({
            apiKey: apiKey,
            target: SdkConfiguration.target,
            baseUrl: SdkConfiguration.baseUrl,
        }));
    }
    Object.defineProperty(SdkBase.prototype, "transporter", {
        get: function () {
            if (!this._transport) {
                this._transport = new SdkConfiguration.Transporter(this.endpoint);
            }
            return this._transport;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SdkBase.prototype, "iframe", {
        get: function () {
            if (!this._iframe) {
                this._iframe = new SdkConfiguration.Iframe(this.endpoint, this.sdkId);
            }
            return this._iframe;
        },
        enumerable: true,
        configurable: true
    });
    return SdkBase;
}());
export { SdkBase };
export var SdkConfiguration = {};
export function sdkBuilder(IceteaIdInstance, configuration) {
    Object.assign(SdkConfiguration, configuration);
    return IceteaIdInstance;
}
//# sourceMappingURL=sdk.js.map