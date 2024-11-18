import { Builder } from '@plugin/ea-bootstrap'
import type { ExecuteWithConfig, ExecuteFactory, Config } from '@plugin/ea-bootstrap'
import { makeConfig } from './config'
import * as endpoints from './endpoint'

// Export function to integrate with Plugin node
const execute: ExecuteWithConfig<Config, endpoints.TInputParameters> = async (
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

export const makeExecute: ExecuteFactory<Config, endpoints.TInputParameters> = (config) => {
  return async (request, context) => execute(request, context, config || makeConfig())
}
