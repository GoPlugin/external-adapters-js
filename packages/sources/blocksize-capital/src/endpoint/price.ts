import {
  CryptoPriceEndpoint,
  priceEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import { transport } from '../transport/price'

const inputParameters = new InputParameters(priceEndpointInputParametersDefinition, [
  {
    base: 'ETH',
    quote: 'EUR',
  },
])

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const endpoint = new CryptoPriceEndpoint({
  name: 'price',
  aliases: ['crypto'],
  transport,
  inputParameters,
})
