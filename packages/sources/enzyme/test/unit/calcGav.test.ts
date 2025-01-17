import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src'
import { ENV_ETHEREUM_RPC_URL } from '../../src/config'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const jobID = '1'
  const execute = makeExecute()
  process.env[ENV_ETHEREUM_RPC_URL] = process.env[ENV_ETHEREUM_RPC_URL] || 'http://localhost:8545/'

  describe('validation error', () => {
    const requests = [
      { name: 'empty data with endpoint', testData: { data: { endpoint: 'calcGav' } } },
      {
        name: 'calculatorContract not supplied',
        testData: {
          id: jobID,
          data: {
            endpoint: 'calcGav',
            calculatorContract: '',
            vaultProxy: '0x44902e5a88371224d9ac172e391C64257B701Ade',
          },
        },
      },
      {
        name: 'vaultProxy not supplied',
        testData: {
          id: jobID,
          data: {
            endpoint: 'calcGav',
            calculatorContract: '0x0b2cBB1974f17700531439E3e4AfF5e5D2AADD4A',
          },
        },
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
