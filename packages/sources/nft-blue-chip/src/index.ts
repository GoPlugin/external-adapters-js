import { expose } from '@plugin/external-adapter-framework'
import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { marketcapEndpoint } from './endpoint'
import { config } from './config'

export const adapter = new Adapter({
  name: 'NFT_BLUE_CHIP',
  defaultEndpoint: marketcapEndpoint.name,
  endpoints: [marketcapEndpoint],
  config,
})

export const server = () => expose(adapter)
