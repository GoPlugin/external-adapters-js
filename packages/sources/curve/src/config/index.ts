import { Requester, util } from '@plugin/ea-bootstrap'
import { Config as BaseConfig, ConfigFactory } from '@plugin/ea-bootstrap'
import { ethers } from 'ethers'

export const NAME = 'CURVE'

export const ENV_RPC_URL = 'RPC_URL'
export const ENV_ADDRESS_PROVIDER = 'ADDRESS_PROVIDER'
export const ENV_EXCHANGE_PROVIDER_ID = 'EXCHANGE_PROVIDER_ID'
export const ENV_BLOCKCHAIN_NETWORK = 'BLOCKCHAIN_NETWORK'
export const ENV_CHAIN_ID = 'CHAIN_ID'
export const DEFAULT_CHAIN_ID = '1'

export const DEFAULT_ENDPOINT = 'crypto'
export const DEFAULT_ADDRESS_PROVIDER = '0x0000000022D53366457F9d5E68Ec105046FC4383'
export const DEFAULT_EXCHANGE_PROVIDER_ID = 2
export const DEFAULT_BLOCKCHAIN_NETWORK = 'ethereum'

export type Config = BaseConfig & {
  provider: ethers.providers.Provider
  addressProviderAddress: string
  exchangeProviderId: number
  network: string
}

export const makeConfig: ConfigFactory<Config> = (prefix) => {
  const rpcUrl = util.getRequiredEnv(ENV_RPC_URL, prefix)
  const chainId =
    parseInt(util.getEnv(ENV_CHAIN_ID) || DEFAULT_CHAIN_ID) || util.getEnv(ENV_CHAIN_ID)
  return {
    ...Requester.getDefaultConfig(prefix),
    defaultEndpoint: DEFAULT_ENDPOINT,
    provider: new ethers.providers.JsonRpcProvider(rpcUrl, chainId),
    addressProviderAddress: util.getEnv(ENV_ADDRESS_PROVIDER, prefix) || DEFAULT_ADDRESS_PROVIDER,
    exchangeProviderId:
      Number(util.getEnv(ENV_EXCHANGE_PROVIDER_ID, prefix)) || DEFAULT_EXCHANGE_PROVIDER_ID,
    network: util.getEnv(ENV_BLOCKCHAIN_NETWORK, prefix) || DEFAULT_BLOCKCHAIN_NETWORK,
  }
}
