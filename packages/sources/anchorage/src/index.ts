import { expose, ServerInstance } from '@plugin/external-adapter-framework'
import { config } from './config'
import { wallet } from './endpoint'
import { PoRAdapter } from '@plugin/external-adapter-framework/adapter/por'

export const adapter = new PoRAdapter({
  defaultEndpoint: wallet.name,
  name: 'ANCHORAGE',
  config,
  endpoints: [wallet],
})

export const server = (): Promise<ServerInstance | undefined> => expose(adapter)
export const walletParameters = wallet.inputParameters
