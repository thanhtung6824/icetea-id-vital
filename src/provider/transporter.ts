import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { queryBuilder, randomId } from '../helpers';

export abstract class Transporter {
    constructor(protected endpoint: string) {
        this.boostrap();
    }

    protected abstract boostrap () : void
    // @ts-ignore
    public post(iframe, requestType, payload): Observable<any> {
        const idMessage = randomId();
        iframe.postMessage(queryBuilder(idMessage, requestType, payload));
        return fromEvent(window, 'message')
            .pipe(
                // @ts-ignore
                filter((messageEvent: MessageEvent) => {
                    const messageData = JSON.parse(messageEvent.data);
                    return messageData.id === idMessage;
                }),
                map((messageEvent: MessageEvent) => JSON.parse(messageEvent.data)),
            );
    }
}
