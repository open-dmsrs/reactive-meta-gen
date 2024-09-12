import fs from 'node:fs/promises'
import { basename } from 'node:path'
import { describe, expect, it } from 'vitest'
import fg from 'fast-glob'
import { generate } from '../src'

describe('fixtures', async () => {
  const dirs = await fg([
    './fixtures/*',
  ], { onlyDirectories: true })

  for (const dir of dirs) {
    it(basename(dir), async () => {
      const json = JSON.parse(await fs.readFile(`${dir}/package.json`, 'utf-8'))

      let extensionSection: string | undefined

      try {
        if (dir.includes('vscode-iconify-fork'))
          return extensionSection = 'iconify'

        if (dir.includes('vscode-smart-clicks'))
          return extensionSection = 'smartClicks'
      }
      finally {
        const { dts, markdown } = generate(json, { extensionSection })
        // await fs.writeFile(`./test/output/${basename(dir)}.ts`, dts)
        await expect(dts).toMatchFileSnapshot(`./output/${basename(dir)}.ts`)

        const readmeLines = [
          `# ${basename(dir)}`,
          '',
          '## Commands',
          '',
          markdown.commandsTable,
          '',
          '## Configuration Json',
          '',
          markdown.configsJson,
          '',
          '## Configuration',
          '',
          markdown.configsTable,
        ]
        // await fs.writeFile(`./test/output/${basename(dir)}.README.md`, readmeLines.join('\n'))
        await expect(readmeLines.join('\n')).toMatchFileSnapshot(`./output/${basename(dir)}.README.md`)
      }
    })
  }
})
