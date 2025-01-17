import * as graphqlAdapter from '@plugin/graphql-adapter'
import { GraphqlAdapterRequest } from '../../types'
import { AdapterResponse, AdapterRequest, AdapterData } from '@plugin/ea-bootstrap'

export const fetchFromGraphqlAdapter = async <Response extends AdapterData>(
  jobRunID: string,
  data: GraphqlAdapterRequest,
): Promise<AdapterResponse<Response>> => {
  const graphqlExecute = graphqlAdapter.makeExecute()
  const request: AdapterRequest<GraphqlAdapterRequest> = {
    data,
    id: jobRunID,
  }
  return (await graphqlExecute(request, {})) as AdapterResponse<Response>
}
