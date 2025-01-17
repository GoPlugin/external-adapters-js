import { AdapterData, AdapterRequest, AdapterRequestData, Execute } from '@plugin/ea-bootstrap'
import nock from 'nock'
import * as apyFinanceAdapter from '../../src/index'
import { mockEthereumCalls, mockTiingoResponse } from './fixtures'
let oldEnv: NodeJS.ProcessEnv

describe('execute', () => {
  let execute: Execute
  const id = '1'

  beforeAll(async () => {
    execute = await apyFinanceAdapter.makeExecute()
    oldEnv = JSON.parse(JSON.stringify(process.env))
    process.env.CACHE_ENABLED = 'false'
    process.env.TIINGO_DATA_PROVIDER_URL =
      process.env.TIINGO_DATA_PROVIDER_URL || 'http://localhost:3000'
    process.env.ETHEREUM_RPC_URL =
      process.env.ETHEREUM_RPC_URL || 'https://geth-main.eth.devnet.tools'

    if (process.env.RECORD) nock.recorder.rec()
  })

  afterAll(() => {
    process.env = oldEnv
    if (process.env.RECORD) nock.recorder.play()

    nock.restore()
    nock.cleanAll()
    nock.enableNetConnect()
  })

  describe('with request properly formatted', () => {
    mockTiingoResponse()
    mockEthereumCalls()
    const data: AdapterRequestData = {
      id,
      data: {
        source: 'tiingo',
      },
    }

    it('should return success', async () => {
      const resp = await execute(data as AdapterRequest<AdapterData>, {})
      expect(resp).toMatchSnapshot()
    })
  })

  describe('with varying stable prices', () => {
    mockTiingoResponse()
    mockEthereumCalls()
    const data: AdapterRequestData = {
      id,
      data: {
        source: 'tiingo',
      },
    }

    it('should return correct result', async () => {
      const resp = await execute(data as AdapterRequest<AdapterData>, {})
      expect(resp).toMatchSnapshot()
    })
  })
})
