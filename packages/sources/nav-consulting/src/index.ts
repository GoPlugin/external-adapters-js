import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { reserve } from './endpoint'

export const adapter = new Adapter({
  defaultEndpoint: reserve.name,
  name: 'NAV_CONSULTING',
  config,
  endpoints: [reserve],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
