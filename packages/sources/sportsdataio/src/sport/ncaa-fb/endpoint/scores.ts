import { AxiosResponse, util, InputParameters, Requester, Validator } from '@plugin/ea-bootstrap'
import { ExecuteWithConfig } from '@plugin/ea-bootstrap'
import { Config } from '../../../config'

export const NAME = 'scores'

export type TInputParameters = { season: string | number }
export const customParams: InputParameters<TInputParameters> = {
  season: {
    required: true,
    description: 'The season to get scores from',
  },
}

export const execute: ExecuteWithConfig<Config> = async (request, _, config) => {
  const validator = new Validator(request, customParams)

  const jobRunID = validator.validated.id
  const season = validator.validated.data.season
  const url = util.buildUrlPath('/cfb/scores/json/Games/:season', { season })

  const params = {
    key: config.cfbScoresKey,
  }

  const options = { ...config.api, params, url }

  const response: AxiosResponse = await Requester.request(options)
  response.data.result = response.data

  return Requester.success(jobRunID, response, config.verbose)
}
