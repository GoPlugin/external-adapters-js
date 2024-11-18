import { expose } from '@plugin/ea-bootstrap'
import { makeConfig, NAME } from './config'
import { makeExecute } from './adapter'

const adapterContext = { name: NAME }

const { server } = expose(adapterContext, makeExecute())

export { NAME, makeExecute, makeConfig, server }
