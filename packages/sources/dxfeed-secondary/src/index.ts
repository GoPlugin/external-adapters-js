import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { price } from './endpoint'
import dxfeed from '@plugin/dxfeed-adapter'

export const adapter = new Adapter({
  defaultEndpoint: price.name,
  name: 'DXFEED_SECONDARY',
  config: dxfeed.config,
  endpoints: [price],
  rateLimiting: {
    tiers: {
      unlimited: {
        rateLimit1s: 100,
        note: 'Dxfeed does not describe a rate limit, but setting reasonable limits',
      },
    },
  },
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
