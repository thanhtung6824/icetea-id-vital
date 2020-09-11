"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseApi {
    constructor(iceteaId) {
        this.iceteaId = iceteaId;
    }
    get iframe() {
        return this.iceteaId.iframe;
    }
    get transporter() {
        return this.iceteaId.transporter;
    }
}
exports.BaseApi = BaseApi;
//# sourceMappingURL=base-api.js.map