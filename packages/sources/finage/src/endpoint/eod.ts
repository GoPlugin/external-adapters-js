import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { transport } from '../transport/eod'

export const inputParameters = new InputParameters(
  {
    base: {
      aliases: ['from', 'symbol'],
      required: true,
      type: 'string',
      description: 'The symbol of the currency to query',
    },
  },
  [
    {
      base: 'ETH',
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: SingleNumberResultResponse
}

export const endpoint = new AdapterEndpoint({
  name: 'eod',
  transport,
  inputParameters: inputParameters,
  overrides: overrides.finage,
})
