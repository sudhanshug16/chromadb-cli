import * as os from "node:os";
import * as fs from "node:fs";
import * as path from "node:path";

const CONFIG_FILE_PATH = path.join(os.homedir(), ".chromadb-cli.json");

export const configKeys = ["HOST", "PORT", "IMPL", "OPENAI_KEY"] as const;
export type ConfigKeyType = (typeof configKeys)[number];

export function getConfig(key: ConfigKeyType): string | null {
  let value: string | null = null;
  if (fs.existsSync(CONFIG_FILE_PATH)) {
    value ||= JSON.parse(fs.readFileSync(CONFIG_FILE_PATH, "utf-8"))[key];
  }

  value ||= process.env["CHROME_SERVER_" + key] ?? null;

  return value;
}

export function setConfig(key: ConfigKeyType, value: string): void {
  const config = fs.existsSync(CONFIG_FILE_PATH)
    ? JSON.parse(fs.readFileSync(CONFIG_FILE_PATH, "utf-8"))
    : {};
  config[key] = value;
  fs.writeFileSync(CONFIG_FILE_PATH, JSON.stringify(config));
}
