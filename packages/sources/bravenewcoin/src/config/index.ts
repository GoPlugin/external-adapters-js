import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'BRAVENEWCOIN'

export const DEFAULT_ENDPOINT = 'crypto'

export const makeConfig = (prefix = ''): Config => {
  const config = Requester.getDefaultConfig(prefix, true)
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
