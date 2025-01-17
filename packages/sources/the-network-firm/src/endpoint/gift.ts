import {
  PoRProviderEndpoint,
  PoRProviderResponse,
} from '@plugin/external-adapter-framework/adapter/por'
import { config } from '../config'
import { httpTransport } from '../transport/gift'
import { EmptyInputParameters } from '@plugin/external-adapter-framework/validation/input-params'

export type BaseEndpointTypes = {
  Parameters: EmptyInputParameters
  Response: PoRProviderResponse
  Settings: typeof config.settings
}

export const endpoint = new PoRProviderEndpoint({
  name: 'gift',
  transport: httpTransport,
})
