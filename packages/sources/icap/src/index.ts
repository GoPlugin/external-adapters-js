import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { priceEndpoint } from './endpoint'
import { config } from './config'
import includes from './config/includes.json'

export const adapter = new PriceAdapter({
  name: 'ICAP',
  defaultEndpoint: 'price',
  config: config,
  endpoints: [priceEndpoint],
  includes: includes,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
