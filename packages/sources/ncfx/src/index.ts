import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import includes from './config/includes.json'
import { crypto, forex, lwba, marketStatus } from './endpoint'

export const adapter = new PriceAdapter({
  name: 'NCFX',
  endpoints: [crypto, forex, lwba, marketStatus],
  defaultEndpoint: crypto.name,
  config,
  includes,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
