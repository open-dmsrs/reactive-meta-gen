/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/open-dmsrs/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, useStatusBarItem, useDisposable, } from 'reactive-vscode';
export const publisher = "cnjimbo";
export const name = "project-config";
export const version = "1.1.2";
export const displayName = "Project Config Updater";
export const description = "Export current settings to workspace config file ";
export const extensionId = "cnjimbo.project-config";
type Cache<T> = Record<string, {
  exp: number | null;
  value: T;
  dispose: () => void;
}>;
const memoize = <TArgs extends any[], TResult>(cache: Cache<TResult>,
  func: (...args: TArgs) => TResult,
  keyFunc: ((...args: TArgs) => string) | null,
  ttl: number | null) => {
  return function callWithMemo(...args: any): TResult {
    const key = keyFunc ? keyFunc(...args) : JSON.stringify({ args });
    const existing = cache[key];
    if (existing !== undefined) {
      if (!existing.exp)
        return existing.value;
      if (existing.exp > new Date().getTime()) {
        return existing.value;
      }
    }
    const result = func(...args);
    cache[key] = {
      exp: ttl ? new Date().getTime() + ttl : null,
      value: result,
      dispose: () => {
        delete cache[key];
      }
    };
    useDisposable(cache[key]);
    return result;
  };
};
/**
 * Creates a memoized function. The returned function
 * will only execute the source function when no value
 * has previously been computed. If a ttl (milliseconds)
 * is given previously computed values will be checked
 * for expiration before being returned.
 */
export const memo = <TArgs extends any[], TResult>(func: (...args: TArgs) => TResult, options: {
  key?: (...args: TArgs) => string;
  ttl?: number;
} = {}) => {
  return memoize({}, func, options.key ?? null, options.ttl ?? null) as (...args: TArgs) => TResult;
};
export interface CommandsInformation {
  /**
   *  category string by which the command is grouped in the UI
   */
  category?: string;
  /**
   * identifier of the command to execute
   */
  command: string;
  /**
   * title which the command is represented in the UI
   */
  title: string;
  enablement?: string;
  icon?: string;
  shortTitle?: string;
  commandShorthandName?: string;
}
/**
 * Type union of all commands
 */
export type Command = "base" | "manualUpdate" | "project-config.manualUpdate" | "project-config.remove-watch-dir" | "remove-watch-dir" | "project-config.add-watch-dir" | "extension.emeraldwalk.enableRunOnSave" | "extension.emeraldwalk.disableRunOnSave";
/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
  /**
   * Update config now
   * @command `base`
   */
  base: "base",
  /**
   * Update config now
   * @command `manualUpdate`
   */
  manualUpdate: "manualUpdate",
  /**
   * Update config now
   * @command `project-config.manualUpdate`
   */
  projectConfigManualUpdate: "project-config.manualUpdate",
  /**
   * Remove watch dir
   * @command `project-config.remove-watch-dir`
   */
  removeWatchDir: "project-config.remove-watch-dir",
  /**
   * Remove watch dir
   * @command `remove-watch-dir`
   */
  removeWatchDir_2: "remove-watch-dir",
  /**
   * Add watch dir
   * @command `project-config.add-watch-dir`
   */
  addWatchDir: "project-config.add-watch-dir",
  /**
   * Run On Save: Enable
   * @command `extension.emeraldwalk.enableRunOnSave`
   */
  enableRunOnSave: "extension.emeraldwalk.enableRunOnSave",
  /**
   * Run On Save: Disable
   * @command `extension.emeraldwalk.disableRunOnSave`
   */
  disableRunOnSave: "extension.emeraldwalk.disableRunOnSave",
} satisfies Record<string, Command> as Record<string, Command>;
/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commandsInformation = {
  /**
   * Update config now
   * @command `base`
   */
  "base": { "commandShorthandName": "base", "category": "Project Config Updater", "command": "base", "title": "Update config now" },
  /**
   * Update config now
   * @command `manualUpdate`
   */
  "manualUpdate": { "commandShorthandName": "manualUpdate", "category": "Project Config Updater", "command": "manualUpdate", "title": "Update config now" },
  /**
   * Update config now
   * @command `project-config.manualUpdate`
   */
  "project-config.manualUpdate": { "commandShorthandName": "projectConfigManualUpdate", "category": "Project Config Updater", "command": "project-config.manualUpdate", "title": "Update config now" },
  /**
   * Remove watch dir
   * @command `project-config.remove-watch-dir`
   */
  "project-config.remove-watch-dir": { "commandShorthandName": "removeWatchDir", "category": "Project Config Updater", "command": "project-config.remove-watch-dir", "title": "remove watch dir" },
  /**
   * Remove watch dir
   * @command `remove-watch-dir`
   */
  "remove-watch-dir": { "commandShorthandName": "removeWatchDir_2", "category": "Project Config Updater", "command": "remove-watch-dir", "title": "remove watch dir" },
  /**
   * Add watch dir
   * @command `project-config.add-watch-dir`
   */
  "project-config.add-watch-dir": { "commandShorthandName": "addWatchDir", "category": "Project Config Updater", "command": "project-config.add-watch-dir", "title": "add watch dir" },
  /**
   * Run On Save: Enable
   * @command `extension.emeraldwalk.enableRunOnSave`
   */
  "extension.emeraldwalk.enableRunOnSave": { "commandShorthandName": "enableRunOnSave", "command": "extension.emeraldwalk.enableRunOnSave", "title": "Run On Save: Enable" },
  /**
   * Run On Save: Disable
   * @command `extension.emeraldwalk.disableRunOnSave`
   */
  "extension.emeraldwalk.disableRunOnSave": { "commandShorthandName": "disableRunOnSave", "command": "extension.emeraldwalk.disableRunOnSave", "title": "Run On Save: Disable" },
} satisfies Record<Command, CommandsInformation> as Record<Command, CommandsInformation>;
/**
 * Register a command. See `vscode::commands.registerCommand`.
 */
