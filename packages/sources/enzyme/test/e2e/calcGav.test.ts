import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError, assertSuccess } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src'
import { ENV_ETHEREUM_RPC_URL } from '../../src/config'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const jobID = '1'
  const execute = makeExecute()
  process.env[ENV_ETHEREUM_RPC_URL] = process.env[ENV_ETHEREUM_RPC_URL] || 'http://localhost:8546/'

  describe('successful calls', () => {
    const requests = [
      {
        name: 'id not supplied',
        testData: {
          data: {
            endpoint: 'calcGav',
            calculatorContract: '0x0b2cBB1974f17700531439E3e4AfF5e5D2AADD4A',
            vaultProxy: '0x44902e5a88371224d9ac172e391C64257B701Ade',
          },
        },
      },
      {
        name: 'calculatorContract/vaultProxy',
        testData: {
          id: jobID,
          data: {
            endpoint: 'calcGav',
            calculatorContract: '0x0b2cBB1974f17700531439E3e4AfF5e5D2AADD4A',
            vaultProxy: '0x44902e5a88371224d9ac172e391C64257B701Ade',
          },
        },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        const data = await execute(req.testData as AdapterRequest<TInputParameters>, {})
        assertSuccess({ expected: 200, actual: data.statusCode }, data, jobID)
        expect(Number(data.result)).toBeGreaterThan(0)
        expect(Number(data.data.result)).toBeGreaterThan(0)
      })
    })
  })

  describe('error calls', () => {
    const requests = [
      {
        name: 'unknown calculatorContract',
        testData: {
          id: jobID,
          data: {
            endpoint: 'calcGav',
            calculatorContract: '0x0000000000000000000000000000000000000000',
            vaultProxy: '0x44902e5a88371224d9ac172e391C64257B701Ade',
          },
        },
      },
      {
        name: 'unknown vaultProxy',
        testData: {
          id: jobID,
          data: {
            endpoint: 'calcGav',
            calculatorContract: '0x0b2cBB1974f17700531439E3e4AfF5e5D2AADD4A',
            vaultProxy: '0x0000000000000000000000000000000000000000',
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
          assertError({ expected: 500, actual: errorResp.statusCode }, errorResp, jobID)
        }
      })
    })
  })
})
