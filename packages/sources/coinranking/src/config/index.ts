import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'COINRANKING'

export const DEFAULT_ENDPOINT = 'crypto'
export const DEFAULT_API_ENDPOINT = 'https://api.coinranking.com/v2'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api = {
    ...config.api,
    baseURL: config.api.baseURL || DEFAULT_API_ENDPOINT,
  }
  config.defaultEndpoint = DEFAULT_ENDPOINT
  if (config.apiKey) {
    config.api.headers = { ...config.api.headers, 'x-access-token': config.apiKey }
  }

  return config
}
