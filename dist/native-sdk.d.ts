import { SdkBase } from './provider/sdk';
export declare class NativeSdk extends SdkBase {
    get IFrame(): any;
}
export declare const IceteaId: new (...args: any[]) => NativeSdk;
