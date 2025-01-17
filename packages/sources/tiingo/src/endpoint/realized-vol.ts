import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { transport } from '../transport/realized-vol'

const TIINGO_REALIZED_VOL_DEFAULT_QUOTE = 'USD'
const TIINGO_REALIZED_VOL_DEFAULT_RESULT_PATH = 'realVol30Day'

export type ResponseData = {
  [key: string]: number
}

export type RealizedVolResponse = {
  Result: number | null
  Data: ResponseData
}

const inputParameters = new InputParameters(
  {
    base: {
      aliases: ['from', 'coin'],
      required: true,
      type: 'string',
      description: 'The base currency to query the realized volatility for',
    },
    convert: {
      aliases: ['to', 'quote'],
      required: false,
      default: TIINGO_REALIZED_VOL_DEFAULT_QUOTE,
      type: 'string',
      description: 'The quote currency to convert the realized volatility to',
    },
    resultPath: {
      required: false,
      default: TIINGO_REALIZED_VOL_DEFAULT_RESULT_PATH,
      type: 'string',
      description: 'The field to return within the result path',
    },
  },
  [
    {
      base: 'ETH',
      convert: TIINGO_REALIZED_VOL_DEFAULT_QUOTE,
      resultPath: TIINGO_REALIZED_VOL_DEFAULT_RESULT_PATH,
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Settings: typeof config.settings
  Response: RealizedVolResponse
}

export const endpoint = new AdapterEndpoint({
  name: 'realized-vol',
  aliases: ['realized-volatility'],
  transport,
  inputParameters: inputParameters,
  overrides: overrides.tiingo,
})
