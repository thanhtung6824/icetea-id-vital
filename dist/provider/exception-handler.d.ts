export declare class ExceptionHandler extends Error {
    constructor(code: any, message: string);
}
export declare function missingApiKeyError(): ExceptionHandler;
