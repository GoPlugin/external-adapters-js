import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'
import { config } from './config'
import { reserves } from './endpoint'

export const adapter = new PoRAdapter({
  defaultEndpoint: reserves.name,
  name: 'GEMINI',
  config,
  rateLimiting: {
    tiers: {
      default: {
        rateLimit1m: 6,
        note: 'Considered unlimited tier, but setting reasonable limits',
      },
    },
  },
  endpoints: [reserves],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
