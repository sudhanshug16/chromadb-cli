[![npm version](https://badge.fury.io/js/chromadb-cli.svg)](https://badge.fury.io/js/chromadb-cli)


Basic CLI to interact with ChromaDB server [ChromaDB](https://github.com/chroma-core/chroma)

Developed using [oclif](https://github.com/oclif/oclif). For contribution guidelines and development details, head over there.

# Usage
<!-- usage -->
```sh-session
$ npm install -g chromadb-cli
$ chromadb COMMAND
running command...
$ chromadb (--version)
chromadb-cli/0.0.1 darwin-arm64 node-v18.16.0
$ chromadb --help [COMMAND]
USAGE
  $ chromadb COMMAND
...
```
<!-- usagestop -->

# Initialization
Start by configuring the CLI.
```sh-session
$ chromadb configure
```

The CLI can use ENV vars as well, just set CHROME_SERVER_HOST and CHROME_SERVER_PORT.

> Note: it does not support authentication as of now. PRs welcome :)

# Commands
<!-- commands -->
* [`chromadb collections delete COLLECTION_NAME`](#chromadb-collections-delete-collection_name)
* [`chromadb collections get COLLECTION_NAME`](#chromadb-collections-get-collection_name)
* [`chromadb collections list`](#chromadb-collections-list)
* [`chromadb configure`](#chromadb-configure)
* [`chromadb help [COMMANDS]`](#chromadb-help-commands)
* [`chromadb items count COLLECTION_NAME`](#chromadb-items-count-collection_name)
* [`chromadb items get COLLECTION_NAME ITEM_ID`](#chromadb-items-get-collection_name-item_id)
* [`chromadb items peek COLLECTION_NAME`](#chromadb-items-peek-collection_name)
* [`chromadb items query COLLECTION_NAME TEXT`](#chromadb-items-query-collection_name-text)
* [`chromadb update [CHANNEL]`](#chromadb-update-channel)

## `chromadb collections delete COLLECTION_NAME`

delete a collection

```
USAGE
  $ chromadb collections delete COLLECTION_NAME

ARGUMENTS
  COLLECTION_NAME  name of the collection

DESCRIPTION
  delete a collection

EXAMPLES
  $ chromadb collections delete
```

_See code: [dist/commands/collections/delete.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/collections/delete.ts)_

## `chromadb collections get COLLECTION_NAME`

get a collection

```
USAGE
  $ chromadb collections get COLLECTION_NAME

ARGUMENTS
  COLLECTION_NAME  name of the collection

DESCRIPTION
  get a collection

EXAMPLES
  $ chromadb collections get
```

_See code: [dist/commands/collections/get.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/collections/get.ts)_

## `chromadb collections list`

list collections in the chroma server

```
USAGE
  $ chromadb collections list

DESCRIPTION
  list collections in the chroma server

EXAMPLES
  $ chromadb collections list
```

_See code: [dist/commands/collections/list.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/collections/list.ts)_

## `chromadb configure`

set configuration for the chromadb server

```
USAGE
  $ chromadb configure

DESCRIPTION
  set configuration for the chromadb server
```

_See code: [dist/commands/configure.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/configure.ts)_

## `chromadb help [COMMANDS]`

Display help for chromadb.

```
USAGE
  $ chromadb help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for chromadb.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `chromadb items count COLLECTION_NAME`

count items in a collection

```
USAGE
  $ chromadb items count COLLECTION_NAME

ARGUMENTS
  COLLECTION_NAME  name of the collection

DESCRIPTION
  count items in a collection

EXAMPLES
  $ chromadb items count
```

_See code: [dist/commands/items/count.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/items/count.ts)_

## `chromadb items get COLLECTION_NAME ITEM_ID`

get item in a collection

```
USAGE
  $ chromadb items get COLLECTION_NAME ITEM_ID

ARGUMENTS
  COLLECTION_NAME  name of the collection
  ITEM_ID          id of the item

DESCRIPTION
  get item in a collection

EXAMPLES
  $ chromadb items get
```

_See code: [dist/commands/items/get.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/items/get.ts)_

## `chromadb items peek COLLECTION_NAME`

count items in a collection

```
USAGE
  $ chromadb items peek COLLECTION_NAME [--limit <value>]

ARGUMENTS
  COLLECTION_NAME  name of the collection

FLAGS
  --limit=<value>  [default: 10] how many items to return

DESCRIPTION
  count items in a collection

EXAMPLES
  $ chromadb items peek
```

_See code: [dist/commands/items/peek.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/items/peek.ts)_

## `chromadb items query COLLECTION_NAME TEXT`

query items in a collection

```
USAGE
  $ chromadb items query COLLECTION_NAME TEXT [--provider openai] [--model text-embedding-ada-002] [--limit
    <value>]

ARGUMENTS
  COLLECTION_NAME  name of the collection
  TEXT             text to query for

FLAGS
  --limit=<value>      [default: 10] how many items to return
  --model=<option>     [default: text-embedding-ada-002] what model to use
                       <options: text-embedding-ada-002>
  --provider=<option>  [default: openai] what LLM provider to use
                       <options: openai>

DESCRIPTION
  query items in a collection

EXAMPLES
  $ chromadb items query
```

_See code: [dist/commands/items/query.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/items/query.ts)_

## `chromadb update [CHANNEL]`

update the chromadb CLI

```
USAGE
  $ chromadb update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the chromadb CLI

EXAMPLES
  Update to the stable channel:

    $ chromadb update stable

  Update to a specific version:

    $ chromadb update --version 1.0.0

  Interactively select version:

    $ chromadb update --interactive

  See available versions:

    $ chromadb update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.2.3/src/commands/update.ts)_
<!-- commandsstop -->
# Table of contents
<!-- toc -->
* [Usage](#usage)
* [Initialization](#initialization)
* [Commands](#commands)
* [Table of contents](#table-of-contents)
<!-- tocstop -->
