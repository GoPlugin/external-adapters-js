import { shouldBehaveLikeBalanceAdapter } from '@plugin/ea-test-helpers'
import { makeExecute } from '../../src/adapter'

shouldBehaveLikeBalanceAdapter(makeExecute(), ['bitcoin_mainnet'])
