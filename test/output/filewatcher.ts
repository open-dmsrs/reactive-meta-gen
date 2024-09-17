/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, } from 'reactive-vscode';
export const publisher = "appulate";
export const name = "filewatcher";
export const version = "2.0.0";
export const displayName = "File Watcher";
export const description = "Watch file or folder changes (deletions, creations, renaming), and run matched command scripts.";
export const extensionId = "appulate.filewatcher";
/**
 * Type union of all commands
 */
export type CommandKey = "extension.enableFileWatcher" | "extension.disableFileWatcher" | "extension.focusIntoOutput";
/**
 * Commands map registed by `appulate.filewatcher`
 */
export const commands = {
    /**
     * File Watcher: Enable
     * @commandkey `extension.enableFileWatcher`
     */
    enableFileWatcher: "extension.enableFileWatcher",
    /**
     * File Watcher: Disable
     * @commandkey `extension.disableFileWatcher`
     */
    disableFileWatcher: "extension.disableFileWatcher",
    /**
     * File Watcher: Focus Output
     * @commandkey `extension.focusIntoOutput`
     */
    focusIntoOutput: "extension.focusIntoOutput",
} satisfies Record<string, CommandKey>;
/**
 * Register a command. See `vscode::commands.registerCommand`.
 */
export const useCommand = (commandFullKey: CommandKey, callback: (...args: any[]) => any): void => useReactiveCommand(commandFullKey, callback);
/**
 * Register multiple commands. See `vscode::commands.registerCommand`.
 */
export const useCommands = (commands: Partial<Record<CommandKey, (...args: any[]) => any>>): void => useReactiveCommands(commands);
/**
 * name type of Logger and OutputChannel
 */
export type LoggerNameType = typeof name | typeof displayName | typeof extensionId;
/**
 * Creates a logger that writes to the output channel.
 */
export const useLogger = (loggerName: LoggerNameType = displayName ?? name ?? extensionId, getPrefix?: ((type: string) => string) | null) => useReactiveLogger(loggerName, { 'getPrefix': getPrefix });
/**
 * @reactive `window.createOutputChannel`
 */
export const useOutputChannel = (outputName: LoggerNameType = displayName ?? name ?? extensionId) => useReactiveOutputChannel(outputName);
/**
 * File Watcher: Enable
 * @commandkey Register a command `extension.enableFileWatcher`
 */
export const useCommandEnableFileWatcher = (callback: (...args: any[]) => any) => useCommand(commands.enableFileWatcher, callback);
/**
 * File Watcher: Disable
 * @commandkey Register a command `extension.disableFileWatcher`
 */
export const useCommandDisableFileWatcher = (callback: (...args: any[]) => any) => useCommand(commands.disableFileWatcher, callback);
/**
 * File Watcher: Focus Output
 * @commandkey Register a command `extension.focusIntoOutput`
 */
export const useCommandFocusIntoOutput = (callback: (...args: any[]) => any) => useCommand(commands.focusIntoOutput, callback);
/**
 * Section Type of `filewatcher`
 */
