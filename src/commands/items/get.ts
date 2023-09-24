import { Args, Command, ux } from "@oclif/core";
import { getChromaClient } from "../../utils/chromadb";

export default class GetItem extends Command {
  static description = "get item in a collection from the chroma server";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    COLLECTION_NAME: Args.string({
      description: "name of the collection",
      required: true,
    }),
    ITEM_ID: Args.string({
      description: "id of the item",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const {
      args: { COLLECTION_NAME, ITEM_ID },
    } = await this.parse(GetItem);

    const chroma = await getChromaClient(this);

    try {
      ux.action.start("Fetching collection");
      const collection = await chroma.getCollection({ name: COLLECTION_NAME });
      ux.action.stop();

      ux.action.start("Fetching item");
      const item = await collection.get({
        ids: [ITEM_ID],
      });
      ux.action.stop();

      this.log();
      this.logJson(item);
    } catch (error: unknown) {
      this.error(error as Error);
    }
  }
}
