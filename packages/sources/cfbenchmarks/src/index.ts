import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { birc, crypto, cryptolwba } from './endpoint'

export const adapter = new PriceAdapter({
  name: 'CFBENCHMARKS',
  endpoints: [crypto, birc, cryptolwba],
  defaultEndpoint: crypto.name,
  config,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
