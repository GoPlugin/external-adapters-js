import {
  PoRAddressEndpoint,
  PoRAddressResponse,
} from '@plugin/external-adapter-framework/adapter/por'
import { EmptyInputParameters } from '@plugin/external-adapter-framework/validation/input-params'
import { config } from '../config'
import { bedrockHttpTransport } from '../transport/bedrockUniBTC'

export type BaseEndpointTypes = {
  Parameters: EmptyInputParameters
  Response: PoRAddressResponse
  Settings: typeof config.settings
}

export const endpoint = new PoRAddressEndpoint({
  name: 'bedrockBtcAddress',
  transport: bedrockHttpTransport,
})
