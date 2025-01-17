import { Requester, util } from '@plugin/ea-bootstrap'
import type { Config } from '@plugin/ea-bootstrap'

export const NAME = 'SWELL_ADDRESS_LIST'

export const DEFAULT_ENDPOINT = 'address'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.defaultEndpoint = DEFAULT_ENDPOINT
  config.rpcUrl = util.getRequiredEnv('RPC_URL')
  return config
}
