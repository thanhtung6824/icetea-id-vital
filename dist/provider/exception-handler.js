"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExceptionHandler extends Error {
    constructor(code, message) {
        super(`IceteaID Error: [${code}] ${message}`);
        Object.setPrototypeOf(this, ExceptionHandler.prototype);
    }
}
exports.ExceptionHandler = ExceptionHandler;
function missingApiKeyError() {
    return new ExceptionHandler(100, 'You must provide a api key');
}
exports.missingApiKeyError = missingApiKeyError;
//# sourceMappingURL=exception-handler.js.map