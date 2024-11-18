import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'EODHISTORICALDATA'

export const DEFAULT_ENDPOINT = 'stock'
export const DEFAULT_API_ENDPOINT = 'https://eodhistoricaldata.com'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api = {
    ...config.api,
    baseURL: config.api.baseURL || DEFAULT_API_ENDPOINT,
    params: { api_token: config.apiKey },
  }
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
