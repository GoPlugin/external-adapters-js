import { wsTransport } from '../transport/price-ws'
import {
  AdapterRequest,
  SingleNumberResultResponse,
} from '@plugin/external-adapter-framework/util'
import { httpTransport } from '../transport/price-http'
import { ForexPriceEndpoint } from '@plugin/external-adapter-framework/adapter'
import { TransportRoutes } from '@plugin/external-adapter-framework/transports'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import overrides from '../config/overrides.json'

export const inputParameters = new InputParameters(
  {
    base: {
      aliases: ['from', 'coin', 'asset'],
      required: true,
      description: 'The symbol of symbols of the currency to query',
      type: 'string',
    },
    quote: {
      aliases: ['to', 'market', 'term'],
      required: true,
      description: 'The symbol of the currency to convert to',
      type: 'string',
    },
  },
  [
    {
      base: 'EUR',
      quote: 'USD',
    },
    {
      base: 'EURUSD:CUR',
      quote: 'USD',
    },
  ],
)

export const requestTransform = (req: AdapterRequest<typeof inputParameters.validated>): void => {
  const base = req.requestContext.data.base.toUpperCase()
  const regex = /[A-Z]{6}:CUR/ //BTCUSD:CUR
  if (regex.test(base)) {
    req.requestContext.data.base = base.substring(0, 3)
    req.requestContext.data.quote = base.substring(3, 6)
  }
}

const requestTransforms = [requestTransform]

// Common endpoint type shared by the REST and WS transports
export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const transportRoutes = new TransportRoutes<BaseEndpointTypes>()
  .register('ws', wsTransport)
  .register('rest', httpTransport)

export const endpoint = new ForexPriceEndpoint({
  name: 'price',
  aliases: ['forex', 'crypto'],
  transportRoutes,
  inputParameters,
  defaultTransport: 'rest',
  customRouter: (_req, adapterConfig) => {
    return adapterConfig.WS_ENABLED ? 'ws' : 'rest'
  },
  overrides: overrides.tradingeconomics,
  requestTransforms,
})
