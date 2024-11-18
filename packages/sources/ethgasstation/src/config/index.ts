import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'ETHGASSTATION'

export const DEFAULT_ENDPOINT = 'gasprice'
export const DEFAULT_BASE_URL = 'https://ethgasstation.info/'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api = {
    ...config.api,
    baseURL: config.api.baseURL || DEFAULT_BASE_URL,
    params: {
      'api-key': config.apiKey,
    },
  }
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
