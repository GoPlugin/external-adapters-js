import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { cryptoEndpoint, cryptoLwbaEndpoint } from './endpoint'
import { config } from './config'

export const adapter = new PriceAdapter({
  name: 'ELWOOD',
  defaultEndpoint: cryptoEndpoint.name,
  config,
  endpoints: [cryptoEndpoint, cryptoLwbaEndpoint],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
