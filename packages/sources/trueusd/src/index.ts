import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'
import { trueusd } from './endpoint'
import { config } from './config'

export const adapter = new PoRAdapter({
  defaultEndpoint: trueusd.name,
  name: 'TRUEUSD',
  config,
  endpoints: [trueusd],
  rateLimiting: {
    tiers: {
      default: {
        rateLimit1m: 6,
      },
    },
  },
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
