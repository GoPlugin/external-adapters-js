import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src/adapter'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const jobID = '1'
  const execute = makeExecute()

  describe('validation error', () => {
    const requests = [
      {
        name: 'invalid speed type',
        testData: {
          data: { speed: 1 },
        },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        try {
          await execute(req.testData as unknown as AdapterRequest<TInputParameters>, {})
        } catch (error) {
          const errorResp = Requester.errored(jobID, error as AdapterError)
          assertError({ expected: 400, actual: errorResp.statusCode }, errorResp, jobID)
        }
      })
    })
  })
})