export const useCommand = (commandFullKey: Command, callback: (...args: any[]) => any): void => useReactiveCommand(commandFullKey, callback);
/**
 * Register multiple commands. See `vscode::commands.registerCommand`.
 */
export const useCommands = (commands: Partial<Record<Command, (...args: any[]) => any>>): void => useReactiveCommands(commands);
/**
 * Name type of Logger and OutputChannel
 */
export type LoggerName = typeof name | typeof displayName | typeof extensionId;
/**
 * Creates a logger that writes to the output channel.
 */
export const useLogger = (loggerName: LoggerName = displayName ?? name ?? extensionId, getPrefix?: ((type: string) => string) | null) => useReactiveLogger(loggerName, { 'getPrefix': getPrefix });
/**
 * @reactive `window.createOutputChannel`
 */
export const useOutputChannel = (outputName: LoggerName = displayName ?? name ?? extensionId) => useReactiveOutputChannel(outputName);
/**
 * Create a statusBarItem with a commmand id
 */
export const useStatusBarItemFromCommand = (commandKey: Command) => {
  let cmd = commandsInformation[commandKey];
  return useStatusBarItem({
    id: cmd.command,
    command: cmd.command,
    name: cmd.command,
    text: cmd.shortTitle ?? cmd.title,
    tooltip: cmd.title
  });
};
/**
 * Update config now
 * @command Register a command `base`
 */
export const useCommandBase = (callback: (...args: any[]) => any) => useCommand(commands.base, callback);
/**
 * Update config now
 * @command Register a command `manualUpdate`
 */
export const useCommandManualUpdate = (callback: (...args: any[]) => any) => useCommand(commands.manualUpdate, callback);
/**
 * Update config now
 * @command Register a command `project-config.manualUpdate`
 */
export const useCommandProjectConfigManualUpdate = (callback: (...args: any[]) => any) => useCommand(commands.projectConfigManualUpdate, callback);
/**
 * Remove watch dir
 * @command Register a command `project-config.remove-watch-dir`
 */
export const useCommandRemoveWatchDir = (callback: (...args: any[]) => any) => useCommand(commands.removeWatchDir, callback);
/**
 * Remove watch dir
 * @command Register a command `remove-watch-dir`
 */
export const useCommandRemoveWatchDir2 = (callback: (...args: any[]) => any) => useCommand(commands.removeWatchDir_2, callback);
/**
 * Add watch dir
 * @command Register a command `project-config.add-watch-dir`
 */
export const useCommandAddWatchDir = (callback: (...args: any[]) => any) => useCommand(commands.addWatchDir, callback);
/**
 * Run On Save: Enable
 * @command Register a command `extension.emeraldwalk.enableRunOnSave`
 */
