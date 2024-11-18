import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { crypto } from './endpoint'

export const adapter = new Adapter({
  defaultEndpoint: crypto.name,
  name: 'TRUMATIC-MATIC-EXCHANGE-RATE',
  config,
  endpoints: [crypto],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
