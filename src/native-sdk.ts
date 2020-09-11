import { SdkBase, sdkBuilder } from './provider/sdk';
import { NativeTransporter } from './native-transporter';
import { NativeIframe } from './native-iframe';

export class NativeSdk extends SdkBase {
    public get IFrame() {
        return (this.iframe as NativeIframe).IFrame;
    }
}

export const IceteaId = sdkBuilder(NativeSdk, {
    target: 'react-native',
    baseUrl: 'http://localhost:3000',
    Transporter: NativeTransporter,
    Iframe: NativeIframe,
});
