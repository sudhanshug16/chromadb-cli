import { Args, Command, Flags, ux } from "@oclif/core";
import { getChromaClient } from "../../utils/chromadb";
import { getOpenAIClient } from "../../utils/openai";

export default class QueryItems extends Command {
  static description = "query items in a collection";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    COLLECTION_NAME: Args.string({
      description: "name of the collection",
      required: true,
    }),
    TEXT: Args.string({
      description: "text to query for",
      required: true,
    }),
  };

  static flags = {
    provider: Flags.string({
      description: "what LLM provider to use",
      required: false,
      options: ["openai"],
      default: "openai",
    }),
    model: Flags.string({
      description: "what model to use",
      required: false,
      options: ["text-embedding-ada-002"],
      default: "text-embedding-ada-002",
    }),
    limit: Flags.integer({
      description: "how many items to return",
      default: 10,
    }),
  };

  public async run(): Promise<void> {
    const {
      args: { TEXT, COLLECTION_NAME },
      flags: { limit, provider, model },
    } = await this.parse(QueryItems);

    const chroma = await getChromaClient(this);
    let embedding: number[];

    try {
      if (provider === "openai") {
        const openai = await getOpenAIClient(this);
        ux.action.start("converting the query text into embedding");
        const response = await openai.embeddings.create({
          input: TEXT,
          model: model,
        });
        embedding = response.data[0].embedding;
        ux.action.stop();
      } else {
        this.error("Invalid provider supplied");
      }

      ux.action.start("fetching collection");
      const collection = await chroma.getCollection({ name: COLLECTION_NAME });
      ux.action.stop();

      ux.action.start(`querying items`);
      const items = await collection.query({
        queryEmbeddings: embedding,
        nResults: limit,
      });
      ux.action.stop();

      this.log();
      this.logJson(items);
    } catch (error: unknown) {
      this.error(error as Error);
    }
  }
}
