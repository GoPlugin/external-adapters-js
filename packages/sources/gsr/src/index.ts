import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { config } from './config'
import { price } from './endpoint'
import { GSRPriceAdapter } from './adapter'

export const adapter = new GSRPriceAdapter({
  defaultEndpoint: price.name,
  name: 'GSR',
  endpoints: [price],
  config,
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
