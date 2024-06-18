import logger from "#shared/logger/main";
import { ZodError } from "zod";

export default function zodError400(err: ZodError, url?: string) {
  logger.error(`Unexpected request structure.`, err.issues, url);
}
