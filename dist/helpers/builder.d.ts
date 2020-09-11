import { RequestType } from '../types/request-type';
export declare function urlBuilder(url: string, baseUrl?: string): URL;
export declare function randomId(): string;
export declare function queryBuilder(idMessage: string, requestType: RequestType, payload: any): string;
