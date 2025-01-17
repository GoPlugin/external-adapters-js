import { util } from '@plugin/ea-bootstrap'
import * as ta from '@plugin/token-allocation-adapter'
import { Config as BaseConfig } from '@plugin/ea-bootstrap'

export const NAME = 'SYNTH_INDEX'
export const DEFAULT_ENDPOINT = 'value'
export interface Config extends BaseConfig {
  defaultNetwork: string
  taConfig: ta.types.Config
}

export const makeConfig = (prefix = ''): Config => {
  return {
    api: {},
    defaultNetwork: util.getEnv('DEFAULT_NETWORK') || 'mainnet',
    taConfig: ta.makeConfig(prefix),
    defaultEndpoint: DEFAULT_ENDPOINT,
  }
}
