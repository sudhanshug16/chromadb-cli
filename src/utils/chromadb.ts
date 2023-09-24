import { ChromaClient } from "chromadb";
import { getConfig } from "./config";
import { Command, ux } from "@oclif/core";

export const getChromaClient = async (
  command: Command,
): Promise<ChromaClient> => {
  ux.action.start("Establishing connection to the Chroma server");
  if (!getConfig("HOST")) {
    command.error(
      "No host configured for chroma server, please set CHROMA_SERVER_HOST in env or run `chromadb condigure`",
    );
  }

  if (!getConfig("PORT")) {
    command.error(
      "No port configured for chroma server, please set CHROMA_SERVER_PORT in env or run `chromadb condigure`",
    );
  }

  const client = new ChromaClient({
    path: `http://${getConfig("HOST")}:${getConfig("PORT")}`,
  });

  try {
    await client.heartbeat();
  } catch {
    command.error(
      "Pinging chroma server failed, your config may be wrong. Please reconfigure using `chromadb configure`",
    );
  }

  ux.action.stop();

  return client;
};
