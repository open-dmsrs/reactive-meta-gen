/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, } from 'reactive-vscode';
export const publisher = "calmripple";
export const name = "sample";
export const version = "0.8.1";
export const displayName = "sample IntelliSense";
export const description = "Intelligent sample previewing and searching for VS Code";
export const extensionId = "calmripple.sample";
type Cache<T> = Record<string, {
    exp: number | null;
    value: T;
}>;
const memoize = <TArgs extends any[], TResult>(cache: Cache<TResult>, func: (...args: TArgs) => TResult, keyFunc: ((...args: TArgs) => string) | null, ttl: number | null) => {
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
            value: result
        };
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
/**
 * Type union of all commands
 */
export type CommandKey = "sample.toggle-annotations" | "sample.toggle-inplace" | "sample.clear-cache" | "sample.update-date";
/**
 * Commands map registed by `calmripple.sample`
 */
export const commandKeys = {
    /**
     * Toggle Annotations
     * @commandkey `sample.toggle-annotations`
     */
    toggleAnnotations: "sample.toggle-annotations",
    /**
     * Toggle In-place Mode
     * @commandkey `sample.toggle-inplace`
     */
    toggleInplace: "sample.toggle-inplace",
    /**
     * Clear icon cache
     * @commandkey `sample.clear-cache`
     */
    clearCache: "sample.clear-cache",
    /**
     * Update current date
     * @commandkey `sample.update-date`
     */
    updateDate: "sample.update-date",
} satisfies Record<string, CommandKey>;
/**
 * @deprecated Use commandKeys instead.this api will be removed in v0.4
 */
export const commands = commandKeys;
/**
 * Register a command. See `vscode::commands.registerCommand`.
 */
export const useCommand = (commandFullKey: CommandKey, callback: (...args: any[]) => any): void => useReactiveCommand(commandFullKey, callback);
/**
 * Register multiple commands. See `vscode::commands.registerCommand`.
 */
export const useCommands = (commands: Partial<Record<CommandKey, (...args: any[]) => any>>): void => useReactiveCommands(commands);
/**
 * Name type of Logger and OutputChannel
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
 * Toggle Annotations
 * @commandkey Register a command `sample.toggle-annotations`
 */
export const useCommandToggleAnnotations = (callback: (...args: any[]) => any) => useCommand(commandKeys.toggleAnnotations, callback);
/**
 * Toggle In-place Mode
 * @commandkey Register a command `sample.toggle-inplace`
 */
export const useCommandToggleInplace = (callback: (...args: any[]) => any) => useCommand(commandKeys.toggleInplace, callback);
/**
 * Clear icon cache
 * @commandkey Register a command `sample.clear-cache`
 */
export const useCommandClearCache = (callback: (...args: any[]) => any) => useCommand(commandKeys.clearCache, callback);
/**
 * Update current date
 * @commandkey Register a command `sample.update-date`
 */
export const useCommandUpdateDate = (callback: (...args: any[]) => any) => useCommand(commandKeys.updateDate, callback);
/**
 * Section Type of `sample`
 */
export interface Sample {
    /**
     * Current time
     */
    "date": string;
    /**
     * Use icon graph to replace the icon name.
     */
    "inplace": boolean;
    /**
     * Enabled sample inline annotations
     */
    "annotations": boolean;
    /**
     * Position the icon before or after the icon name
     */
    "position": ("before" | "after");
    /**
     * Icon color hex for inline displaying
     */
    "color": string;
    /**
     * Delimiters for separating between collection id and icon id
     */
    "delimiters": string[];
    /**
     * Prefixes for matching
     */
    "prefixes": string[];
    /**
     * Suffixes for matching
     */
    "suffixes": string[];
    /**
     * Array of language IDs to enable annotations
     */
    "languageIds": string[];
    /**
     * Collection IDs to be included for detection
     */
    "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null);
    /**
     * Collection IDs to be excluded for detection
     */
    "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null);
    /**
     * CDN entry of sample icon-sets
     */
    "cdnEntry": string;
    /**
     * JSON paths for custom collection
     */
    "customCollectionJsonPaths": string[];
    /**
     * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
     */
    "customCollectionIdsMap": Record<string, unknown>;
    /**
     * JSON paths for custom aliases
     */
    "customAliasesJsonPaths": string[];
    /**
     * Only use the icon aliases. Non aliased icons will be ignored.
     */
    "customAliasesOnly": boolean;
}
/**
 * Section Type of `project-kit`
 */
export interface ProjectKit {
    "emeraldwalk.runonsave": {
        /**
       * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
       * @default `undefined`
       */
        'shell'?: string;
        /**
         *
         * @default `[]`
         */
        'commands': {
            /**
       * Command to execute on save.
       * @default `"echo ${file}"`
       */
            'cmd': string;
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
             * Run command asynchronously.
             * @default `false`
             */
            'isAsync': boolean;
            /**
             * Regex for matching files *not* to run commands on.
             * @default `".*"`
             */
            'notMatch': string;
        }[];
        /**
         * Automatically clear the console on each save before running commands.
         * @default `false`
         */
        'autoClearConsole': boolean;
        /**
         *
         * @default `{ "cmd": "echo ${file}", "match": ".*" }`
         */
        'innerObject': {
            /**
         * Command to execute on save.
         * @default `"echo ${file}"`
         */
            'cmd': string;
            /**
             * R
             * @default `".*"`
             */
            'match': string;
        };
    };
}
/**
 * Section Type of `project-kit.emeraldwalk`
 */
