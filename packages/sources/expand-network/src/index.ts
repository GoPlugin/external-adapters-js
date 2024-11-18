import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { price } from './endpoint'

export const adapter = new Adapter({
  defaultEndpoint: price.name,
  name: 'EXPAND_NETWORK',
  config,
  endpoints: [price],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
