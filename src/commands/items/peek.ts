import { Args, Command, Flags, ux } from "@oclif/core";
import { getChromaClient } from "../../utils/chromadb";

export default class PeekItems extends Command {
  static description = "count items in a collection from the chroma server";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    COLLECTION_NAME: Args.string({
      description: "name of the collection",
      required: true,
    }),
  };

  static flags = {
    limit: Flags.integer({
      description: "how many items to return",
      default: 10,
    }),
  };

  public async run(): Promise<void> {
    const {
      args: { COLLECTION_NAME },
      flags: { limit },
    } = await this.parse(PeekItems);

    const chroma = await getChromaClient(this);

    try {
      ux.action.start("Fetching collection");
      const collection = await chroma.getCollection({ name: COLLECTION_NAME });
      ux.action.stop();

      ux.action.start(`Fetching ${limit} items`);
      const items = await collection.peek({ limit });
      ux.action.stop();

      this.log();
      this.logJson(items);
    } catch (error: unknown) {
      this.error(error as Error);
    }
  }
}
