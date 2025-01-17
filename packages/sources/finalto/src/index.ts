import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { forex } from './endpoint'
import includes from './config/includes.json'

export const adapter = new PriceAdapter({
  defaultEndpoint: forex.name,
  name: 'FINALTO',
  config,
  endpoints: [forex],
  includes,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
