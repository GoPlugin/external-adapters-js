import {
  AdapterEndpoint,
  priceEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import { wsTransport } from '../transport/price'

export const inputParameters = new InputParameters(priceEndpointInputParametersDefinition, [
  {
    base: 'wstETH',
    quote: 'ETH',
  },
])

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  name: 'price',
  aliases: ['state', 'crypto'],
  transport: wsTransport,
  inputParameters,
})
