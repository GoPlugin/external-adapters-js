import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'UNIBIT'

export const DEFAULT_ENDPOINT = 'historical'
export const DEFAULT_URL = 'https://api.unibit.ai/v2/stock/'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.api.baseURL = config.api.baseURL || DEFAULT_URL
  return config
}
