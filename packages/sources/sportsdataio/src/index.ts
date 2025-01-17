import { expose } from '@plugin/ea-bootstrap'
import { makeExecute } from './adapter'
import { makeConfig, NAME } from './config'

const adapterContext = { name: NAME }

const { server } = expose(adapterContext, makeExecute(), undefined)
export { NAME, makeExecute, makeConfig, server }
