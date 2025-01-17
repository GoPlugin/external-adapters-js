import {
  TestAdapter,
  setEnvVariables,
} from '@plugin/external-adapter-framework/util/testing-utils'
import * as nock from 'nock'
import { mockResponseRipcordTrue, mockResponseSuccess } from './fixtures'

describe('execute', () => {
  let spy: jest.SpyInstance
  let testAdapter: TestAdapter
  let oldEnv: NodeJS.ProcessEnv

  beforeAll(async () => {
    oldEnv = JSON.parse(JSON.stringify(process.env))
    const mockDate = new Date('2001-01-01T11:11:11.111Z')
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

  describe('trueusd endpoint', () => {
    it('should return success', async () => {
      mockResponseSuccess()
      const data = {
        endpoint: 'trueusd',
        field: 'totalTrust',
      }
      const response = await testAdapter.request(data)
      expect(response.statusCode).toBe(200)
      expect(response.json()).toMatchSnapshot()
    })

    it('should return 502 when field dne', async () => {
      mockResponseSuccess()
      const data = {
        endpoint: 'trueusd',
        field: 'invalidField',
      }
      const response = await testAdapter.request(data)
      expect(response.statusCode).toBe(502)
      expect(response.json()).toMatchSnapshot()
    })

    it('should return 502 when ripcord: true', async () => {
      nock.cleanAll()
      mockResponseRipcordTrue()
      const data = {
        endpoint: 'trueusd',
        field: 'totalToken',
      }
      const response = await testAdapter.request(data)
      expect(response.statusCode).toBe(502)
      expect(response.json()).toMatchSnapshot()
    })
  })
})
