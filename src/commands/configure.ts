import { Command, ux } from "@oclif/core";
import { getConfig, setConfig } from "../utils/config";

export default class Configure extends Command {
  static description = "set configuration for the chromadb server";

  public async run(): Promise<void> {
    setConfig(
      "HOST",
      await ux.prompt(`ChromaDB HOST`, {
        default: getConfig("HOST") ?? undefined,
      }),
    );
    setConfig(
      "PORT",
      await ux.prompt(`ChromaDB PORT`, {
        default: getConfig("PORT") ?? undefined,
      }),
    );
    setConfig(
      "IMPL",
      await ux.prompt(`ChromaDB IMPLEMENTATION`, {
        required: false,
        default: "rest",
      }),
    );
    setConfig(
      "OPENAI_KEY",
      await ux.prompt(`OpenAI API Key`, {
        type: "mask",
        default: getConfig("OPENAI_KEY") ?? undefined,
        required: false,
      }),
    );
  }
}
