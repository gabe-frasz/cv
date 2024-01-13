import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const __dirname = (url: string) => dirname(fileURLToPath(url));
