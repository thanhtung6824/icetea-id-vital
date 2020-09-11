export abstract class Iframe {
    protected abstract openIframe(): void

    protected abstract closeIframe(): void

    protected abstract postMessage(payload: any): void

    protected constructor(protected endpoint: string, protected sdkId: string) {
    }
}