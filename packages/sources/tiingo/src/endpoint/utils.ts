import { config } from '../config'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { priceEndpointInputParametersDefinition } from '@plugin/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
export const inputParameters = new InputParameters(priceEndpointInputParametersDefinition, [
  {
    base: 'ETH',
    quote: 'USD',
  },
])

export type BaseCryptoEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}
