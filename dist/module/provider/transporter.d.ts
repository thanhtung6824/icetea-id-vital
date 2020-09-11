import { Observable } from 'rxjs';
export declare abstract class Transporter {
    protected endpoint: string;
    constructor(endpoint: string);
    protected abstract boostrap(): void;
    post(iframe: any, requestType: any, payload: any): Observable<any>;
}
