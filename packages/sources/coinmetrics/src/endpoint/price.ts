import {
  CryptoPriceEndpoint,
  priceEndpointInputParametersDefinition,
} from '@plugin/external-adapter-framework/adapter'
import { TransportRoutes } from '@plugin/external-adapter-framework/transports'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { VALID_QUOTES, config } from '../config'
import { httpTransport } from '../transport/price-http'
import { wsTransport } from '../transport/price-ws'

export const assetMetricsInputParameters = new InputParameters(
  {
    ...priceEndpointInputParametersDefinition,
    quote: {
      ...priceEndpointInputParametersDefinition.quote,
      options: Object.values(VALID_QUOTES),
    },
  },
  [
    {
      base: 'BTC',
      quote: VALID_QUOTES.USD,
    },
  ],
)

// Common endpoint type shared by the REST and WS transports
export type BaseEndpointTypes = {
  Parameters: typeof assetMetricsInputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const transportRoutes = new TransportRoutes<BaseEndpointTypes>()
  .register('ws', wsTransport)
  .register('rest', httpTransport)

export const endpoint = new CryptoPriceEndpoint({
  name: 'price',
  aliases: ['price-ws'],
  transportRoutes,
  defaultTransport: 'ws',
  inputParameters: assetMetricsInputParameters,
})
