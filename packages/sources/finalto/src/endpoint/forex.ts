import {
  ForexPriceEndpoint,
  priceEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import { wsTransport } from '../transport/forex'

export const inputParameters = new InputParameters(
  {
    ...priceEndpointInputParametersDefinition,
  },
  [
    {
      base: 'GBP',
      quote: 'USD',
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new ForexPriceEndpoint({
  name: 'forex',
  aliases: ['fx', 'commodities'],
  transport: wsTransport,
  inputParameters,
})
