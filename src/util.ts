import { assign, isArray, memo, camel } from 'radash'

export function isProperty(propterty: any): propterty is ConfigurationProperty {
  const typeName = typeof propterty?.type
  const ret = (typeName === 'string' || typeName === 'object')
  return ret
}

export const convertCamelCase = memo((input: string) => {
  if (input.match(/^[a-z0-9$]*$/i) && !input.match(/^\d/)) // Valid JS identifier, keep as-is
    return input
  return camel(input)
})

export const upperFirst = memo(<S extends string>(str: S): Capitalize<S> => {
  return (str ? str[0].toUpperCase() + str.slice(1) : '') as Capitalize<S>
})

export const getConfigObject = memo((packageJson: any): Record<string, ConfigurationProperty> => {
  const conf = packageJson.contributes?.configuration
  return (isArray(conf)
    ? conf.reduce((acc, cur) => assign(acc, cur), {}).properties
    : packageJson.contributes?.configuration?.properties
  ) || {}
})

export function addOrUpdate<T>(target: Map<string, T[]>, section: string, value: T): Map<string, T[]> {
  const properties = target.get(section)
  if (properties) {
    properties.push(value)
  }
  else {
    target.set(section, [value])
  }
  return target
}

export const getConfigInfo = memo(
  (packageJson: any) => {
    const deprecatedConfigs = new Map<string, ConfigurationProperty>()
    const deprecatedKeys = new Array<string>()
    const activedConfigs = new Map<string, ConfigurationProperty>()
    const activedKeys = new Array<string>()

    const sectionActivedConfigs = Object.entries(getConfigObject(packageJson)).reduce((acc, [fullKey, value]) => {
      if (isProperty(value)) {
        activedConfigs.set(fullKey, value)
        activedKeys.push(fullKey)
        const parts = fullKey.split('.')
        if (parts.length > 1) {
          const sectionParts = parts.slice(0, -1)
          for (let i = 0; i < sectionParts.length; i++) {
            const section = (sectionParts.slice(0, i + 1).join('.'))
            addOrUpdate(acc, section, [fullKey, value])
          }
        }
        else {
          const section = ('')
          addOrUpdate(acc, section, [fullKey, value])
        }
      }
      else {
        deprecatedConfigs.set(fullKey, value)
        deprecatedKeys.push(fullKey)
      }
      return acc
    }, new Map<string, [string, ConfigurationProperty][]>())
    return {
      deprecatedConfigs,
      deprecatedKeys,
      activedConfigs,
      activedKeys,
      sectionActivedConfigs,
    }
  },
)

export function randomString(length: number): string {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let text = ''
  for (let i = 0; i < length; i++) {
    text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
  }
  return text
}