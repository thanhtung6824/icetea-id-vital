import { Iframe } from './provider/iframe';
import { WebView } from 'react-native-webview';
import React from 'react';
export declare class NativeIframe extends Iframe {
    protected iframe: WebView;
    protected view: any;
    protected closeIframe(): void;
    protected openIframe(): void;
    protected postMessage(payload: string): void;
    protected onMessage(event: any): void;
    IFrame: React.FC;
}
