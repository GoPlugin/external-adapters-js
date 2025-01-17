import { Requester, util } from '@plugin/ea-bootstrap'
import type { Config as BaseConfig } from '@plugin/ea-bootstrap'

export const ENV_ETHEREUM_CHAIN_ID = 'ETHEREUM_CHAIN_ID'
export const ENV_FALLBACK_CHAIN_ID = 'CHAIN_ID'
export const DEFAULT_CHAIN_ID = '1'

export type Config = BaseConfig & {
  rpcUrl: string
  registryAddr: string
}

export const DEFAULT_ENDPOINT = 'tvl'
export const NAME = 'APY_FINANCE'

export const makeConfig = (prefix?: string): Config => {
  return {
    ...Requester.getDefaultConfig(prefix),
    rpcUrl: util.getRequiredEnvWithFallback('ETHEREUM_RPC_URL', ['RPC_URL'], prefix),
    chainId:
      parseInt(
        util.getEnvWithFallback(ENV_ETHEREUM_CHAIN_ID, [ENV_FALLBACK_CHAIN_ID]) || DEFAULT_CHAIN_ID,
      ) || util.getEnvWithFallback(ENV_ETHEREUM_CHAIN_ID, [ENV_FALLBACK_CHAIN_ID]),
    registryAddr: util.getRequiredEnv('REGISTRY_ADDRESS', prefix),
    defaultEndpoint: DEFAULT_ENDPOINT,
  }
}
