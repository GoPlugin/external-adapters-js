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
      { name: 'empty body', testData: {} },
      { name: 'empty data', testData: { data: {} } },
      {
        name: 'lat not supplied',
        testData: {
          id: jobID,
          data: {
            lat: '',
            lng: '11.9202',
            radius: '500000',
            start: '2021-01-01 00:00:00',
            end: '2021-02-21 02:30:00',
          },
        },
      },
      {
        name: 'lng not supplied',
        testData: {
          id: jobID,
          data: {
            lat: '45.7905',
            radius: '500000',
            start: '2021-01-01 20:00:00',
            end: '2021-02-21 20:30:00',
          },
        },
      },
      {
        name: 'radius not supplied',
        testData: {
          id: jobID,
          data: {
            lat: '45.7905',
            lng: '11.9202',
            start: '2021-01-01 20:00:00',
            end: '2021-02-21 20:30:00',
          },
        },
      },
      {
        name: 'start not supplied',
        testData: {
          id: jobID,
          data: {
            lat: '45.7905',
            lng: '11.9202',
            radius: '500000',
            end: '2021-02-21 20:30:00',
          },
        },
      },
      {
        name: 'end not supplied',
        testData: {
          id: jobID,
          data: {
            lat: '45.7905',
            lng: '11.9202',
            radius: '500000',
            start: '2021-01-01 20:00:00',
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
