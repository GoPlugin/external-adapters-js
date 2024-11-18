import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { allocations, tvl } from './endpoint'
import { config } from './config'

export const adapter = new Adapter({
  defaultEndpoint: tvl.name,
  name: 'APY_FINANCE_TEST',
  config,
  endpoints: [allocations, tvl],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
