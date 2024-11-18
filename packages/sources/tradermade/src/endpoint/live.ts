import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { transport } from '../transport/live'

export const inputParameters = new InputParameters(
  {
    base: {
      aliases: ['from', 'coin', 'symbol', 'market'],
      required: true,
      type: 'string',
      description: 'The symbol of symbols of the currency to query',
    },
    quote: {
      aliases: ['to', 'convert'],
      required: false,
      type: 'string',
      description: 'The symbol of the currency to convert to',
    },
  },
  [
    {
      base: 'AAPL',
    },
    {
      base: 'WTI',
      quote: 'USD',
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  name: 'live',
  aliases: ['stock', 'commodities'],
  transport,
  inputParameters,
  overrides: overrides.tradermade,
})
