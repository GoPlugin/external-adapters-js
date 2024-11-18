import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'
import { config } from './config'
import { addressEndpoint } from './endpoint/address'

export const adapter = new PoRAdapter({
  name: 'STADER_ADDRESS_LIST',
  endpoints: [addressEndpoint],
  defaultEndpoint: addressEndpoint.name,
  config,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
