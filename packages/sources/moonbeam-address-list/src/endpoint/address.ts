import {
  PoRAddressEndpoint,
  PoRAddressResponse,
} from '@plugin/external-adapter-framework/adapter/por'
import { config } from '../config'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { AddressTransport } from '../transport/address'

const networks = ['moonbeam']
const chainIds = ['mainnet', 'testnet']

export const inputParameters = new InputParameters(
  {
    contractAddress: {
      description: 'The address of the Address Manager contract holding the custodial addresses.',
      type: 'string',
    },
    chainId: {
      description: 'The name of the target custodial chain',
      options: chainIds,
      type: 'string',
      default: 'mainnet',
    },
    network: {
      description: 'The name of the target custodial network protocol',
      options: networks,
      type: 'string',
      default: 'moonbeam',
    },
  },
  [
    {
      network: 'moonbeam',
      chainId: 'mainnet',
    },
  ],
)

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: PoRAddressResponse
  Settings: typeof config.settings
}

export const addressEndpoint = new PoRAddressEndpoint({
  name: 'address',
  transport: new AddressTransport(),
  inputParameters,
})
