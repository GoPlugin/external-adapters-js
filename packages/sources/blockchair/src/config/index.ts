import { Requester } from '@plugin/ea-bootstrap'
import type { Config } from '@plugin/ea-bootstrap'

export const NAME = 'BLOCKCHAIR'

export const DEFAULT_BASE_URL = 'https://api.blockchair.com'
export const DEFAULT_ENDPOINT = 'balance'

export const COIN_KEYS = ['btc', 'dash', 'doge', 'ltc', 'bch'] as const
export type CoinType = (typeof COIN_KEYS)[number]
export function isCoinType(key: string): key is CoinType {
  return COIN_KEYS.includes(key as CoinType)
}
export const CHAIN_KEYS = ['mainnet'] as const
export type ChainType = (typeof CHAIN_KEYS)[number]
export function isChainType(key: string): key is ChainType {
  return CHAIN_KEYS.includes(key as ChainType)
}

export const COINS: { [ticker: string]: string } = {
  btc: 'bitcoin',
  dash: 'dash',
  doge: 'dogecoin',
  ltc: 'litecoin',
  zec: 'zcash',
  bch: 'bitcoin-cash',
  bsv: 'bitcoin-sv',
  grs: 'groestlcoin',
}

export const makeConfig = (prefix?: string): Config => {
  const config = Requester.getDefaultConfig(prefix)
  config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
  config.defaultEndpoint = DEFAULT_ENDPOINT
  return config
}
