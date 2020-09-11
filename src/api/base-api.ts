import { SdkBase } from '../provider/sdk';

export abstract class BaseApi {
    constructor(protected readonly iceteaId: SdkBase) {
    }

    protected get iframe() {
        return this.iceteaId.iframe;
    }

    protected get transporter() {
        return this.iceteaId.transporter;
    }

}