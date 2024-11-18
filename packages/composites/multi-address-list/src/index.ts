import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { config } from './config'
import { address } from './endpoint'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'

export const adapter = new PoRAdapter({
  defaultEndpoint: address.name,
  name: 'MULTI_ADDRESS_LIST',
  config,
  endpoints: [address],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
