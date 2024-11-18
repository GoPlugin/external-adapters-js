import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'FLUENT_FINANCE'

export const DEFAULT_ENDPOINT = 'balances'
export const DEFAULT_BASE_URL = 'https://gateway.fluent.finance/v1/gateway/'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
