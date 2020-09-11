"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_api_1 = require("../base-api");
const request_type_1 = require("../../types/request-type");
class UserApi extends base_api_1.BaseApi {
    login() {
        return this.transporter.post(this.iframe, request_type_1.RequestType.LOGIN, { msg: 'hello' });
    }
}
exports.UserApi = UserApi;
//# sourceMappingURL=index.js.map