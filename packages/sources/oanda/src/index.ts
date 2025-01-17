import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import includes from './config/includes.json'
import { priceEndpoint } from './endpoint'

export const adapter = new PriceAdapter({
  name: 'OANDA',
  defaultEndpoint: 'price',
  config,
  endpoints: [priceEndpoint],
  includes,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
