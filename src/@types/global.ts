export type BackendResponse =
    | {
        success: true;
        data: unknown;
        frontEndAlert?: string;
    }
    | {
        success: false;
        internalError: any;
        frontEndAlert: string;
    };
