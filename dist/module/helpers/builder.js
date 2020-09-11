var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export function urlBuilder(url, baseUrl) {
    return baseUrl ? new URL(url, baseUrl) : new URL(url);
}
export function randomId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
export function queryBuilder(idMessage, requestType, payload) {
    return JSON.stringify(__assign(__assign({}, payload), { id: idMessage, requestType: requestType }));
}
//# sourceMappingURL=builder.js.map