import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'COINCODEX'
export const DEFAULT_ENDPOINT = 'getcoin'
export const DEFAULT_BASE_URL = 'https://coincodex.com/api/coincodex/'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
