import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import { httpTransport } from '../transport/mco2'
import { EmptyInputParameters } from '@plugin/external-adapter-framework/validation/input-params'

export type BaseEndpointTypes = {
  Parameters: EmptyInputParameters
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  name: 'mco2',
  aliases: ['balance'],
  transport: httpTransport,
})
