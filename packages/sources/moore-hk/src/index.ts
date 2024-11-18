import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'
import { config } from './config'
import { trueusd } from './endpoint'

export const adapter = new PoRAdapter({
  defaultEndpoint: trueusd.name,
  name: 'MOORE-HK',
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
