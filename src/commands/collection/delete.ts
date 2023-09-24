import { Args, Command, ux } from "@oclif/core";
import { getChromaClient } from "../../utils/chromadb";

export default class DeleteCollection extends Command {
  static description = "delete a collection from the chroma server";

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
    } = await this.parse(DeleteCollection);

    const chroma = await getChromaClient(this);

    try {
      ux.action.start("deleting collection");
      await chroma.deleteCollection({ name: COLLECTION_NAME });
      ux.action.stop();

      this.log();
      this.log("successfully deleted the collection");
    } catch (error: unknown) {
      this.error(error as Error);
    }
  }
}
