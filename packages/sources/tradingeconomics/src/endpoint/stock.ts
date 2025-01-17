import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { httpTransport } from '../transport/stock-http'
import { wsTransport } from '../transport/stock-ws'
import {
  StockEndpoint,
  stockEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter/stock'
import { TransportRoutes } from '@plugin/external-adapter-framework/transports'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import overrides from '../config/overrides.json'

const inputParameters = new InputParameters(stockEndpointInputParametersDefinition, [
  {
    base: 'AAPL:US',
  },
])

// Common endpoint type shared by the REST and WS transports
export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const transportRoutes = new TransportRoutes<BaseEndpointTypes>()
  .register('ws', wsTransport)
  .register('rest', httpTransport)

export const endpoint = new StockEndpoint({
  name: 'stock',
  aliases: ['commodities'],
  transportRoutes,
  inputParameters,
  defaultTransport: 'rest',
  customRouter: (_req, adapterConfig) => {
    return adapterConfig.WS_ENABLED ? 'ws' : 'rest'
  },
  overrides: overrides.tradingeconomics,
})
