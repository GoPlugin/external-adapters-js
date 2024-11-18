import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { state } from './endpoint'

export const adapter = new Adapter({
  defaultEndpoint: state.name,
  name: 'KAIKO_STATE',
  config,
  endpoints: [state],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
