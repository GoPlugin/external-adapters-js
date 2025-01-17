import * as fs from 'fs'
import { join, resolve } from 'path'
import * as yaml from 'yaml'
import { flattenAllSchemas, FlattenedSchema } from '../schema-flatten/lib'
import { getWorkspaceAdapters, WorkspacePackages } from '../workspace'

export async function writeFile(): Promise<void> {
  const path = process.env.GITHUB_WORKSPACE || ''

  const filePath = join(path, 'docker-compose.generated.yaml')
  fs.writeFileSync(filePath, await generateFile())

  console.log(`Docker compose file written to: ${resolve(filePath)}`)
}

export interface ComposeFileOptions {
  context: string
}

export async function generateFile(): Promise<string> {
  const branch = process.env.BRANCH || ''
  const prefix = process.env.IMAGE_PREFIX || ''
  const useLatest = !!process.env.LATEST
  const tag = process.env.IMAGE_TAG || ''

  const context = process.env.CONTEXT || '.'

  const composeFileOptions = { context }
  return yaml.stringify(
    await generateFileJSON({ prefix, branch, useLatest, tag }, composeFileOptions),
    {
      merge: true,
    },
  )
}

export async function generateFileJSON(
  imageNameConfig: ImageNameConfig,
  composeFileOptions: ComposeFileOptions,
): Promise<DockerComposeFile> {
  return makeDockerComposeFile(getWorkspaceAdapters(), imageNameConfig, composeFileOptions)
}

interface Service {
  image: string
  build: {
    context: string
    dockerfile: string
    args: Record<string, string>
    labels: Record<string, string>
  }
  ports: string[]
  environment: string[]
}

interface DockerComposeFile {
  version: string
  services: Record<string, Service>
}

export interface ImageNameConfig {
  branch: string
  prefix: string
  useLatest: boolean
  tag?: string
}

export enum DockerLabels {
  EA_TYPE = 'com.pluginlabs.external-adapter-type',
}

async function makeDockerComposeFile(
  packages: WorkspacePackages,
  imageNameConfig: ImageNameConfig,
  composeFileOptions: ComposeFileOptions,
): Promise<DockerComposeFile> {
  const flattenedSchemas = await flattenAllSchemas()
  const flattenedSchemasByLocation = flattenedSchemas.reduce<Record<string, FlattenedSchema>>(
    (prev, next) => {
      prev[next.location] = next
      return prev
    },
    {},
  )

  return {
    version: '3.3',
    services: packages.reduce<Record<string, Service>>((prev, next, i) => {
      prev[next.descopedName] = {
        image: generateImageName(next.descopedName, next.version, imageNameConfig),
        ports: [`${8080 + i}:8080`],
        build: {
          context: composeFileOptions.context, // Handle dynamic context
          dockerfile: './Dockerfile',
          args: {
            location: next.location,
            package: next.name,
          },
          labels: {
            [DockerLabels.EA_TYPE]: next.type,
          },
        },
        environment: Object.entries(flattenedSchemasByLocation[next.location]?.schema ?? {}).map(
          ([k, v]: [any, any]) => {
            return `${v.originalKey}=$\{${k}}`
          },
        ),
      }

      return prev
    }, {}),
  }
}

export function generateImageName(
  descopedName: string,
  version: string,
  { prefix, branch, useLatest, tag }: ImageNameConfig,
): string {
  let imageTag = tag
  if (!tag) {
    imageTag = [branch, useLatest ? 'latest' : version].filter(Boolean).join('-')
  }

  return `${prefix}${descopedName}:${imageTag}`
}
