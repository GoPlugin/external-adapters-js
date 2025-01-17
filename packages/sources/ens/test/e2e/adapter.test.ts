import { AdapterRequest } from '@plugin/ea-bootstrap'
import { makeExecute } from '../../src/adapter'
import { TInputParameters } from '../../src/endpoint'

describe('execute', () => {
  const execute = makeExecute()

  describe('successful calls', () => {
    const requests = [{ name: 'success', testData: { data: { ensName: 'plugin.eth' } } }]

    requests.forEach((req) => {
      it(`${req.name}`, async () => {
        const response = await execute(req.testData as AdapterRequest<TInputParameters>, {})
        expect(response.statusCode).toEqual(200)
      })
    })
  })
})
