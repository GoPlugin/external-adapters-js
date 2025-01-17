import { AdapterError, Requester } from '@plugin/ea-bootstrap'
import { assertError, assertSuccess } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src/adapter'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const jobID = '1'
  process.env.MODE = 'sandbox'
  const execute = makeExecute()

  const amount = '0.01'
  const receiver = 'test@test.com'

  describe('successful calls @integration', () => {
    const requests = [
      {
        name: 'id not supplied',
        testData: { data: { amount, receiver } },
      },
      {
        name: 'endpoint not supplied',
        testData: { id: jobID, data: { amount, receiver } },
      },
      {
        name: 'endpoint supplied',
        testData: {
          id: jobID,
          data: { endpoint: 'sendpayout', amount, receiver },
        },
      },
      {
        name: 'write supplied',
        testData: {
          id: jobID,
          data: { endpoint: 'write', amount, receiver },
        },
      },
      {
        name: 'optional parameters supplied',
        testData: {
          id: jobID,
          data: {
            amount,
            receiver,
            currency: 'USD',
            recipient_type: 'EMAIL',
            note: 'hello!',
            sender_item_id: '0x01',
            email_subject: 'test tx',
            email_message: 'this is only a test',
          },
        },
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        const data = await execute(req.testData as AdapterRequest<TInputParameters>, {})
        assertSuccess({ expected: 201, actual: data.statusCode }, data, jobID)
      })
    })
  })

  describe('error calls @integration', () => {
    const requests = [
      {
        name: 'send 0.00',
        testData: {
          id: jobID,
          data: {
            amount: '0.00',
            receiver,
            currency: 'USD',
            recipient_type: 'EMAIL',
            note: 'hello!',
            sender_item_id: '0x01',
            email_subject: 'test tx',
            email_message: 'this is only a test',
          },
        },
      },
      {
        name: 'send unknown currency',
        testData: {
          id: jobID,
          data: { amount, receiver, currency: 'not_real' },
        },
      },
      {
        name: 'receiver type incorrect',
        testData: {
          id: jobID,
          data: { amount, receiver, recipient_type: 'PHONE' },
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
