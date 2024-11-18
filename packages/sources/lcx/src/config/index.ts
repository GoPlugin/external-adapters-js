import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'
import { util } from '@plugin/ea-bootstrap'

export const NAME = 'LCX'

export const DEFAULT_ENDPOINT = 'price'
export const DEFAULT_BASE_URL = 'https://rp.lcx.com/v1/rates/current'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  config.api.headers = {
    ...config.api.headers,
    'api-key': util.getRandomRequiredEnv('API_KEY') || '',
  }
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
