import type {
  AdapterImplementation as v2AdapterImplementation,
  AdapterResponse,
  Config,
  Account,
  AdapterContext,
} from '@plugin/ea-bootstrap'
import { makeRequestFactory, callAdapter } from '.'
import { Adapter as v3AdapterImplementation } from '@plugin/external-adapter-framework/adapter'

// balance adapters
import * as amberdata from '@plugin/amberdata-adapter'
import * as bitcoinJsonRpc from '@plugin/bitcoin-json-rpc-adapter'
import * as blockchainCom from '@plugin/blockchain.com-adapter'
import * as blockchair from '@plugin/blockchair-adapter'
import * as blockcypher from '@plugin/blockcypher-adapter'
import * as btcCom from '@plugin/btc.com-adapter'
import * as cryptoapis from '@plugin/cryptoapis-adapter'
import * as sochain from '@plugin/sochain-adapter'
import * as ethBalance from '@plugin/eth-balance-adapter'
import * as adaBalance from '@plugin/ada-balance-adapter'
import { adapter as avalanchePlatform } from '@plugin/avalanche-platform-adapter'
import { adapter as polkadotBalance } from '@plugin/polkadot-balance-adapter'
import { adapter as staderBalance } from '@plugin/stader-balance-adapter'
import { adapter as ethBeacon } from '@plugin/eth-beacon-adapter'
import { adapter as lotus } from '@plugin/lotus-adapter'
import { adapter as porIndexer } from '@plugin/por-indexer-adapter'

// TODO: type
export const adaptersV2: v2AdapterImplementation[] = [
  amberdata as unknown as v2AdapterImplementation,
  bitcoinJsonRpc as unknown as v2AdapterImplementation,
  blockchainCom as unknown as v2AdapterImplementation,
  blockcypher as unknown as v2AdapterImplementation,
  blockchair as unknown as v2AdapterImplementation,
  btcCom as unknown as v2AdapterImplementation,
  cryptoapis as unknown as v2AdapterImplementation,
  sochain as unknown as v2AdapterImplementation,
  ethBalance as unknown as v2AdapterImplementation,
  adaBalance as unknown as v2AdapterImplementation,
]

export const adaptersV3: v3AdapterImplementation[] = [
  polkadotBalance,
  staderBalance,
  ethBeacon,
  avalanchePlatform,
  lotus,
  porIndexer,
]

// Get balances for address set
export const runBalanceAdapter = async (
  indexer: string,
  context: AdapterContext,
  confirmations: number,
  config: Config,
  input: AdapterResponse,
): Promise<AdapterResponse> => {
  const execute = makeRequestFactory(config, indexer)
  let next
  switch (indexer) {
    case bitcoinJsonRpc.NAME:
      next = buildLocalBitcoinNodeRequest(input)
      break
    case porIndexer.name:
      next = buildPorIndexerRequest(input, confirmations)
      break
    case ethBeacon.name:
      next = {
        id: input.jobRunID,
        data: {
          result: input.data.result,
          dataPath: 'result',
          endpoint: 'balance',
          confirmations,
          validatorStatus: input.data.validatorStatus,
          searchLimboValidators: input.data.searchLimboValidators,
        },
      }
      break
    case staderBalance.name:
      next = {
        id: input.jobRunID,
        data: {
          result: input.data.result,
          dataPath: 'result',
          endpoint: 'balance',
          confirmations,
          validatorStatus: input.data.validatorStatus,
          elRewardAddresses: input.data.elRewardAddresses,
          socialPoolAddresses: input.data.socialPoolAddresses,
          penaltyAddress: input.data.penaltyAddress,
          poolFactoryAddress: input.data.poolFactoryAddress,
          stakeManagerAddress: input.data.stakeManagerAddress,
          permissionedPoolAddress: input.data.permissionedPoolAddress,
          staderConfigAddress: input.data.staderConfigAddress,
          reportedBlock: input.data.reportedBlock,
          network: input.data.network,
          chainId: input.data.chainId,
        },
      }
      break
    default:
      next = {
        id: input.jobRunID,
        data: {
          result: input.data.result,
          dataPath: 'result',
          endpoint: 'balance',
          confirmations,
        },
      }
  }
  return callAdapter(execute, context, next, '_onBalance')
}

function buildLocalBitcoinNodeRequest(input: AdapterResponse) {
  return {
    id: input.jobRunID,
    data: {
      // TODO: validate and type coerce
      scanobjects: (input.data.result as any).map((result: Account) => result.address),
      endpoint: 'scantxoutset',
    },
  }
}

function buildPorIndexerRequest(input: AdapterResponse, minConfirmations: number) {
  return {
    id: input.jobRunID,
    data: {
      addresses: input.data.result,
      minConfirmations,
    },
  }
}
