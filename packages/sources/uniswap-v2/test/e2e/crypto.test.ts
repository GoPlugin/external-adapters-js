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
        name: 'from/to PLI',
        testData: { id: jobID, data: { from: 'USDC', to: 'USDT' } },
      },
      {
        name: 'token addresses and decimals provided directly',
        testData: {
          id: jobID,
          data: {
            from: 'NOT_REAL',
            fromAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            fromDecimals: 18,
            to: 'ALSO_NOT_REAL',
            toAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
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
        testData: { id: jobID, data: { from: 'not_real', to: 'USDT' } },
      },
      {
        name: 'unknown quote',
        testData: { id: jobID, data: { from: 'USDC', to: 'not_real' } },
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
