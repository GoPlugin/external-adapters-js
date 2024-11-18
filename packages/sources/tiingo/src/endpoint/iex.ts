import {
  StockEndpoint,
  stockEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter/stock'
import { TransportRoutes } from '@plugin/external-adapter-framework/transports'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { httpTransport } from '../transport/iex-http'
import { wsTransport } from '../transport/iex-ws'

const inputParameters = new InputParameters(stockEndpointInputParametersDefinition, [
  {
    base: 'aapl',
  },
])

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const endpoint = new StockEndpoint({
  name: 'iex',
  aliases: ['stock'],
  transportRoutes: new TransportRoutes<BaseEndpointTypes>()
    .register('ws', wsTransport)
    .register('rest', httpTransport),
  defaultTransport: 'ws',
  inputParameters: inputParameters,
  overrides: overrides.tiingo,
})
