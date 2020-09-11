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
var ExceptionHandler = /** @class */ (function (_super) {
    __extends(ExceptionHandler, _super);
    function ExceptionHandler(code, message) {
        var _this = _super.call(this, "IceteaID Error: [" + code + "] " + message) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, ExceptionHandler.prototype);
        return _this;
    }
    return ExceptionHandler;
}(Error));
export { ExceptionHandler };
export function missingApiKeyError() {
    return new ExceptionHandler(100, 'You must provide a api key');
}
//# sourceMappingURL=exception-handler.js.map