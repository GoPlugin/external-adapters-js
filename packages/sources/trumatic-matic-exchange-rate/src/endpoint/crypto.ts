import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { exchangeRateTransport } from '../transport/crypto'

export const inputParameters = new InputParameters({})

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  name: 'crypto',
  aliases: [],
  transport: exchangeRateTransport,
  inputParameters,
  overrides: overrides['trumatic-matic-exchange-rate'],
})
