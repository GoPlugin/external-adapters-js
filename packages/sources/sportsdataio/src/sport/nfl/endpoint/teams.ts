import { AxiosResponse, InputParameters, Requester, Validator } from '@plugin/ea-bootstrap'
import { ExecuteWithConfig } from '@plugin/ea-bootstrap'
import { Config } from '../../../config'

export const NAME = 'teams'

export type TInputParameters = Record<string, never>
export const customParams: InputParameters<TInputParameters> = {}

export const execute: ExecuteWithConfig<Config> = async (request, _, config) => {
  const validator = new Validator(request, customParams)

  const jobRunID = validator.validated.id
  const url = `/nfl/scores/json/Teams`

  const params = {
    key: config.nflScoresKey,
  }

  const options = { ...config.api, params, url }

  const response: AxiosResponse = await Requester.request(options)
  response.data.result = response.data

  return Requester.success(jobRunID, response, config.verbose)
}
