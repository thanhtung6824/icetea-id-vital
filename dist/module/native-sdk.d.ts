/// <reference types="react" />
import { SdkBase } from './provider/sdk';
export declare class NativeSdk extends SdkBase {
    get IFrame(): import("react").FC<{}>;
}
export declare const IceteaId: new (...args: any[]) => NativeSdk;