export interface Emeraldwalk {
    "runonsave": {
        /**
       * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
       * @default `undefined`
       */
        'shell'?: string;
        /**
         *
         * @default `[]`
         */
        'commands': {
            /**
       * Command to execute on save.
       * @default `"echo ${file}"`
       */
            'cmd': string;
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
             * Run command asynchronously.
             * @default `false`
             */
            'isAsync': boolean;
            /**
             * Regex for matching files *not* to run commands on.
             * @default `".*"`
             */
            'notMatch': string;
        }[];
        /**
         * Automatically clear the console on each save before running commands.
         * @default `false`
         */
        'autoClearConsole': boolean;
        /**
         *
         * @default `{ "cmd": "echo ${file}", "match": ".*" }`
         */
        'innerObject': {
            /**
         * Command to execute on save.
         * @default `"echo ${file}"`
         */
            'cmd': string;
            /**
             * R
             * @default `".*"`
             */
            'match': string;
        };
    };
}
const sampleDefaults = {
    /**
     * Config defaults of `sample`
     */
    "sample": {
        /**
         * Current time
         */
        "date": "now",
        /**
         * Use icon graph to replace the icon name.
         */
        "inplace": true,
        /**
         * Enabled sample inline annotations
         */
        "annotations": true,
        /**
         * Position the icon before or after the icon name
         */
        "position": "before",
        /**
         * Icon color hex for inline displaying
         */
        "color": "auto",
        /**
         * Delimiters for separating between collection id and icon id
         */
        "delimiters": [":", "--", "-", "/"],
        /**
         * Prefixes for matching
         */
        "prefixes": ["", "i-", "~icons/"],
        /**
         * Suffixes for matching
         */
        "suffixes": ["", "i-"],
        /**
         * Array of language IDs to enable annotations
         */
        "languageIds": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue", "svelte", "html", "pug", "json", "yaml"],
        /**
         * Collection IDs to be included for detection
         */
        "includes": null,
        /**
         * Collection IDs to be excluded for detection
         */
        "excludes": null,
        /**
         * CDN entry of sample icon-sets
         */
        "cdnEntry": "https://icones.js.org/collections",
        /**
         * JSON paths for custom collection
         */
        "customCollectionJsonPaths": [],
        /**
         * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
         */
        "customCollectionIdsMap": {},
        /**
         * JSON paths for custom aliases
         */
        "customAliasesJsonPaths": [],
        /**
         * Only use the icon aliases. Non aliased icons will be ignored.
         */
        "customAliasesOnly": false,
    } satisfies Sample as Sample,
    /**
     * Config defaults of `project-kit`
     */
    "project-kit": {
        "emeraldwalk.runonsave": { "shell": undefined, "commands": [], "autoClearConsole": false, "innerObject": { "cmd": "echo ${file}", "match": ".*" } },
    } satisfies ProjectKit as ProjectKit,
    /**
     * Config defaults of `project-kit.emeraldwalk`
     */
    "project-kit.emeraldwalk": {
        "runonsave": { "shell": undefined, "commands": [], "autoClearConsole": false, "innerObject": { "cmd": "echo ${file}", "match": ".*" } },
    } satisfies Emeraldwalk as Emeraldwalk,
};
export type ConfigSecionKey = keyof typeof sampleDefaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
    sample: "sample",
    projectKit: "project-kit",
    emeraldwalk: "project-kit.emeraldwalk",
} satisfies Record<string, ConfigSecionKey>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfig = memo(<K extends ConfigSecionKey>(section: K) => defineConfigs<typeof sampleDefaults[K]>(section, sampleDefaults[section]));
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfigObject = memo(<K extends ConfigSecionKey>(section: K) => defineConfigObject<typeof sampleDefaults[K]>(section, sampleDefaults[section]));
/**
 * ConfigObject of `sample`
 * @example
 * const sample = useConfigObjectSample()
 * const oldVal:string = sample.date //get value
 * sample.$update("date", oldVal) //update value
 */
export const useConfigObjectSample = () => useConfigObject(configs.sample);
/**
 * ToConfigRefs of `sample`
 * @example
 * const sample = useConfigSample()
 * const oldVal:string = sample.date.value //get value
 * sample.date.update(oldVal) //update value
 */
export const useConfigSample = () => useConfig(configs.sample);
/**
 * ConfigObject of `project-kit`
 * @example
 * const projectKit = useConfigObjectProjectKit()
 * const oldVal:object = projectKit.emeraldwalk.runonsave //get value
 * projectKit.$update("emeraldwalk.runonsave", oldVal) //update value
 */
export const useConfigObjectProjectKit = () => useConfigObject(configs.projectKit);
/**
 * ToConfigRefs of `project-kit`
 * @example
 * const projectKit = useConfigProjectKit()
 * const oldVal:object = projectKit.emeraldwalk.runonsave.value //get value
 * projectKit.emeraldwalk.runonsave.update(oldVal) //update value
 */
export const useConfigProjectKit = () => useConfig(configs.projectKit);
/**
 * ConfigObject of `project-kit.emeraldwalk`
 * @example
 * const emeraldwalk = useConfigObjectEmeraldwalk()
 * const oldVal:object = emeraldwalk.runonsave //get value
 * emeraldwalk.$update("runonsave", oldVal) //update value
 */
export const useConfigObjectEmeraldwalk = () => useConfigObject(configs.emeraldwalk);
/**
 * ToConfigRefs of `project-kit.emeraldwalk`
 * @example
 * const emeraldwalk = useConfigEmeraldwalk()
 * const oldVal:object = emeraldwalk.runonsave.value //get value
 * emeraldwalk.runonsave.update(oldVal) //update value
 */
export const useConfigEmeraldwalk = () => useConfig(configs.emeraldwalk);
export type projectKitEmeraldwalkRunonsave = "shell" | "commands" | "autoClearConsole" | "innerObject.cmd" | "innerObject.match";
