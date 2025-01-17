import {
  PriceEndpoint,
  priceEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { transport } from '../transport/price'

const inputParameters = new InputParameters(priceEndpointInputParametersDefinition, [
  {
    base: 'AAPL',
    quote: 'USD',
  },
])
export type RequestParams = typeof inputParameters.validated

export type BaseEndpointTypes = {
  // i.e. { base, quote }
  // base is the symbol to query, e.g. AAPL
  // quote is the currency to convert to, e.g. USD
  Parameters: typeof inputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new PriceEndpoint({
  name: 'price',
  aliases: ['stock'],
  inputParameters,
  transport,
})
