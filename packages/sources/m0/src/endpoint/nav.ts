import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { InputParameters } from '@plugin/external-adapter-framework/validation'
import { EmptyInputParameters } from '@plugin/external-adapter-framework/validation/input-params'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { config } from '../config'
import { httpTransport } from '../transport/nav'

export const inputParameters = new InputParameters({}, [])

export type BaseEndpointTypes = {
  Parameters: EmptyInputParameters
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  name: 'reserves',
  aliases: ['por', 'nav'],
  transport: httpTransport,
})
