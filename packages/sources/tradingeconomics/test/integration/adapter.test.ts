import { mockResponseSuccess } from './fixtures'
import {
  TestAdapter,
  setEnvVariables,
} from '@plugin/external-adapter-framework/util/testing-utils'
import * as nock from 'nock'

describe('execute', () => {
  let spy: jest.SpyInstance
  let testAdapter: TestAdapter
  let oldEnv: NodeJS.ProcessEnv

  beforeAll(async () => {
    oldEnv = JSON.parse(JSON.stringify(process.env))
    process.env['API_CLIENT_KEY'] = process.env['API_CLIENT_KEY'] || 'fake-api-key'
    process.env['API_CLIENT_SECRET'] = process.env['API_CLIENT_SECRET'] || 'fake-api-secret'
    const mockDate = new Date('2022-01-01T11:11:11.111Z')
    spy = jest.spyOn(Date, 'now').mockReturnValue(mockDate.getTime())

    const adapter = (await import('./../../src')).adapter
    adapter.rateLimiting = undefined
    testAdapter = await TestAdapter.startWithMockedCache(adapter, {
      testAdapter: {} as TestAdapter<never>,
    })
  })

  afterAll(async () => {
    setEnvVariables(oldEnv)
    await testAdapter.api.close()
    nock.restore()
    nock.cleanAll()
    spy.mockRestore()
  })

  describe('rest price endpoint', () => {
    it('should return success', async () => {
      const data = {
        base: 'EUR',
        quote: 'USD',
      }
      mockResponseSuccess()
      const response = await testAdapter.request(data)
      expect(response.statusCode).toBe(200)
      expect(response.json()).toMatchSnapshot()
    })
  })

  describe('rest price endpoint with override', () => {
    it('should return success', async () => {
      const data = {
        base: 'EUR',
        quote: 'XXX',
        overrides: {
          tradingeconomics: {
            EUR: 'EURUSD:CUR',
          },
        },
      }
      mockResponseSuccess()
      const response = await testAdapter.request(data)
      expect(response.statusCode).toBe(200)
      expect(response.json()).toMatchSnapshot()
    })
  })

  describe('rest stock endpoint', () => {
    it('should return success', async () => {
      const data = {
        base: 'AAPL:US',
        endpoint: 'stock',
      }
      mockResponseSuccess()
      const response = await testAdapter.request(data)
      expect(response.statusCode).toBe(200)
      expect(response.json()).toMatchSnapshot()
    })
  })
})
