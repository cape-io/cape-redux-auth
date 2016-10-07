import { initialState } from '../src/reducer'

export const state = {
  auth: initialState,
}
export const state2 = {
  auth: null,
  authenticated: true,
  sid: null,
  tokenSent: false,
  tokenSending: false,
  tokenValid: true,
  tokenValidating: false,
  user: { name: 'curry' },
}
