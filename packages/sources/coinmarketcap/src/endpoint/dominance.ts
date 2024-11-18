import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import overrides from '../config/overrides.json'
import { httpTransport } from '../transport/dominance'
import { globalInputParameters } from './utils'
export const endpoint = new AdapterEndpoint({
  name: 'dominance',
  transport: httpTransport,
  inputParameters: globalInputParameters,
  overrides: overrides.coinmarketcap,
})
