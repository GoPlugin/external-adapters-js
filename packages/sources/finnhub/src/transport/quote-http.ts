import { config } from '../config'
import { BaseEndpointTypes, buildSymbol } from '../endpoint/quote'
import { HttpTransport } from '@plugin/external-adapter-framework/transports'
import { makeLogger } from '@plugin/external-adapter-framework/util'
import { parseResult } from './utils'

const logger = makeLogger('Finnhub quote endpoint REST')
interface ProviderResponseBody {
  c: number
  d: number
  dp: number
  h: number
  l: number
  o: number
  pc: number
  t: number
}

export type HttpTransportTypes = BaseEndpointTypes & {
  Provider: {
    RequestBody: never
    ResponseBody: ProviderResponseBody
  }
}

export const httpTransport = new HttpTransport<HttpTransportTypes>({
  prepareRequests: (params, settings: typeof config.settings) => {
    return params.map((param) => {
      const symbol = buildSymbol(param)
      const requestConfig = {
        baseURL: `${settings.API_ENDPOINT}/quote`,
        method: 'GET',
        params: {
          symbol,
          token: settings.API_KEY,
        },
      }
      return {
        params: [param],
        request: requestConfig,
      }
    })
  },
  parseResponse: (params, res) => {
    const data = res.data
    if (!data.c) {
      return params.map((param) => {
        const errorMessage = `No data found for ${param.base}`
        logger.info(errorMessage)
        return {
          params: param,
          response: {
            statusCode: 502,
            errorMessage,
          },
        }
      })
    }

    return params.map((param) => {
      const result = parseResult(param.base, data.c)

      return {
        params: param,
        response: {
          data: {
            result,
          },
          result,
        },
      }
    })
  },
})
