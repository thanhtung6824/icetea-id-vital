import { Iframe } from './provider/iframe';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import React, { useState, useCallback } from 'react';

export class NativeIframe extends Iframe {
    protected iframe: WebView | null = null
    protected view: any
    protected closeIframe(): void {
        if (this.view) {
            this.view.closeIframe();
        }
    }

    protected openIframe(): void {
        if (this.view) {
            this.view.openIframe();
        }
    }

    protected postMessage(payload: string): void {
        if (this.iframe) {
            this.view.openIframe();
            this.iframe.postMessage(payload);
        }
    }

    protected onMessage(event: any) {
        if (!event.nativeEvent && event.nativeEvent.url !== this.endpoint) {
            return;
        }
    }

    public IFrame: React.FC = () => {
        const [open, setOpen] = useState(false);
        const initIframe = useCallback((webView: any): void => {
            this.iframe = webView;
        }, []);

        const openIframe = useCallback(() => {
            setOpen(true);
        }, []);

        const closeIframe = useCallback(() => {
            setOpen(false);
        }, []);

        const viewRef = useCallback((view: any): void => {
            this.view = {
                openIframe,
                closeIframe,
            };
        }, []);

        return (
            <View ref={viewRef}>
                <WebView
                    ref={initIframe} 
                    source={{ uri: this.endpoint }}
                    onMessage={this.onMessage}
                    style={{
                        height: '70%',
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                    }}
                />
            </View>
        );
    }
}