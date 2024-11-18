import { TransportDependencies } from '@plugin/external-adapter-framework/transports'
import { ResponseCache } from '@plugin/external-adapter-framework/cache/response'
import { Requester } from '@plugin/external-adapter-framework/util/requester'
import { AdapterResponse, sleep, makeLogger } from '@plugin/external-adapter-framework/util'
import { SubscriptionTransport } from '@plugin/external-adapter-framework/transports/abstract/subscription'
import { EndpointContext } from '@plugin/external-adapter-framework/adapter'
import { BaseEndpointTypes, inputParameters } from '../endpoint/reserve'
import { AdapterError } from '@plugin/external-adapter-framework/validation/error'
import { getFund } from './fund'
import { getFundNav } from './fundNav'
import { getApiKeys } from './utils'

const logger = makeLogger('NavConsultingTransport')

type RequestParams = typeof inputParameters.validated

export class NavConsultingTransport extends SubscriptionTransport<BaseEndpointTypes> {
  name!: string
  responseCache!: ResponseCache<BaseEndpointTypes>
  requester!: Requester
  settings!: BaseEndpointTypes['Settings']
  url!: string

  async initialize(
    dependencies: TransportDependencies<BaseEndpointTypes>,
    adapterSettings: BaseEndpointTypes['Settings'],
    endpointName: string,
    transportName: string,
  ): Promise<void> {
    await super.initialize(dependencies, adapterSettings, endpointName, transportName)
    this.requester = dependencies.requester
    this.url = adapterSettings.API_ENDPOINT
    this.settings = adapterSettings
  }
  async backgroundHandler(context: EndpointContext<BaseEndpointTypes>, entries: RequestParams[]) {
    await Promise.all(entries.map(async (param) => this.handleRequest(param)))
    await sleep(context.adapterSettings.BACKGROUND_EXECUTE_MS)
  }

  async handleRequest(param: RequestParams) {
    let response: AdapterResponse<BaseEndpointTypes['Response']>
    try {
      response = await this._handleRequest(param)
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Unknown error occurred'
      logger.error(e, errorMessage)
      response = {
        statusCode: (e as AdapterError)?.statusCode || 502,
        errorMessage,
        timestamps: {
          providerDataRequestedUnixMs: 0,
          providerDataReceivedUnixMs: 0,
          providerIndicatedTimeUnixMs: undefined,
        },
      }
    }
    await this.responseCache.write(this.name, [{ params: param, response }])
  }

  async _handleRequest(
    param: RequestParams,
  ): Promise<AdapterResponse<BaseEndpointTypes['Response']>> {
    const providerDataRequestedUnixMs = Date.now()

    const [apiKey, secret] = getApiKeys(param.fund)

    const [fundId, date] = await getFund(this.url, apiKey, secret, this.requester)

    const nav = await getFundNav(fundId, date, this.url, apiKey, secret, this.requester)

    return {
      data: {
        result: nav,
      },
      statusCode: 200,
      result: nav,
      timestamps: {
        providerDataRequestedUnixMs,
        providerDataReceivedUnixMs: Date.now(),
        providerIndicatedTimeUnixMs: new Date(date).valueOf(),
      },
    }
  }

  getSubscriptionTtlFromConfig(adapterSettings: BaseEndpointTypes['Settings']): number {
    return adapterSettings.WARMUP_SUBSCRIPTION_TTL
  }
}

export const navConsultingTransport = new NavConsultingTransport()
