import {
  PriceEndpoint,
  priceEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import { transport } from '../transport/vwap'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'

const inputParameters = new InputParameters(priceEndpointInputParametersDefinition, [
  {
    base: 'AMPL',
    quote: 'USD',
  },
])

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const endpoint = new PriceEndpoint({
  name: 'vwap',
  aliases: ['crypto-vwap'],
  transport,
  inputParameters,
})
