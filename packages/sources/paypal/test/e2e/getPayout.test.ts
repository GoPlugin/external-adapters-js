import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError, assertSuccess } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src/adapter'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const jobID = '1'
  process.env.MODE = 'sandbox'
  const execute = makeExecute()

  const batch_id = process.env.PAYOUT_ID_BATCH ?? 'DNPMSBKRYB4AN'
  const item_id = process.env.PAYOUT_ID_ITEM ?? 'Y7L245ABZLPZU'

  describe('successful calls @integration', () => {
    const requests = [
      {
        name: 'id not supplied',
        testData: { data: { endpoint: 'getpayout', payout_id: batch_id } },
      },
      {
        name: 'read endpoint used',
        testData: { data: { endpoint: 'read', payout_id: batch_id } },
      },
      {
        name: 'type not supplied',
        testData: { id: jobID, data: { endpoint: 'getpayout', payout_id: batch_id } },
      },
      {
        name: 'BATCH type supplied',
        testData: {
          id: jobID,
          data: { endpoint: 'getpayout', payout_id: batch_id, type: 'BATCH' },
        },
      },
      {
        name: 'ITEM type supplied',
        testData: { id: jobID, data: { endpoint: 'getpayout', payout_id: item_id, type: 'ITEM' } },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        const data = await execute(req.testData as AdapterRequest<TInputParameters>, {})
        assertSuccess({ expected: 200, actual: data.statusCode }, data, jobID)
      })
    })
  })

  describe('error calls @integration', () => {
    const requests = [
      {
        name: 'unknown BATCH',
        testData: {
          id: jobID,
          data: { endpoint: 'getpayout', payout_id: 'not_real', type: 'BATCH' },
        },
      },
      {
        name: 'unknown ITEM',
        testData: {
          id: jobID,
          data: { endpoint: 'getpayout', payout_id: 'not_real', type: 'ITEM' },
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
