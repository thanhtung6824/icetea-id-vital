import { BaseApi } from '../base-api';
import { RequestType } from '../../types/request-type';

export class UserApi extends BaseApi {
    public login() {
        return this.transporter.post(this.iframe, RequestType.LOGIN,{ msg: 'hello' });
    }
}