import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'DWOLLA'

export const DEFAULT_ENDPOINT = 'dwolla'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL = config.api.baseURL || 'http://localhost:18081'
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
