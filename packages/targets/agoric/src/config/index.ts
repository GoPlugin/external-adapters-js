import { Requester, util } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'

export const DEFAULT_API_ENDPOINT = 'http://localhost:8000/api/oracle'
export const NAME = 'AGORIC'

// This environment variable is needed for the Hack the Orb oracle
// instructions to remain correct.
const LEGACY_API_ENDPOINT_ENV = 'AG_SOLO_ORACLE_URL'

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL =
    config.api.baseURL || util.getEnv(LEGACY_API_ENDPOINT_ENV) || DEFAULT_API_ENDPOINT
  config.apiKey = config.apiKey || 'not required'
  return config
}
