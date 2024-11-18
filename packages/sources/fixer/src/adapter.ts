import { Builder } from '@plugin/ea-bootstrap'
import {
  Config,
  ExecuteFactory,
  ExecuteWithConfig,
  AdapterRequest,
  APIEndpoint,
} from '@plugin/ea-bootstrap'
import { makeConfig } from './config'
import * as endpoints from './endpoint'

export const execute: ExecuteWithConfig<Config, endpoints.TInputParameters> = async (
  request,
  context,
  config,
) => {
  return Builder.buildSelector<Config, endpoints.TInputParameters>(
    request,
    context,
    config,
    endpoints,
  )
}

export const endpointSelector = (
  request: AdapterRequest,
): APIEndpoint<Config, endpoints.TInputParameters> =>
  Builder.selectEndpoint<Config, endpoints.TInputParameters>(request, makeConfig(), endpoints)

export const makeExecute: ExecuteFactory<Config, endpoints.TInputParameters> = (
  config?: Config,
) => {
  return async (request, context) => execute(request, context, config || makeConfig())
}