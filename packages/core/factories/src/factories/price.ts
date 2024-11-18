import { Config, Execute, ExecuteFactory } from '@plugin/ea-bootstrap'
// TODO make new Config type for implementation factories
export const make: ExecuteFactory<Config> = () => {
  return {} as Execute // Placeholder
}
