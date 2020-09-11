import { UserApi } from '../api/user';
import { Iframe } from './iframe';
import { Transporter } from './transporter';
export declare class SdkBase {
    private _transport;
    private _iframe;
    private sdkId;
    readonly endpoint: string;
    readonly user: UserApi;
    constructor(apiKey: string);
    get transporter(): Transporter;
    get iframe(): Iframe;
}
interface SdkConfiguration {
    target: 'web' | 'react-native';
    baseUrl: string;
    Transporter: any;
    Iframe: any;
}
declare type ConstructorOf<C> = {
    new (...args: any[]): C;
};
export declare const SdkConfiguration: any;
export declare function sdkBuilder<Sdk extends SdkBase>(IceteaIdInstance: ConstructorOf<Sdk>, configuration: SdkConfiguration): ConstructorOf<Sdk>;
export {};
