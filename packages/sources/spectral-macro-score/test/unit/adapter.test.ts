import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src/adapter'
import { IRequestInput } from '../../src/endpoint/macro-score-api'

describe('execute', () => {
  const jobID = '1'
  const execute = makeExecute()

  describe('validation error', () => {
    const requests = [
      { name: 'empty body', testData: {} },
      { name: 'empty data', testData: { id: jobID, data: {} } },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        try {
          await execute(req.testData as AdapterRequest<IRequestInput>, {})
        } catch (error) {
          const errorResp = Requester.errored(jobID, error as AdapterError)
          assertError({ expected: 500, actual: errorResp.statusCode }, errorResp, jobID)
        }
      })
    })
  })
})
