import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError, assertSuccess } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const jobID = '1'
  const execute = makeExecute()

  describe('successful calls', () => {
    const requests = [
      {
        name: 'id not supplied',
        testData: { data: { base: 'USDC', quote: 'USDT' } },
      },
      {
        name: 'base/quote',
        testData: { id: jobID, data: { base: 'USDC', quote: 'USDT' } },
      },
      {
        name: 'from/to',
        testData: { id: jobID, data: { from: 'USDC', to: 'USDT' } },
      },
      {
        name: 'coin/market',
        testData: { id: jobID, data: { coin: 'USDC', market: 'USDT' } },
      },
      {
        name: 'from/to ETH',
        testData: { id: jobID, data: { from: 'ETH', fromDecimals: 18, to: 'stETH' } },
      },
      {
        name: 'token addresses and decimals provided directly',
        testData: {
          id: jobID,
          data: {
            from: 'NOT_REAL',
            fromAddress: '0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9',
            fromDecimals: 18,
            to: 'ALSO_NOT_REAL',
            toAddress: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
            toDecimals: 18,
          },
        },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        const data = await execute(req.testData as AdapterRequest<TInputParameters>, {})
        assertSuccess({ expected: 200, actual: data.statusCode }, data, jobID)
        expect(data.result).toBeGreaterThan(0)
        expect(data.data.result).toBeGreaterThan(0)
      })
    })
  })

  describe('error calls', () => {
    const requests = [
      {
        name: 'unknown base',
        testData: {
          id: jobID,
          data: {
            from: 'NOT_REAL',
            fromAddress: '',
            fromDecimals: 18,
            to: 'USDT',
            toAddress: '',
            toDecimals: 18,
          },
        },
      },
      {
        name: 'unknown quote',
        testData: { id: jobID, data: { from: 'USDC', quote: 'not_real' } },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        try {
          await execute(req.testData as AdapterRequest<TInputParameters>, {})
        } catch (error) {
          const errorResp = Requester.errored(jobID, error as AdapterError)
          assertError({ expected: 500, actual: errorResp.statusCode }, errorResp, jobID)
        }
      })
    })
  })
})
