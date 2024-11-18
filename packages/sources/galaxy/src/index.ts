import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { config } from './config'
import { price } from './endpoint'

export const adapter = new PriceAdapter({
  name: 'GALAXY',
  endpoints: [price],
  defaultEndpoint: price.name,
  config,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
