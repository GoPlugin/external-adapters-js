import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { cryptolwba, price, vwap } from './endpoint'

export const adapter = new PriceAdapter({
  name: 'BLOCKSIZE_CAPITAL',
  endpoints: [price, cryptolwba, vwap],
  defaultEndpoint: price.name,
  config,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
