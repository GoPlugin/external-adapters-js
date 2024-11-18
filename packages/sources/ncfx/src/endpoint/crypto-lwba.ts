import {
  LwbaEndpoint,
  LwbaResponseDataFields,
  lwbaEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import { transport } from '../transport/lwba'
import { customInputValidation } from './crypto'

export const inputParameters = new InputParameters(lwbaEndpointInputParametersDefinition, [
  {
    base: 'ETH',
    quote: 'USD',
  },
])

export type BaseEndpointTypesLwba = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: LwbaResponseDataFields
}

export const cryptoLwbaEndpoint = new LwbaEndpoint({
  name: 'crypto-lwba',
  customInputValidation,
  transport,
  inputParameters,
  requestTransforms: [
    (req) => {
      req.requestContext.data.base = req.requestContext.data.base.toUpperCase()
      req.requestContext.data.quote = req.requestContext.data.quote.toUpperCase()
    },
  ],
})
