import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'LINKPOOL'

export const DEFAULT_ENDPOINT = 'futures'
export const DEFAULT_BASE_URL = 'https://api.ice.linkpool.io/v1'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
