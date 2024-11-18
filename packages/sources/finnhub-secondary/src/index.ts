import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { quote } from './endpoint'
import { config, rateLimiting } from '@plugin/finnhub-adapter'
import includes from './config/includes.json'

export const adapter = new PriceAdapter({
  defaultEndpoint: quote.name,
  name: 'FINNHUB-SECONDARY',
  config,
  endpoints: [quote],
  rateLimiting,
  includes,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
