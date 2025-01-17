import { util } from '@plugin/ea-bootstrap'
import { AxiosRequestConfig } from '@plugin/ea-bootstrap'

export const NAME = 'GOOGLE_BIGQUERY'

export type Config = {
  projectId?: string
  keyFilename?: string
  email?: string
  autoRetry: boolean
  maxRetries: number
  location?: string
  api: AxiosRequestConfig
}

export const makeConfig = (prefix?: string): Config => ({
  projectId: util.getEnv('PROJECT_ID', prefix),
  keyFilename: util.getEnv('KEY_FILENAME', prefix),
  autoRetry: util.parseBool(util.getEnv('AUTO_RETRY', prefix) || true),
  maxRetries: parseInt(util.getEnv('MAX_RETRIES', prefix) || '3'),
  location: util.getEnv('LOCATION', prefix),
  api: {},
})
