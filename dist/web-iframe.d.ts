import { Iframe } from './provider/iframe';
import { Observable } from 'rxjs';
export declare class WebIframe extends Iframe {
    private iframe;
    protected createIframe(): Observable<HTMLIFrameElement>;
    protected closeIframe(): void;
    protected openIframe(): Observable<HTMLIFrameElement>;
    private getIframe;
    postMessage(payload: any): void;
}
