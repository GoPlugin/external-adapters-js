import { AdapterConfigError, util } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export enum DNSProviders {
  Cloudflare = 'cloudflare',
  Google = 'google',
}

export const endpoints: Record<string, string> = {
  [DNSProviders.Cloudflare]: 'https://cloudflare-dns.com/dns-query',
  [DNSProviders.Google]: 'https://dns.google/resolve',
}

export const DEFAULT_ENDPOINT = 'dnsQuery'
export const NAME = 'DNS_QUERY'

export const makeConfig = (): Config => {
  const customEndpoint = util.getEnv('CUSTOM_ENDPOINT')
  if (customEndpoint) {
    return { api: { url: customEndpoint } }
  }
  const provider = util.getRequiredEnv('DNS_PROVIDER') as DNSProviders
  if (!Object.values(DNSProviders).includes(provider))
    throw new AdapterConfigError({ message: `Unknown DNS Provider: ${provider}` })

  const config: Config = {
    api: {
      url: endpoints[provider],
    },
    defaultEndpoint: DEFAULT_ENDPOINT,
  }
  return config
}
