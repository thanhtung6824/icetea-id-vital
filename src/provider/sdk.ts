import { missingApiKeyError } from './exception-handler';
import { UserApi } from '../api/user';
import { Iframe } from './iframe';
import { Transporter } from './transporter';

export class SdkBase {
    private _transport: Transporter | undefined;
    private _iframe: Iframe | undefined;
    private sdkId: string;

    public readonly endpoint: string;
    public readonly user: UserApi;

    constructor(apiKey: string) {
        if (!apiKey) {
            throw missingApiKeyError();
        }
        this.endpoint = SdkConfiguration.baseUrl;
        this.user = new UserApi(this);
        this.sdkId = btoa(JSON.stringify({
            apiKey: apiKey,
            target: SdkConfiguration.target,
            baseUrl: SdkConfiguration.baseUrl,
        }));
    }

    public get transporter(): Transporter {
        if (!this._transport) {
            this._transport = new SdkConfiguration.Transporter(this.endpoint);
        }

        return <Transporter>this._transport;
    }

    public get iframe(): Iframe {
        if (!this._iframe) {
            this._iframe = new SdkConfiguration.Iframe(this.endpoint, this.sdkId);
        }
        return <Iframe>this._iframe;
    }
}

interface SdkConfiguration {
    target: 'web' | 'react-native';
    baseUrl: string;
    Transporter: any,
    Iframe: any,
}

type ConstructorOf<C> = { new (...args: any[]): C };

export const SdkConfiguration = {} as any;

export function sdkBuilder<Sdk extends SdkBase>(
    IceteaIdInstance: ConstructorOf<Sdk>,
    configuration: SdkConfiguration,
): ConstructorOf<Sdk> {
    Object.assign(SdkConfiguration, configuration);
    return IceteaIdInstance;
}
