import * as Amberdata from '@plugin/amberdata-adapter'
import { adapter as CFBenchmarks } from '@plugin/cfbenchmarks-adapter'
import * as CoinApi from '@plugin/coinapi-adapter'
import { adapter as CoinGecko } from '@plugin/coingecko-adapter'
import { adapter as CoinMarketCap } from '@plugin/coinmarketcap-adapter'
import { adapter as CoinMetrics } from '@plugin/coinmetrics-adapter'
import { adapter as CoinPaprika } from '@plugin/coinpaprika-adapter'
import * as CoinRanking from '@plugin/coinranking-adapter'
import { adapter as CryptoCompare } from '@plugin/cryptocompare-adapter'
import {
  AdapterImplementation as v2AdapterImplementation,
  DefaultConfig,
  Requester,
  util,
} from '@plugin/ea-bootstrap'
import { PriceAdapter } from '@plugin/external-adapter-framework/adapter'
import { adapter as Finage } from '@plugin/finage-adapter'
import { adapter as Kaiko } from '@plugin/kaiko-adapter'
import { adapter as NCFX } from '@plugin/ncfx-adapter'
import { adapter as Tiingo } from '@plugin/tiingo-adapter'
import { adapter as BlocksizeCapital } from '@plugin/blocksize-capital-adapter'
import { Config, SourceRequestOptions } from '../types'

// List of v2 adapters
export const adaptersV2: v2AdapterImplementation[] = [
  Amberdata as unknown as v2AdapterImplementation,
  CoinApi as unknown as v2AdapterImplementation,
  CoinRanking as unknown as v2AdapterImplementation,
]

// List of v3 adapters
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const adaptersV3: PriceAdapter<any>[] = [
  CFBenchmarks,
  CoinGecko,
  CoinMarketCap,
  CoinMetrics,
  CoinPaprika,
  CryptoCompare,
  Finage,
  Kaiko,
  NCFX,
  Tiingo,
  BlocksizeCapital,
]

export const DEFAULT_TOKEN_DECIMALS = 18
export const DEFAULT_TOKEN_BALANCE = 1

export const NAME = 'TOKEN_ALLOCATION'

export const makeConfig = (prefix = ''): Config => {
  const sources: SourceRequestOptions = {}

  for (const a of adaptersV2) {
    const name = a.NAME
    const url = util.getURL(name.toUpperCase())
    if (url) {
      const defaultConfig = Requester.getDefaultConfig(prefix)
      defaultConfig.api.baseURL = url
      defaultConfig.api.method = 'post'
      sources[name.toLowerCase()] = defaultConfig
    }
  }

  for (const a of adaptersV3) {
    const name = a.name
    const url = util.getURL(name.toUpperCase())
    if (url) {
      const defaultConfig = {
        api: {
          baseURL: url,
          method: 'post',
        },
      } as DefaultConfig
      sources[name.toLowerCase()] = defaultConfig
    }
  }

  return {
    sources,
    defaultMethod: util.getEnv('DEFAULT_METHOD', prefix) || 'price',
    defaultQuote: util.getEnv('DEFAULT_QUOTE') || 'USD',
    defaultSource: util.getEnv('DEFAULT_SOURCE'),
  }
}

export const makeOptions = ({
  sources,
}: Config): {
  source: string[]
} => {
  const sourceOptions = Object.keys(sources).map((s) => s.toLowerCase())
  return {
    source: sourceOptions,
  }
}
