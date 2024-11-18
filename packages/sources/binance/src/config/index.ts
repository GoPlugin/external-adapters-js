import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'BINANCE'

export const DEFAULT_ENDPOINT = 'crypto'
export const DEFAULT_BASE_URL = 'https://api.binance.com'
export const DEFAULT_WS_API_ENDPOINT = 'wss://stream.binance.com:9443/ws'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
