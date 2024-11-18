export const mockReaddirSyncResponse = [
  'README.md',
  'brave-jokes-melt.md',
  'bright-peaches-matter.md',
  'config.json',
  'fast-zoos-itch.md',
  'nervous-jars-pretend.md',
]

interface mockFileContentsMap {
  [key: string]: string
}

export const mockFileContentsMap: mockFileContentsMap = {
  '.changeset/brave-jokes-melt.md': `---
                                        '@plugin/anchor-adapter': major
                                        ---

                                        Changeset description for: 'brave-jokes-melt.md'
                                        `,
  '.changeset/bright-peaches-matter.md': `---
                                            '@plugin/anchor-adapter': patch
                                            ---

                                            Changeset description for: 'bright-peaches-matter.md'
                                            `,
  '.changeset/fast-zoos-itch.md': `---
                                    '@plugin/anchor-adapter': minor
                                    '@plugin/defi-pulse-adapter': minor
                                    ---

                                    Changeset description for: 'fast-zoos-itch.md'
                                    `,
  '.changeset/nervous-jars-pretend.md': `---
                                            '@plugin/savax-price-adapter': minor
                                            ---

                                            Changeset description for: 'nervous-jars-pretend.md'
                                            `,
}
