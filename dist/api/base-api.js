var BaseApi = /** @class */ (function () {
    function BaseApi(iceteaId) {
        this.iceteaId = iceteaId;
    }
    Object.defineProperty(BaseApi.prototype, "iframe", {
        get: function () {
            return this.iceteaId.iframe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseApi.prototype, "transporter", {
        get: function () {
            return this.iceteaId.transporter;
        },
        enumerable: false,
        configurable: true
    });
    return BaseApi;
}());
export { BaseApi };
//# sourceMappingURL=base-api.js.map