import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'
import { config } from './config'
import { balanceEndpoint } from './endpoint/balance'
import { totalSupplyEndpoint } from './endpoint/totalSupply'

export const adapter = new PoRAdapter({
  name: 'STADER_BALANCE',
  endpoints: [balanceEndpoint, totalSupplyEndpoint],
  defaultEndpoint: balanceEndpoint.name,
  config,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
