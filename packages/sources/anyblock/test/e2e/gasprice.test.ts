import { assertSuccess } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src/adapter'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const jobID = '1'
  const execute = makeExecute()

  describe('successful calls @integration', () => {
    const requests = [
      {
        name: 'no speed param',
        testData: {
          id: jobID,
          data: {
            endpoint: 'gasprice',
          },
        },
      },
      {
        name: 'id not supplied',
        testData: {
          data: {
            endpoint: 'gasprice',
            speed: 'fast',
          },
        },
      },
      {
        name: 'speed is standard',
        testData: {
          id: jobID,
          data: {
            endpoint: 'gasprice',
            speed: 'standard',
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
})
