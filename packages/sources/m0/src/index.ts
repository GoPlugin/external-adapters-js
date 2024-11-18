import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { nav } from './endpoint'

export const adapter = new Adapter({
  defaultEndpoint: nav.name,
  name: 'M0',
  config,
  endpoints: [nav],
  rateLimiting: {
    tiers: {
      default: {
        rateLimit1m: 1,
        note: 'Considered unlimited tier, but setting reasonable limit',
      },
    },
  },
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
