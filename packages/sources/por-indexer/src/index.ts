import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'
import { config } from './config'
import { balance } from './endpoint'

export const adapter = new PoRAdapter({
  defaultEndpoint: balance.name,
  name: 'POR_INDEXER',
  config,
  endpoints: [balance],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
