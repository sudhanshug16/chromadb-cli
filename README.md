Basic CLI for [ChromaDB](https://github.com/chroma-core/chroma)

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
* [`chromadb collection delete COLLECTION_NAME`](#chromadb-collection-delete-collection_name)
* [`chromadb collection get COLLECTION_NAME`](#chromadb-collection-get-collection_name)
* [`chromadb collection list`](#chromadb-collection-list)
* [`chromadb configure`](#chromadb-configure)
* [`chromadb help [COMMANDS]`](#chromadb-help-commands)
* [`chromadb items count COLLECTION_NAME`](#chromadb-items-count-collection_name)
* [`chromadb items get COLLECTION_NAME ITEM_ID`](#chromadb-items-get-collection_name-item_id)
* [`chromadb items peek COLLECTION_NAME`](#chromadb-items-peek-collection_name)

## `chromadb collection delete COLLECTION_NAME`

delete a collection from the chroma server

```
USAGE
  $ chromadb collection delete COLLECTION_NAME

ARGUMENTS
  COLLECTION_NAME  name of the collection

DESCRIPTION
  delete a collection from the chroma server

EXAMPLES
  $ chromadb collection delete
```

_See code: [dist/commands/collection/delete.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/collection/delete.ts)_

## `chromadb collection get COLLECTION_NAME`

get a collection from the chroma server

```
USAGE
  $ chromadb collection get COLLECTION_NAME

ARGUMENTS
  COLLECTION_NAME  name of the collection

DESCRIPTION
  get a collection from the chroma server

EXAMPLES
  $ chromadb collection get
```

_See code: [dist/commands/collection/get.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/collection/get.ts)_

## `chromadb collection list`

list collections in the chroma server

```
USAGE
  $ chromadb collection list

DESCRIPTION
  list collections in the chroma server

EXAMPLES
  $ chromadb collection list
```

_See code: [dist/commands/collection/list.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/collection/list.ts)_

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

count items in a collection from the chroma server

```
USAGE
  $ chromadb items count COLLECTION_NAME

ARGUMENTS
  COLLECTION_NAME  name of the collection

DESCRIPTION
  count items in a collection from the chroma server

EXAMPLES
  $ chromadb items count
```

_See code: [dist/commands/items/count.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/items/count.ts)_

## `chromadb items get COLLECTION_NAME ITEM_ID`

get item in a collection from the chroma server

```
USAGE
  $ chromadb items get COLLECTION_NAME ITEM_ID

ARGUMENTS
  COLLECTION_NAME  name of the collection
  ITEM_ID          id of the item

DESCRIPTION
  get item in a collection from the chroma server

EXAMPLES
  $ chromadb items get
```

_See code: [dist/commands/items/get.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/items/get.ts)_

## `chromadb items peek COLLECTION_NAME`

count items in a collection from the chroma server

```
USAGE
  $ chromadb items peek COLLECTION_NAME [--limit <value>]

ARGUMENTS
  COLLECTION_NAME  name of the collection

FLAGS
  --limit=<value>  [default: 10] how many items to return

DESCRIPTION
  count items in a collection from the chroma server

EXAMPLES
  $ chromadb items peek
```

_See code: [dist/commands/items/peek.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.1/dist/commands/items/peek.ts)_
<!-- commandsstop -->
# Table of contents
<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Table of contents](#table-of-contents)
<!-- tocstop -->
