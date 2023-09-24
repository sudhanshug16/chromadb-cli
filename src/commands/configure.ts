import { Command, ux } from "@oclif/core";
import { configKeys, setConfig } from "../utils/config";

export default class Configure extends Command {
  static description = "set configuration for the chromadb server";

  public async run(): Promise<void> {
    for (const config of configKeys) {
      // eslint-disable-next-line no-await-in-loop
      let value = await ux.prompt(`ChromaDB ${config}`, {
        required: config !== "IMPL",
        default: config === "IMPL" ? "rest" : undefined,
      });

      if (config === "IMPL") {
        value ||= "rest";
      }

      setConfig(config, value);
    }
  }
}
