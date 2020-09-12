import { SdkBase } from '../provider/sdk';
export declare abstract class BaseApi {
    protected readonly iceteaId: SdkBase;
    constructor(iceteaId: SdkBase);
    protected get iframe(): import("..").Iframe;
    protected get transporter(): import("..").Transporter;
}
