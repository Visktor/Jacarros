export type AppResponse =
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
