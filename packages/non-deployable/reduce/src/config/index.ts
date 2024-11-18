import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'REDUCE'

export const DEFAULT_ENDPOINT = 'reduce'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
