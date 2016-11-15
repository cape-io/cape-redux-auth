import { initialState } from '../src/reducer'

export const state = {
  auth: initialState,
  graph: { entity: { kai: { id: 'kai', type: 'Person', name: 'Kai Curry' } } },
}
export const state2 = {
  auth: null,
  authenticated: true,
  token: null,
  tokenSent: false,
  tokenSending: false,
  tokenValid: true,
  tokenValidating: false,
  user: { name: 'curry' },
}
