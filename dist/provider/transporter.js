"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const helpers_1 = require("../helpers");
class Transporter {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.boostrap();
    }
    post(iframe, requestType, payload) {
        const idMessage = helpers_1.randomId();
        iframe.postMessage(helpers_1.queryBuilder(idMessage, requestType, payload));
        return rxjs_1.fromEvent(window, 'message')
            .pipe(operators_1.filter((messageEvent) => {
            const messageData = JSON.parse(messageEvent.data);
            return messageData.id === idMessage;
        }), operators_1.map((messageEvent) => JSON.parse(messageEvent.data)));
    }
}
exports.Transporter = Transporter;
//# sourceMappingURL=transporter.js.map