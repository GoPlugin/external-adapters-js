import { Adapter } from '@plugin/external-adapter-framework/adapter'
import { accountsRestEndpoint } from './endpoint/accounts'
import { config } from './config'
import { expose } from '@plugin/external-adapter-framework'

export const adapter = new Adapter({
  name: 'BANK_FRICK',
  defaultEndpoint: 'accounts',
  endpoints: [accountsRestEndpoint],
  config,
})

export const server = () => expose(adapter)
