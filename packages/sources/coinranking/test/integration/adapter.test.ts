import { AdapterRequest } from '@plugin/ea-bootstrap'
import * as process from 'process'
import { server as startServer } from '../../src'
import {
  mockCryptoResponseFailure,
  mockCryptoResponseSuccess,
  mockReferenceCurrenciesSuccess,
  mockTotalMarketCapSuccess,
} from './fixtures'
import { setupExternalAdapterTest } from '@plugin/ea-test-helpers'
import type { SuiteContext } from '@plugin/ea-test-helpers'
import { SuperTest, Test } from 'supertest'

describe('execute', () => {
  const id = '1'

  const context: SuiteContext = {
    req: null,
    server: startServer,
  }

  const envVariables = {
    CACHE_ENABLED: 'false',
    API_KEY: process.env.API_KEY || 'fake-api-key',
  }

  setupExternalAdapterTest(envVariables, context)

  describe('crypto api', () => {
    const data: AdapterRequest = {
      id,
      data: {
        base: 'ETH',
        quote: 'USD',
      },
    }

    it('should return success', async () => {
      mockCryptoResponseSuccess()

      const response = await (context.req as SuperTest<Test>)
        .post('/')
        .send(data)
        .set('Accept', '*/*')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      expect(response.body).toMatchSnapshot()
    })
  })

  describe('marketcap api', () => {
    const data: AdapterRequest = {
      id,
      data: {
        endpoint: 'marketcap',
        base: 'ETH',
        quote: 'USD',
      },
    }

    it('should return success', async () => {
      mockReferenceCurrenciesSuccess()
      mockCryptoResponseSuccess()

      const response = await (context.req as SuperTest<Test>)
        .post('/')
        .send(data)
        .set('Accept', '*/*')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      expect(response.body).toMatchSnapshot()
    })
  })

  describe('crypto api with invalid base', () => {
    const data: AdapterRequest = {
      id,
      data: {
        base: 'non-existing',
        quote: 'USD',
      },
    }

    it('should return failure', async () => {
      mockReferenceCurrenciesSuccess()
      mockCryptoResponseFailure()

      const response = await (context.req as SuperTest<Test>)
        .post('/')
        .send(data)
        .set('Accept', '*/*')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(500)
      expect(response.body).toMatchSnapshot()
    })
  })

  describe('totalMarketCap api', () => {
    const data: AdapterRequest = {
      id,
      data: {
        endpoint: 'totalMarketCap',
      },
    }

    it('should return success', async () => {
      mockTotalMarketCapSuccess()

      const response = await (context.req as SuperTest<Test>)
        .post('/')
        .send(data)
        .set('Accept', '*/*')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      expect(response.body).toMatchSnapshot()
    })
  })

  describe('globalmarketcap endpoint alias', () => {
    const data: AdapterRequest = {
      id,
      data: {
        endpoint: 'globalmarketcap',
      },
    }

    it('should return success', async () => {
      mockTotalMarketCapSuccess()

      const response = await (context.req as SuperTest<Test>)
        .post('/')
        .send(data)
        .set('Accept', '*/*')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      expect(response.body).toMatchSnapshot()
    })
  })
})
