import { AdapterError } from '@plugin/ea-bootstrap'
import { assertSuccess } from '@plugin/ea-test-helpers'
import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src'
import { Config } from '../../src/config'
import { PriceAdapter } from '../../src/dataProvider'
import { TInputParameters } from '../../src/adapter'

const result = 123

const scheduleAlwaysClosed = {
  timezone: 'Europe/Oslo',
  hours: {
    monday: ['24:00-24:01'],
    tuesday: ['24:00-24:01'],
    wednesday: ['24:00-24:01'],
    thursday: ['24:00-24:01'],
    friday: ['24:00-24:01'],
    saturday: ['24:00-24:01'],
    sunday: ['24:00-24:01'],
  },
  holidays: [],
}

const adapter = (type: string): PriceAdapter => {
  if (type !== 'success') {
    return async (input: AdapterRequest) => {
      throw new AdapterError({ jobRunID: input.id })
    }
  }

  const value = async (input: AdapterRequest) => {
    return {
      jobRunID: input.id,
      statusCode: 200,
      data: { result },
      result,
    }
  }

  return value as unknown as PriceAdapter
}

const makeMockConfig = (): Config => {
  return {
    getPriceAdapter: adapter,
  }
}

describe('executeWithAdapters', () => {
  describe('successful calls', () => {
    const jobID = 'abc123'

    const requests = [
      {
        name: 'successful adapter call',
        input: {
          id: jobID,
          data: {
            asset: 'FTSE',
            contract: '0x00',
            multiply: 1,
            source: 'success',
            check: 'schedule',
            schedule: {},
          },
        },
      },
      {
        name: 'trading halted, use meta data',
        input: {
          id: jobID,
          data: {
            asset: 'FTSE',
            contract: '0x00',
            multiply: 1,
            source: 'fails',
            check: 'schedule',
            schedule: scheduleAlwaysClosed,
          },
          meta: { latestAnswer: result },
        },
        halted: true,
      },
    ]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        const execute = makeExecute(makeMockConfig())
        const data = await execute(req.input as unknown as AdapterRequest<TInputParameters>, {})
        assertSuccess({ expected: 200, actual: data.statusCode }, data, jobID)
        expect(data.result).toEqual(result)
        expect(data.data.result).toEqual(result)
      })
    })
  })
})
