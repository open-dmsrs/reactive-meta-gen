// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs } from 'reactive-vscode'

export const publisher = "calmripple"
export const name = "sample"
export const version = "0.8.1"
export const displayName = "sample IntelliSense"
export const description = "Intelligent sample previewing and searching for VS Code"
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "sample.toggle-annotations"
  | "sample.toggle-inplace"
  | "sample.clear-cache"

/**
 * Commands map registed by `calmripple.sample`
 */
export const commands = {
  /**
   * Toggle Annotations
   * @value `sample.toggle-annotations`
   * @example
   * useCommand(commands.toggleAnnotations, async () => {
   *   //do actions or update config 
   * })
   */
  toggleAnnotations: "sample.toggle-annotations",
  /**
   * Toggle In-place Mode
   * @value `sample.toggle-inplace`
   * @example
   * useCommand(commands.toggleInplace, async () => {
   *   //do actions or update config 
   * })
   */
  toggleInplace: "sample.toggle-inplace",
  /**
   * Clear icon cache
   * @value `sample.clear-cache`
   * @example
   * useCommand(commands.clearCache, async () => {
   *   //do actions or update config 
   * })
   */
  clearCache: "sample.clear-cache",
} satisfies Record<string, CommandKey>

/**
 * Config keys of `configuration of sample`
 */
export interface Sample {
  /**
   * Use icon graph to replace the icon name.
   * @key `sample.inplace`
   * @default `true`
   * @type `boolean`
   */
  "inplace": boolean,
  /**
   * Enabled sample inline annotations
   * @key `sample.annotations`
   * @default `true`
   * @type `boolean`
   */
  "annotations": boolean,
  /**
   * Position the icon before or after the icon name
   * @key `sample.position`
   * @default `"before"`
   * @type `string`
   */
  "position": ("before" | "after"),
  /**
   * Icon color hex for inline displaying
   * @key `sample.color`
   * @default `"auto"`
   * @type `string`
   */
  "color": string,
  /**
   * Delimiters for separating between collection id and icon id
   * @key `sample.delimiters`
   * @default `[":","--","-","/"]`
   * @type `array`
   */
  "delimiters": string[],
  /**
   * Prefixes for matching
   * @key `sample.prefixes`
   * @default `["","i-","~icons/"]`
   * @type `array`
   */
  "prefixes": string[],
  /**
   * Suffixes for matching
   * @key `sample.suffixes`
   * @default `["","i-"]`
   * @type `array`
   */
  "suffixes": string[],
  /**
   * Array of language IDs to enable annotations
   * @key `sample.languageIds`
   * @default `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"]`
   * @type `array`
   */
  "languageIds": string[],
  /**
   * Collection IDs to be included for detection
   * @key `sample.includes`
   * @default `null`
   * @type `array`
   */
  "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  /**
   * Collection IDs to be excluded for detection
   * @key `sample.excludes`
   * @default `null`
   * @type `array`
   */
  "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  /**
   * CDN entry of sample icon-sets
   * @key `sample.cdnEntry`
   * @default `"https://icones.js.org/collections"`
   * @type `string`
   */
  "cdnEntry": string,
  /**
   * JSON paths for custom collection
   * @key `sample.customCollectionJsonPaths`
   * @default `[]`
   * @type `array`
   */
  "customCollectionJsonPaths": string[],
  /**
   * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
   * @key `sample.customCollectionIdsMap`
   * @default `{}`
   * @type `object`
   */
  "customCollectionIdsMap": Record<string, unknown>,
  /**
   * JSON paths for custom aliases
   * @key `sample.customAliasesJsonPaths`
   * @default `[]`
   * @type `array`
   */
  "customAliasesJsonPaths": string[],
  /**
   * Only use the icon aliases. Non aliased icons will be ignored.
   * @key `sample.customAliasesOnly`
   * @default `false`
   * @type `boolean`
   */
  "customAliasesOnly": boolean,
}

/**
 * Scoped defaults of `configuration of sample`
 */
const _sample = {
/**
 * scope: `configuration of sample`
 */
  scope: "sample",
/**
 * Keys' defaults of `configuration of sample`
 */
  defaults: {
    "inplace": true,
    "annotations": true,
    "position": "before",
    "color": "auto",
    "delimiters": [":","--","-","/"],
    "prefixes": ["","i-","~icons/"],
    "suffixes": ["","i-"],
    "languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"],
    "includes": null,
    "excludes": null,
    "cdnEntry": "https://icones.js.org/collections",
    "customCollectionJsonPaths": [],
    "customCollectionIdsMap": {},
    "customAliasesJsonPaths": [],
    "customAliasesOnly": false,
  } satisfies Sample,
}

/**
 * Reactive ConfigObject of `configuration of sample`
 * @example
 * let configValue = sampleConfigObject.inplace //get value 
 * sampleConfigObject.inplace = true // set value
 * sampleConfigObject.$update("inplace", !configValue, ConfigurationTarget.Workspace, true)
 */
export const sampleConfigObject = defineConfigObject<Sample>(
  _sample.scope,
  _sample.defaults
)
/**
 * Reactive ToConfigRefs of `configuration of sample`
 * @example
 * let configValue:boolean =sampleConfigs.inplace.value //get value 
 * sampleConfigs.inplace.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * sampleConfigs.inplace.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const sampleConfigs = defineConfigs<Sample>(
  _sample.scope,
  _sample.defaults
)
