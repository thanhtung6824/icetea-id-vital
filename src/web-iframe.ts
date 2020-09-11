import { Iframe } from './provider/iframe';
import { Observable, BehaviorSubject } from 'rxjs';

const isIframeExist = (eleId) => {
    return !!document.getElementById(eleId);
};

export class WebIframe extends Iframe {
    private iframe: Observable<HTMLIFrameElement>

    protected createIframe(): Observable<HTMLIFrameElement> {
        return new Observable((subscriber) => {
            if (!isIframeExist(this.sdkId)) {
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', this.endpoint);
                iframe.setAttribute('id', this.sdkId);
                iframe.style.width = '640px';
                iframe.style.height = '480px';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
                iframe.onload = () => {
                    iframe.style.display = 'block';
                    this.iframe = new BehaviorSubject(iframe);
                    subscriber.next(iframe);
                };
            }
        });
    }

    protected closeIframe(): void {
        const iframe = document.getElementById(this.sdkId);
        iframe.remove();
    }

    protected openIframe(): Observable<HTMLIFrameElement> {
        return this.getIframe();
    }

    private getIframe() {
        if (this.iframe) {
            return this.iframe;
        }
        return this.createIframe();
    }

    public postMessage(payload): void {
        this.getIframe()
            .subscribe(iframe => iframe.contentWindow.postMessage(payload, this.endpoint));
    }
}