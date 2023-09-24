# Usage
<!-- usage -->
```sh-session
$ npm install -g chromadb-cli
$ chromadb COMMAND
running command...
$ chromadb (--version)
chromadb-cli/0.0.0 darwin-arm64 node-v18.16.0
$ chromadb --help [COMMAND]
USAGE
  $ chromadb COMMAND
...
```
<!-- usagestop -->
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
* [`chromadb plugins`](#chromadb-plugins)
* [`chromadb plugins:install PLUGIN...`](#chromadb-pluginsinstall-plugin)
* [`chromadb plugins:inspect PLUGIN...`](#chromadb-pluginsinspect-plugin)
* [`chromadb plugins:install PLUGIN...`](#chromadb-pluginsinstall-plugin-1)
* [`chromadb plugins:link PLUGIN`](#chromadb-pluginslink-plugin)
* [`chromadb plugins:uninstall PLUGIN...`](#chromadb-pluginsuninstall-plugin)
* [`chromadb plugins:uninstall PLUGIN...`](#chromadb-pluginsuninstall-plugin-1)
* [`chromadb plugins:uninstall PLUGIN...`](#chromadb-pluginsuninstall-plugin-2)
* [`chromadb plugins update`](#chromadb-plugins-update)

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

_See code: [dist/commands/collection/delete.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.0/dist/commands/collection/delete.ts)_

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

_See code: [dist/commands/collection/get.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.0/dist/commands/collection/get.ts)_

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

_See code: [dist/commands/collection/list.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.0/dist/commands/collection/list.ts)_

## `chromadb configure`

set configuration for the chromadb server

```
USAGE
  $ chromadb configure

DESCRIPTION
  set configuration for the chromadb server
```

_See code: [dist/commands/configure.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.0/dist/commands/configure.ts)_

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

_See code: [dist/commands/items/count.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.0/dist/commands/items/count.ts)_

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

_See code: [dist/commands/items/get.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.0/dist/commands/items/get.ts)_

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

_See code: [dist/commands/items/peek.ts](https://github.com/sudhanshug16/chromadb-cli/blob/v0.0.0/dist/commands/items/peek.ts)_

## `chromadb plugins`

List installed plugins.

```
USAGE
  $ chromadb plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ chromadb plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/index.ts)_

## `chromadb plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ chromadb plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ chromadb plugins add

EXAMPLES
  $ chromadb plugins:install myplugin 

  $ chromadb plugins:install https://github.com/someuser/someplugin

  $ chromadb plugins:install someuser/someplugin
```

## `chromadb plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ chromadb plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ chromadb plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/inspect.ts)_

## `chromadb plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ chromadb plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ chromadb plugins add

EXAMPLES
  $ chromadb plugins:install myplugin 

  $ chromadb plugins:install https://github.com/someuser/someplugin

  $ chromadb plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/install.ts)_

## `chromadb plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ chromadb plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ chromadb plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/link.ts)_

## `chromadb plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chromadb plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chromadb plugins unlink
  $ chromadb plugins remove
```

## `chromadb plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chromadb plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chromadb plugins unlink
  $ chromadb plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/uninstall.ts)_

## `chromadb plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chromadb plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chromadb plugins unlink
  $ chromadb plugins remove
```

## `chromadb plugins update`

Update installed plugins.

```
USAGE
  $ chromadb plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
# Table of contents
<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Table of contents](#table-of-contents)
<!-- tocstop -->
