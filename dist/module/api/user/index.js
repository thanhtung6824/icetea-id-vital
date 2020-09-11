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
import { BaseApi } from '../base-api';
import { RequestType } from '../../types/request-type';
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserApi.prototype.login = function () {
        return this.transporter.post(this.iframe, RequestType.LOGIN, { msg: 'hello' });
    };
    return UserApi;
}(BaseApi));
export { UserApi };
//# sourceMappingURL=index.js.map