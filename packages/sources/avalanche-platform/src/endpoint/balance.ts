import {
  PoRBalanceEndpoint,
  PoRBalanceResponse,
} from '@plugin/external-adapter-framework/adapter/por'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { config } from '../config'
import { httpTransport } from '../transport/balance'
import { AdapterRequest } from '@plugin/external-adapter-framework/util'
import { AdapterInputError } from '@plugin/external-adapter-framework/validation/error'

export const inputParameters = new InputParameters(
  {
    addresses: {
      aliases: ['result'],
      array: true,
      type: {
        address: {
          type: 'string',
          description: 'an address to get the balance of',
          required: true,
        },
        network: {
          type: 'string',
          description: 'the name of the network protocol',
          default: 'avalanche',
        },
      },
      description:
        'An array of addresses to get the balances of (as an object with string `address` as an attribute)',
      required: true,
    },
  },
  [
    {
      addresses: [
        {
          address: 'P-fuji1vd9sddlllrlk9fvj9lhntpw8t00lmvtnqkl2jt',
          network: 'avalanche-fuji',
        },
      ],
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: PoRBalanceResponse
  Settings: typeof config.settings
}

export const endpoint = new PoRBalanceEndpoint({
  name: 'balance',
  transport: httpTransport,
  inputParameters,
  customInputValidation: (
    req: AdapterRequest<typeof inputParameters.validated>,
  ): AdapterInputError | undefined => {
    if (req.requestContext.data.addresses.length === 0) {
      throw new AdapterInputError({
        statusCode: 400,
        message: `Input, at 'addresses' or 'result' path, must be a non-empty array.`,
      })
    }
    return
  },
})
