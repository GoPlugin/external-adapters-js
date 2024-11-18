import { Requester, util } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export interface ExtendedConfig extends Config {
  RPC_URL?: string
}

export const NAME = 'JSON_RPC'
export const DEFAULT_ENDPOINT = 'request'
export const DEFAULT_BASE_URL = 'http://localhost:8545'

export const makeConfig = (prefix?: string): ExtendedConfig => {
  const RPC_URL = util.getEnv('RPC_URL', prefix)
  return {
    ...Requester.getDefaultConfig(prefix),
    defaultEndpoint: DEFAULT_ENDPOINT,
    RPC_URL,
  }
}
