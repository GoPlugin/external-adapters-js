import { AdapterConfigError, DefaultConfig, Requester, util } from '@plugin/ea-bootstrap'
import { Config } from '@plugin/ea-bootstrap'
import * as paypal from '@paypal/payouts-sdk'

export const NAME = 'PAYPAL'

export const DEFAULT_ENDPOINT = 'sendpayout'
export const DEFAULT_MODE = 'sandbox'

export const makeConfig = (prefix = ''): Config => {
  // environment variable checks
  const clientId: string = util.getRequiredEnv('CLIENT_ID', prefix)
  const clientSecret: string = util.getRequiredEnv('CLIENT_SECRET', prefix)
  const mode: string = util.getEnv('MODE', prefix) || DEFAULT_MODE

  let environment
  switch (mode.toLowerCase()) {
    case 'sandbox':
      environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
      break
    case 'live':
      environment = new paypal.core.LiveEnvironment(clientId, clientSecret)
      break
    default: {
      throw new AdapterConfigError({
        jobRunID: undefined,
        message: `${mode} mode is not supported.`,
        statusCode: 400,
      })
    }
  }
  const client = new paypal.core.PayPalHttpClient(environment)
  const config: DefaultConfig = Requester.getDefaultConfig(prefix)
  config.api = { ...config.api, client } as any
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
