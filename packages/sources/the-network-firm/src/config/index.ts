import { AdapterConfig } from '@plugin/external-adapter-framework/config'

export const config = new AdapterConfig({
  API_ENDPOINT: {
    description: 'API Endpoint to use',
    type: 'string',
    default: 'https://api.oracle-services.ledgerlens.io/v1/plugin/proof-of-reserves/',
  },
})
