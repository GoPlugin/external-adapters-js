import { AdapterResponse, Requester } from '@plugin/ea-bootstrap'
import { AdapterRequest, AxiosResponse, AxiosRequestConfig } from '@plugin/ea-bootstrap'

export type PriceAdapter = (input: AdapterRequest) => Promise<AxiosResponse<AdapterResponse>>

export const getDataProvider =
  (apiConfig: AxiosRequestConfig): PriceAdapter =>
  async (input) =>
    Requester.request({ ...apiConfig, data: input })
