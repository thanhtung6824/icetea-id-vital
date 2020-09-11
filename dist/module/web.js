import { sdkBuilder, SdkBase } from './provider/sdk';
import { WebIframe } from './web-iframe';
import { WebTransporter } from './web-transporter';
export var IceteaId = sdkBuilder(SdkBase, {
    target: 'web',
    baseUrl: 'http://localhost:3000',
    Transporter: WebTransporter,
    Iframe: WebIframe,
});
//# sourceMappingURL=web.js.map