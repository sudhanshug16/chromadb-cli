import { Command, ux } from "@oclif/core";
import { getChromaClient } from "../../utils/chromadb";

export default class ListCollections extends Command {
  static description = "list collections in the chroma server";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const chroma = await getChromaClient(this);

    try {
      ux.action.start("fetching all collections");
      const collections = await chroma.listCollections();
      ux.action.stop();

      this.log();
      this.logJson(collections);
    } catch (error: unknown) {
      this.error(error as Error);
    }
  }
}
