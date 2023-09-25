import { Command, ux } from "@oclif/core";
import { getConfig } from "./config";
import { OpenAI } from "openai";

export const getOpenAIClient = async (command: Command): Promise<OpenAI> => {
  ux.action.start("Establishing connection to the OpenAI server");
  if (!getConfig("OPENAI_KEY")) {
    command.error(
      "No OpenAI API Key configured for chroma server, please set CHROMA_SERVER_OPENAI_KEY in env or run `chromadb condigure`",
    );
  }

  const client = new OpenAI({
    apiKey: getConfig("OPENAI_KEY")!,
  });

  try {
    await client.models.list();
  } catch {
    command.error(
      "Pinging OpenAI server failed, your config may be wrong. Please reconfigure using `chromadb configure`",
    );
  }

  ux.action.stop();

  return client;
};
