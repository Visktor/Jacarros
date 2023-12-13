export type BackendResponse =
  | {
      success: true;
      data: unknown;
      message?: string;
    }
  | {
      success: false;
      error: any;
      message: string;
    };