export const useCommandEnableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.enableRunOnSave, callback);
/**
 * Run On Save: Disable
 * @command Register a command `extension.emeraldwalk.disableRunOnSave`
 */
export const useCommandDisableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.disableRunOnSave, callback);
/**
 * Type union of Deprecated all configs
 */
export type DeprecatedConfigKey = "ww_should_not_show_up";
/**
 * Section Type of `project-config`
 */
export interface ProjectConfig {
  /**
   * The branch name of upstream repo
   */
  "fileNestingUpdater.upstreamBranch": string;
  /**
   * The upstream repo you want to update from
   */
  "fileNestingUpdater.upstreamRepo": string;
  /**
   * Enabled project-config inline annotations
   */
  "test.annotations": boolean;
  /**
   * Position the icon before or after the icon name
   */
  "test.position": ("after" | "before");
}
/**
 * Section Type of `project-config.fileNestingUpdater`
 */
export interface FileNestingUpdater {
  /**
   * The branch name of upstream repo
   */
  "upstreamBranch": string;
  /**
   * The upstream repo you want to update from
   */
  "upstreamRepo": string;
}
/**
 * Section Type of `project-config.test`
 */
export interface Test {
  /**
   * Enabled project-config inline annotations
   */
  "annotations": boolean;
  /**
   * Position the icon before or after the icon name
   */
  "position": ("after" | "before");
}
/**
 * Section Type of `virtual(Keys in the root)`
 */
export interface Root {
  /**
   * Enabled project-config inline annotations
   */
  "xxx": boolean;
}
/**
 * Section Type of `emeraldwalk`
 */
export interface Emeraldwalk {
  "runonsave": {
    /**
   * Automatically clear the console on each save before running commands.
   * @default `false`
   */
    'autoClearConsole': boolean;
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     * @default `undefined`
     */
    'shell'?: string;
    /**
     * Delimiters for separating between collection id and icon id
     * @default `[":","--","-","/"]`
     */
    'delimiters': string[];
    /**
     * Delimiters for separating between collection id and icon id
     * @default `[":","--","-","/"]`
     */
    'delimiters1': string[];
    /**
     *
     * @default `[]`
     */
    'commands': {
      /**
 * Regex for matching files to run commands on
 *
 * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
 *
 * e.g.
 * "match": "some\\\\directory\\\\.*"
 * @default `".*"`
 */
      'match': string;
      /**
       * Regex for matching files *not* to run commands on.
       * @default `".*"`
       */
      'notMatch': string;
      /**
       * Command to execute on save.
       * @default `"echo ${file}"`
       */
      'cmd': string;
      /**
       * Run command asynchronously.
       * @default `false`
       */
      'isAsync': boolean;
    }[];
  };
}
const projectConfigDefaults = {
  /**
   * Config defaults of `project-config`
   */
  "project-config": {
    /**
     * The branch name of upstream repo
     */
    "fileNestingUpdater.upstreamBranch": "main",
    /**
     * The upstream repo you want to update from
     */
    "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
    /**
     * Enabled project-config inline annotations
     */
    "test.annotations": true,
    /**
     * Position the icon before or after the icon name
     */
    "test.position": "before",
  } satisfies ProjectConfig as ProjectConfig,
  /**
   * Config defaults of `project-config.fileNestingUpdater`
   */
  "project-config.fileNestingUpdater": {
    /**
     * The branch name of upstream repo
     */
    "upstreamBranch": "main",
    /**
     * The upstream repo you want to update from
     */
    "upstreamRepo": "antfu/vscode-file-nesting-config",
  } satisfies FileNestingUpdater as FileNestingUpdater,
  /**
   * Config defaults of `project-config.test`
   */
  "project-config.test": {
    /**
     * Enabled project-config inline annotations
     */
    "annotations": true,
    /**
     * Position the icon before or after the icon name
     */
    "position": "before",
  } satisfies Test as Test,
  /**
   * Config defaults of `virtual(Keys in the root)`
   */
  "": {
    /**
     * Enabled project-config inline annotations
     */
    "xxx": true,
  } satisfies Root as Root,
  /**
   * Config defaults of `emeraldwalk`
   */
  "emeraldwalk": {
    "runonsave": { "autoClearConsole": false, "shell": undefined, "delimiters": [":", "--", "-", "/"], "delimiters1": [":", "--", "-", "/"], "commands": [] },
  } satisfies Emeraldwalk as Emeraldwalk,
};
export type ConfigurationSection = keyof typeof projectConfigDefaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
  projectConfig: "project-config",
  fileNestingUpdater: "project-config.fileNestingUpdater",
  test: "project-config.test",
  root: "",
  emeraldwalk: "emeraldwalk",
} satisfies Record<string, ConfigurationSection>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfig = memo(<K extends ConfigurationSection>(section: K) => defineConfigs<typeof projectConfigDefaults[K]>(section, projectConfigDefaults[section]));
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfigObject = memo(<K extends ConfigurationSection>(section: K) => defineConfigObject<typeof projectConfigDefaults[K]>(section, projectConfigDefaults[section]));
/**
 * ConfigObject of `project-config`
 * @example
 * const projectConfig = useConfigObjectProjectConfig()
 * const oldVal:string = projectConfig.fileNestingUpdater.upstreamBranch //get value
 * projectConfig.$update("fileNestingUpdater.upstreamBranch", oldVal) //update value
 */
