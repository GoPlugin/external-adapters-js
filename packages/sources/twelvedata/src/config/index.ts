import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'TWELVEDATA'

export const DEFAULT_ENDPOINT = 'closing'
export const DEFAULT_URL = 'https://api.twelvedata.com/'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api.baseURL = config.api.baseURL || DEFAULT_URL
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
