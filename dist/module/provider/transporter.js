import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { queryBuilder, randomId } from '../helpers';
var Transporter = /** @class */ (function () {
    function Transporter(endpoint) {
        this.endpoint = endpoint;
        this.boostrap();
    }
    // @ts-ignore
    Transporter.prototype.post = function (iframe, requestType, payload) {
        var idMessage = randomId();
        iframe.postMessage(queryBuilder(idMessage, requestType, payload));
        return fromEvent(window, 'message')
            .pipe(
        // @ts-ignore
        filter(function (messageEvent) {
            var messageData = JSON.parse(messageEvent.data);
            return messageData.id === idMessage;
        }), map(function (messageEvent) { return JSON.parse(messageEvent.data); }));
    };
    return Transporter;
}());
export { Transporter };
//# sourceMappingURL=transporter.js.map