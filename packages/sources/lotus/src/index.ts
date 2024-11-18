import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { config } from './config'
import { balance } from './endpoint'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'

export const adapter = new PoRAdapter({
  defaultEndpoint: balance.name,
  name: 'LOTUS',
  config,
  endpoints: [balance],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
