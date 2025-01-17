import { Requester } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'GRAPHQL'

export const DEFAULT_ENDPOINT = 'graphql'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.method = 'post'
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
