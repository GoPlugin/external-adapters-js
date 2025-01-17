import {
  PoRProviderEndpoint,
  PoRProviderResponse,
} from '@plugin/external-adapter-framework/adapter/por'
import { config } from '../config'
import { httpTransport } from '../transport/backed'
import { InputParameters } from '@plugin/external-adapter-framework/validation'

export const inputParameters = new InputParameters(
  {
    accountName: {
      type: 'string',
      description: 'The account name to retrieve the total reserve for',
      required: true,
    },
  },
  [
    {
      accountName: 'IBTA',
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: PoRProviderResponse
  Settings: typeof config.settings
}

export const endpoint = new PoRProviderEndpoint({
  name: 'backed',
  transport: httpTransport,
  inputParameters,
})
