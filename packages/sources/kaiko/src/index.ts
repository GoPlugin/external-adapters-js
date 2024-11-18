import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import includes from './config/includes.json'
import { trades, realizedVolatility } from './endpoint'

export const adapter = new PriceAdapter({
  defaultEndpoint: trades.name,
  name: 'KAIKO',
  endpoints: [trades, realizedVolatility],
  config,
  includes,
  rateLimiting: {
    tiers: {
      default: {
        rateLimit1s: 100,
        note: 'Considered unlimited tier, but setting reasonable limits',
      },
    },
  },
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