export interface Filewatcher {
    /**
     * Automatically clear the console on each save before running commands.
     */
    "autoClearConsole": boolean;
    /**
     * Common shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     */
    "shell"?: (string | undefined);
    /**
     * Returns the status bar to its normal position (after receiving a 'Success' or 'Error' status) after a some time.
     */
    "isClearStatusBar": boolean;
    /**
     * The time after which the status returns to normal. Only works if isClearStatusBar === true. Default is 5000ms
     */
    "statusBarDelay": number;
    /**
     * Launches event handlers of the same name with the appropriate pattern 'match' or 'notMatch' (e.g. onFileChange and onFolderChange) in synchronous or asynchronous mode.
     */
    "isSyncRunEvents": boolean;
    /**
     * Color for success message in the status bar. Default: dark: '#25E028', light: '#18CE1B', highContrast: '#0DC610'
     */
    "successTextColor"?: (string | undefined);
    /**
     * Color for run message in the status bar. Default: dark: '#00FFFB', light: '#02D4D1', highContrast: '#03D2CE'
     */
    "runTextColor"?: (string | undefined);
    /**
     * array of commands
     */
    "commands"?: ({
        /**
     * Unique shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     * @default `undefined`
     */
        'shell'?: string;
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
         * Command to execute.
         * @default `"echo ${file}"`
         */
        'cmd': string;
        /**
         * Name of a VS Code task defined in tasks.json or commands to execute. Only works if cmd value does not exist. Must be a string (e.g. command id) or array of strings (e.g. ['workbench.action.tasks.runTask', 'some-task-name'] and etc.)
         * @default `undefined`
         */
        'vscodeTask'?: string | string[];
        /**
         * Run command asynchronously.
         * @default `undefined`
         */
        'isAsync'?: boolean;
        /**
         * events onFileChange, onFileChangeImmediate, onFileDelete, onFileRename, onFileCreate, onFolderChange, onFolderCreate, onFolderDelete
         * @default `undefined`
         */
        'event'?: ("onFileChange" | "onFileChangeImmediate" | "onFolderChange" | "onFileDelete" | "onFileRename" | "onFileCreate" | "onFolderCreate" | "onFolderDelete");
    }[] | undefined);
}
const filewatcherDefaults = {
    /**
     * Config defaults of `filewatcher`
     */
    "filewatcher": {
        /**
         * Automatically clear the console on each save before running commands.
         */
        "autoClearConsole": false,
        /**
         * Common shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
         */
        "shell": undefined,
        /**
         * Returns the status bar to its normal position (after receiving a 'Success' or 'Error' status) after a some time.
         */
        "isClearStatusBar": false,
        /**
         * The time after which the status returns to normal. Only works if isClearStatusBar === true. Default is 5000ms
         */
        "statusBarDelay": 5000,
        /**
         * Launches event handlers of the same name with the appropriate pattern 'match' or 'notMatch' (e.g. onFileChange and onFolderChange) in synchronous or asynchronous mode.
         */
        "isSyncRunEvents": false,
        /**
         * Color for success message in the status bar. Default: dark: '#25E028', light: '#18CE1B', highContrast: '#0DC610'
         */
        "successTextColor": undefined,
        /**
         * Color for run message in the status bar. Default: dark: '#00FFFB', light: '#02D4D1', highContrast: '#03D2CE'
         */
        "runTextColor": undefined,
        /**
         * array of commands
         */
        "commands": undefined,
    } satisfies Filewatcher as Filewatcher,
};
export type ConfigSecionKey = keyof typeof filewatcherDefaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
    filewatcher: "filewatcher",
} satisfies Record<string, ConfigSecionKey>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export function useConfig<K extends ConfigSecionKey>(section: K) {
    return defineConfigs<typeof filewatcherDefaults[K]>(section, filewatcherDefaults[section]);
}
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export function useConfigObject<K extends ConfigSecionKey>(section: K) {
    return defineConfigObject<typeof filewatcherDefaults[K]>(section, filewatcherDefaults[section]);
}
/**
 * ConfigObject of `filewatcher`
 * @example
 * const filewatcher = useConfigObjectFilewatcher()
 * const oldVal:boolean = filewatcher.autoClearConsole //get value
 * filewatcher.$update("autoClearConsole", oldVal) //update value
 */
export const useConfigObjectFilewatcher = () => useConfigObject(configs.filewatcher);
/**
 * ToConfigRefs of `filewatcher`
 * @example
 * const filewatcher = useConfigFilewatcher()
 * const oldVal:boolean = filewatcher.autoClearConsole.value //get value
 * filewatcher.autoClearConsole.update(oldVal) //update value
 */
export const useConfigFilewatcher = () => useConfig(configs.filewatcher);
