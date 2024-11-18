import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import { httpTransport } from '../transport/reserves'

export const inputParameters = new InputParameters({})

export type BaseEndpointTypes = {
  Parameters: typeof inputParameters.definition
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  name: 'reserves',
  transport: httpTransport,
  inputParameters,
})
