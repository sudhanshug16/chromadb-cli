import { Args, Command, ux } from "@oclif/core";
import { getChromaClient } from "../../utils/chromadb";

export default class CountItems extends Command {
  static description = "count items in a collection";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    COLLECTION_NAME: Args.string({
      description: "name of the collection",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const {
      args: { COLLECTION_NAME },
    } = await this.parse(CountItems);

    const chroma = await getChromaClient(this);

    try {
      ux.action.start("fetching collection");
      const collection = await chroma.getCollection({ name: COLLECTION_NAME });
      ux.action.stop();

      ux.action.start("counting items");
      const count = await collection.count();
      ux.action.stop();

      this.log();
      this.log(`${collection.name} has ${count} items`);
    } catch (error: unknown) {
      this.error(error as Error);
    }
  }
}
