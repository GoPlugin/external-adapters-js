import * as DNS from '@plugin/dns-query-adapter'
import { Config } from '@plugin/ea-bootstrap'

export const NAME = 'DNS_RECORD_CHECK'
export const DEFAULT_ENDPOINT = 'dnsQuery'

export const makeConfig = (): Config => {
  return {
    ...DNS.makeConfig(),
    defaultEndpoint: DEFAULT_ENDPOINT,
  }
}
