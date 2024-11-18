import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { marketStatus } from './endpoint'

export const adapter = new Adapter({
  name: 'TRADINGHOURS',
  endpoints: [marketStatus],
  defaultEndpoint: marketStatus.name,
  config,
  rateLimiting: {
    tiers: {
      default: {
        rateLimit1s: 1,
      },
    },
  },
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
