import { expose } from '@plugin/ea-bootstrap'
import { makeExecute, endpointSelector, makeWSHandler } from './adapter'
import * as endpoints from './endpoint'
import { makeConfig, NAME } from './config'
import rateLimit from './config/limits.json'

const adapterContext = { name: NAME, rateLimit }

const { server } = expose(adapterContext, makeExecute(), makeWSHandler(), endpointSelector)
export { NAME, endpoints, makeExecute, makeConfig, server }
