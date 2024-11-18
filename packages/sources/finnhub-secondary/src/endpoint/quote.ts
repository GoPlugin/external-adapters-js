import { buildQuoteEndpoint } from '@plugin/finnhub-adapter'
import overrides from '../config/overrides.json'

export const endpoint = buildQuoteEndpoint(overrides.finnhub)
