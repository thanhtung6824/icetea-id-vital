"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function urlBuilder(url, baseUrl) {
    return baseUrl ? new URL(url, baseUrl) : new URL(url);
}
exports.urlBuilder = urlBuilder;
function randomId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
exports.randomId = randomId;
function queryBuilder(idMessage, requestType, payload) {
    return JSON.stringify(Object.assign(Object.assign({}, payload), { id: idMessage, requestType }));
}
exports.queryBuilder = queryBuilder;
//# sourceMappingURL=builder.js.map