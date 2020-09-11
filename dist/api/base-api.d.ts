import { SdkBase } from '../provider/sdk';
export declare abstract class BaseApi {
    protected readonly iceteaId: SdkBase;
    constructor(iceteaId: SdkBase);
    protected get iframe(): import("../provider/iframe").Iframe;
    protected get transporter(): import("../provider/transporter").Transporter;
}
