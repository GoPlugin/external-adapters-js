import { AdapterEndpoint } from '@plugin/external-adapter-framework/adapter'
import { SingleNumberResultResponse } from '@plugin/external-adapter-framework/util'
import { EmptyInputParameters } from '@plugin/external-adapter-framework/validation/input-params'
import { AlongsideCollateralTransport } from '../transport/collateral'
import { config } from '../config'

export type BaseEndpointTypes = {
  Parameters: EmptyInputParameters
  Response: SingleNumberResultResponse
  Settings: typeof config.settings
}

export const endpoint = new AdapterEndpoint({
  name: 'collateral',
  transport: new AlongsideCollateralTransport(),
})
