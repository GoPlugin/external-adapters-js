import { Builder } from '@plugin/ea-bootstrap'
import {
  AdapterRequest,
  APIEndpoint,
  ExecuteFactory,
  ExecuteWithConfig,
} from '@plugin/ea-bootstrap'
import { ExtendedConfig, makeConfig } from './config'
import * as endpoints from './endpoint'

export const execute: ExecuteWithConfig<ExtendedConfig, endpoints.TInputParameters> = async (
  request,
  context,
  config,
) => {
  return Builder.buildSelector<ExtendedConfig, endpoints.TInputParameters>(
    request,
    context,
    config,
    endpoints,
  )
}

export const endpointSelector = (
  request: AdapterRequest,
): APIEndpoint<ExtendedConfig, endpoints.TInputParameters> =>
  Builder.selectEndpoint<ExtendedConfig, endpoints.TInputParameters>(
    request,
    makeConfig(),
    endpoints,
  )

export const makeExecute: ExecuteFactory<ExtendedConfig, endpoints.TInputParameters> = (config) => {
  return async (request, context) => execute(request, context, config || makeConfig())
}