export const useConfigObjectProjectConfig = () => useConfigObject(configs.projectConfig);
/**
 * ToConfigRefs of `project-config`
 * @example
 * const projectConfig = useConfigProjectConfig()
 * const oldVal:string = projectConfig.fileNestingUpdater.upstreamBranch.value //get value
 * projectConfig.fileNestingUpdater.upstreamBranch.update(oldVal) //update value
 */
export const useConfigProjectConfig = () => useConfig(configs.projectConfig);
/**
 * ConfigObject of `project-config.fileNestingUpdater`
 * @example
 * const fileNestingUpdater = useConfigObjectFileNestingUpdater()
 * const oldVal:string = fileNestingUpdater.upstreamBranch //get value
 * fileNestingUpdater.$update("upstreamBranch", oldVal) //update value
 */
export const useConfigObjectFileNestingUpdater = () => useConfigObject(configs.fileNestingUpdater);
/**
 * ToConfigRefs of `project-config.fileNestingUpdater`
 * @example
 * const fileNestingUpdater = useConfigFileNestingUpdater()
 * const oldVal:string = fileNestingUpdater.upstreamBranch.value //get value
 * fileNestingUpdater.upstreamBranch.update(oldVal) //update value
 */
export const useConfigFileNestingUpdater = () => useConfig(configs.fileNestingUpdater);
/**
 * ConfigObject of `project-config.test`
 * @example
 * const test = useConfigObjectTest()
 * const oldVal:boolean = test.annotations //get value
 * test.$update("annotations", oldVal) //update value
 */
export const useConfigObjectTest = () => useConfigObject(configs.test);
/**
 * ToConfigRefs of `project-config.test`
 * @example
 * const test = useConfigTest()
 * const oldVal:boolean = test.annotations.value //get value
 * test.annotations.update(oldVal) //update value
 */
export const useConfigTest = () => useConfig(configs.test);
/**
 * ConfigObject of `virtual(Keys in the root)`
 * @example
 * const root = useConfigObjectRoot()
 * const oldVal:boolean = root.xxx //get value
 * root.$update("xxx", oldVal) //update value
 */
export const useConfigObjectRoot = () => useConfigObject(configs.root);
/**
 * ToConfigRefs of `virtual(Keys in the root)`
 * @example
 * const root = useConfigRoot()
 * const oldVal:boolean = root.xxx.value //get value
 * root.xxx.update(oldVal) //update value
 */
export const useConfigRoot = () => useConfig(configs.root);
/**
 * ConfigObject of `emeraldwalk`
 * @example
 * const emeraldwalk = useConfigObjectEmeraldwalk()
 * const oldVal:object = emeraldwalk.runonsave //get value
 * emeraldwalk.$update("runonsave", oldVal) //update value
 */
export const useConfigObjectEmeraldwalk = () => useConfigObject(configs.emeraldwalk);
/**
 * ToConfigRefs of `emeraldwalk`
 * @example
 * const emeraldwalk = useConfigEmeraldwalk()
 * const oldVal:object = emeraldwalk.runonsave.value //get value
 * emeraldwalk.runonsave.update(oldVal) //update value
 */
export const useConfigEmeraldwalk = () => useConfig(configs.emeraldwalk);
export type EmeraldwalkRunonsave = "autoClearConsole" | "shell" | "delimiters" | "delimiters1" | "commands";
