import { Config as BaseConfig } from '@plugin/ea-bootstrap'
import { Requester, util } from '@plugin/ea-bootstrap'
import { ethers } from 'ethers'

export const ENV_XSUSHI_ADDRESS = 'XSUSHI_ADDRESS'
export const ENV_ETHEREUM_RPC_URL = 'ETHEREUM_RPC_URL'
export const ENV_FALLBACK_RPC_URL = 'RPC_URL'

export const ENV_ETHEREUM_CHAIN_ID = 'ETHEREUM_CHAIN_ID'
export const ENV_FALLBACK_CHAIN_ID = 'CHAIN_ID'

export const DEFAULT_XSUSHI_ADDRESS = '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272'
export const DEFAULT_ENDPOINT = 'price'
export const DEFAULT_CHAIN_ID = '1'
export const NAME = 'XSUSHI_PRICE'

export type Config = BaseConfig & {
  xsushiAddress: string
  provider: ethers.providers.Provider
}

export const makeConfig = (prefix?: string): Config => {
  const rpcUrl = util.getRequiredEnvWithFallback(
    ENV_ETHEREUM_RPC_URL,
    [ENV_FALLBACK_RPC_URL],
    prefix,
  )

  const chainId =
    parseInt(
      util.getEnvWithFallback(ENV_ETHEREUM_CHAIN_ID, [ENV_FALLBACK_CHAIN_ID]) || DEFAULT_CHAIN_ID,
    ) || util.getEnvWithFallback(ENV_ETHEREUM_CHAIN_ID, [ENV_FALLBACK_CHAIN_ID])

  return {
    ...Requester.getDefaultConfig(prefix),
    xsushiAddress: util.getEnv(ENV_XSUSHI_ADDRESS, prefix) || DEFAULT_XSUSHI_ADDRESS,
    provider: new ethers.providers.JsonRpcProvider(rpcUrl, chainId),
    defaultEndpoint: DEFAULT_ENDPOINT,
  }
}
