import { config } from '../config'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { stockEndpointInputParametersDefinition } from '@plugin/external-adapter-framework/adapter/stock'

export const stockInputParameters = new InputParameters(stockEndpointInputParametersDefinition, [
  {
    base: 'USD',
  },
])

export type StockBaseEndpointTypes = {
  Parameters: typeof stockInputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}
