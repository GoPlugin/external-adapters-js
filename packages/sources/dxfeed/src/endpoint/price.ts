import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { TransportRoutes } from '@plugin/external-adapter-framework/transports'
import {
  AdapterRequest,
  SingleNumberResultResponse,
} from '@plugin/external-adapter-framework/util'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import {
  AdapterError,
  AdapterInputError,
} from '@plugin/external-adapter-framework/validation/error'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { buildDxFeedHttpTransport } from '../transport/price-http'
import { buildDxFeedWsTransport } from '../transport/price-ws'

export const inputParameters = new InputParameters(
  {
    base: {
      aliases: ['from', 'coin', 'market'],
      type: 'string',
      description: 'The symbol of the currency to query',
      required: true,
    },
  },
  [
    {
      base: 'TSLA',
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export function customInputValidation(
  req: AdapterRequest<typeof inputParameters.validated>,
  settings: typeof config.settings,
): AdapterError | undefined {
  if (req.requestContext.transportName === 'ws' && !settings.WS_API_ENDPOINT) {
    return new AdapterInputError({
      statusCode: 400,
      message: 'WS_API_ENDPOINT is not set',
    })
  }
  return
}

export const endpoint = new AdapterEndpoint({
  name: 'price',
  aliases: ['crypto', 'stock', 'forex', 'commodities'],
  transportRoutes: new TransportRoutes<BaseEndpointTypes>()
    .register('ws', buildDxFeedWsTransport())
    .register('rest', buildDxFeedHttpTransport()),
  defaultTransport: 'rest',
  inputParameters: inputParameters,
  overrides: overrides.dxfeed,
  customInputValidation,
})
