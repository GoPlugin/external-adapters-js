import { buildHttpRequestBody, constructEntries, HttpTransportTypes } from './utils'
import { HttpTransport } from '@plugin/external-adapter-framework/transports'

export const transport = new HttpTransport<HttpTransportTypes>({
  prepareRequests: (params, config) => {
    return buildHttpRequestBody(params, config)
  },
  parseResponse: (params, res) => {
    return constructEntries(res.data, params, 'latestPrice')
  },
})
