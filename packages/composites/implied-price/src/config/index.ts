import { Requester } from '@plugin/ea-bootstrap'
import type { Config } from '@plugin/ea-bootstrap'

export const NAME = 'IMPLIED_PRICE'
export const DEFAULT_ENDPOINT = 'impliedPrice'

export const makeConfig = (prefix?: string): Config => {
  return {
    ...Requester.getDefaultConfig(prefix),
    defaultEndpoint: DEFAULT_ENDPOINT,
  }
}
