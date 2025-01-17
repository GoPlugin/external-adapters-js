import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'BITEX'

export const DEFAULT_ENDPOINT = 'crypto'
export const DEFAULT_BASE_URL = 'https://bitex.la/api'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  if (config.apiKey) config.api.headers = { ...config.api.headers, authorization: config.apiKey }
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
