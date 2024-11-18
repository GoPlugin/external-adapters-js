import {
  CryptoPriceEndpoint,
  priceEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import { transport } from '../transport/crypto'

const inputParameters = new InputParameters(priceEndpointInputParametersDefinition, [
  {
    base: 'ETH',
    quote: 'USD',
  },
])

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const cryptoEndpoint = new CryptoPriceEndpoint({
  name: 'price',
  inputParameters,
  transport,
})
