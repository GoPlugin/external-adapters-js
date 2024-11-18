import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'
import { config } from './config'
import { balanceEndpoint } from './endpoint/balance'

export const adapter = new PoRAdapter({
  name: 'POLKADOT_BALANCE',
  endpoints: [balanceEndpoint],
  defaultEndpoint: balanceEndpoint.name,
  config,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
