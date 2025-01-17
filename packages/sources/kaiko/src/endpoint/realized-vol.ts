import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { config } from '../config'
import overrides from '../config/overrides.json'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { transport } from '../transport/realized-vol'

const RESULT_PATHS = ['realVol1Day', 'realVol7Day', 'realVol30Day'] as const
type ResultPath = (typeof RESULT_PATHS)[number]
const DEFAULT_RESULT_PATH: ResultPath = RESULT_PATHS[2]
const DEFAULT_QUOTE = 'USD'

export type ResponseData = Record<ResultPath, number>
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
    quote: {
      aliases: ['to', 'market', 'convert'],
      required: false,
      default: DEFAULT_QUOTE,
      type: 'string',
      description: 'The quote currency to convert the realized volatility to',
    },
    resultPath: {
      required: false,
      default: DEFAULT_RESULT_PATH,
      options: RESULT_PATHS,
      type: 'string',
      description: 'The field to return within the result path',
    },
  },
  [
    {
      base: 'ETH',
      quote: DEFAULT_QUOTE,
      resultPath: DEFAULT_RESULT_PATH,
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
  inputParameters,
  overrides: overrides.kaiko,
})
