import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src/adapter'
import { TInputParameters } from '../../src/endpoint'
import { ENV_RPC_URL } from '../../src/config'
import * as process from 'process'

describe('execute', () => {
  const jobID = '1'
  const execute = makeExecute()
  process.env[ENV_RPC_URL] = process.env[ENV_RPC_URL] || 'http://localhost:8546/'

  describe('validation error', () => {
    const requests = [
      { name: 'empty body', testData: {} },
      { name: 'empty data', testData: { data: {} } },
      {
        name: 'base not supplied',
        testData: {
          id: jobID,
          data: {
            from: '',
            fromAddress: '',
            fromDecimals: 18,
            to: '',
            toAddress: '',
            toDecimals: 18,
          },
        },
      },
      {
        name: 'quote not supplied',
        testData: { id: jobID, data: { base: 'ETH' } },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        try {
          await execute(req.testData as AdapterRequest<TInputParameters>, {})
        } catch (error) {
          const errorResp = Requester.errored(jobID, error as AdapterError)
          assertError({ expected: 400, actual: errorResp.statusCode }, errorResp, jobID)
        }
      })
    })
  })
})
