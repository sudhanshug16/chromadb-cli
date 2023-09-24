import { Args, Command, ux } from "@oclif/core";
import { getChromaClient } from "../../utils/chromadb";

export default class GetCollection extends Command {
  static description = "get a collection from the chroma server";

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
    } = await this.parse(GetCollection);

    const chroma = await getChromaClient(this);

    try {
      ux.action.start("fetching collection");
      const collection = await chroma.getCollection({ name: COLLECTION_NAME });
      ux.action.stop();

      this.log();
      this.logJson(collection);
    } catch (error: unknown) {
      this.error(error as Error);
    }
  }
}
