export declare abstract class Iframe {
    protected endpoint: string;
    protected sdkId: string;
    protected abstract openIframe(): void;
    protected abstract closeIframe(): void;
    protected abstract postMessage(payload: any): void;
    protected constructor(endpoint: string, sdkId: string);
}
