import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { functionEndpoint } from './endpoint'

export const adapter = new Adapter({
  defaultEndpoint: functionEndpoint.name,
  name: 'VIEW_FUNCTION_MULTI_CHAIN',
  config,
  endpoints: [functionEndpoint],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
