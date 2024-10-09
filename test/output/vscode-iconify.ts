/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, } from 'reactive-vscode';
export const publisher = "antfu";
export const name = "iconify";
export const version = "0.9.3";
export const displayName = "Iconify IntelliSense";
export const description = "Intelligent Iconify previewing and searching for VS Code";
export const extensionId = "antfu.iconify";
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
export type CommandKey = "iconify.toggle-annotations" | "iconify.toggle-inplace" | "iconify.clear-cache";
/**
 * Commands map registed by `antfu.iconify`
 */
export const commands = {
    /**
     * Toggle Annotations
     * @commandkey `iconify.toggle-annotations`
     */
    toggleAnnotations: "iconify.toggle-annotations",
    /**
     * Toggle In-place Mode
     * @commandkey `iconify.toggle-inplace`
     */
    toggleInplace: "iconify.toggle-inplace",
    /**
     * Clear icon cache
     * @commandkey `iconify.clear-cache`
     */
    clearCache: "iconify.clear-cache",
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
 * @commandkey Register a command `iconify.toggle-annotations`
 */
export const useCommandToggleAnnotations = (callback: (...args: any[]) => any) => useCommand(commands.toggleAnnotations, callback);
/**
 * Toggle In-place Mode
 * @commandkey Register a command `iconify.toggle-inplace`
 */
export const useCommandToggleInplace = (callback: (...args: any[]) => any) => useCommand(commands.toggleInplace, callback);
/**
 * Clear icon cache
 * @commandkey Register a command `iconify.clear-cache`
 */
export const useCommandClearCache = (callback: (...args: any[]) => any) => useCommand(commands.clearCache, callback);
/**
 * Section Type of `iconify`
 */
export interface Iconify {
    /**
     * Use icon graph to replace the icon name.
     */
    "inplace": boolean;
    /**
     * Enabled Iconify inline annotations
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
    "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "catppuccin" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "hugeicons" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "rivet-icons" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "weui" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null);
    /**
     * Collection IDs to be excluded for detection
     */
    "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "catppuccin" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "hugeicons" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "rivet-icons" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "weui" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null);
    /**
     * CDN entry of iconify icon-sets
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
const iconifyDefaults = {
    /**
     * Config defaults of `iconify`
     */
    "iconify": {
        /**
         * Use icon graph to replace the icon name.
         */
        "inplace": true,
        /**
         * Enabled Iconify inline annotations
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
        "languageIds": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue", "svelte", "html", "pug", "json", "yaml", "markdown", "mdx"],
        /**
         * Collection IDs to be included for detection
         */
        "includes": null,
        /**
         * Collection IDs to be excluded for detection
         */
        "excludes": null,
        /**
         * CDN entry of iconify icon-sets
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
    } satisfies Iconify as Iconify,
};
export type ConfigSecionKey = keyof typeof iconifyDefaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
    iconify: "iconify",
} satisfies Record<string, ConfigSecionKey>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfig = memo(<K extends ConfigSecionKey>(section: K) => defineConfigs<typeof iconifyDefaults[K]>(section, iconifyDefaults[section]));
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfigObject = memo(<K extends ConfigSecionKey>(section: K) => defineConfigObject<typeof iconifyDefaults[K]>(section, iconifyDefaults[section]));
/**
 * ConfigObject of `iconify`
 * @example
 * const iconify = useConfigObjectIconify()
 * const oldVal:boolean = iconify.inplace //get value
 * iconify.$update("inplace", oldVal) //update value
 */
export const useConfigObjectIconify = () => useConfigObject(configs.iconify);
/**
 * ToConfigRefs of `iconify`
 * @example
 * const iconify = useConfigIconify()
 * const oldVal:boolean = iconify.inplace.value //get value
 * iconify.inplace.update(oldVal) //update value
 */
export const useConfigIconify = () => useConfig(configs.iconify);
