import immutable from 'seamless-immutable'
import { constant, identity } from 'lodash'
import { createReducer, imSet } from 'cape-redux'

import {
  LOGIN, LOGOUT, PROVIDERS, TOKEN_SEND, TOKEN_SENT, TOKEN_VALIDATE, USER_ID,
} from './actions'

export const defaultUser = { id: 'anonUser', type: 'Person', name: 'Anonymous' }

export const initialState = immutable({
  auth: null,
  authenticated: false,
  sid: null,
  tokenSent: false,
  tokenSending: false,
  tokenValid: null,
  tokenValidating: false,
  user: defaultUser,
})
function setUserId(state, { error, payload }) {
  return error ? state.setIn([ 'user', 'id' ], payload) : state
}
function setUser(state, { error, payload }) {
  const { authenticated, tokenSending, tokenValidating } = initialState
  return state.merge({
    authenticated: error ? authenticated : true,
    tokenSending,
    tokenValid: !error,
    tokenValidating,
    user: payload,
  })
}
export const reducers = {
  [LOGIN]: setUser,
  [LOGOUT]: constant(initialState),
  [PROVIDERS]: imSet('providers'),
  [TOKEN_SEND]: (state, payload) => state.merge({ tokenSent: false, tokenSending: payload }),
  [TOKEN_SENT]: (state, payload) => state.merge({ tokenSent: payload, tokenSending: false }),
  [TOKEN_VALIDATE]: state => state.set('tokenValidating', true),
  [USER_ID]: setUserId,
}
export const opts = { skipErrors: false, actionPick: identity }
const reducer = createReducer(reducers, initialState, opts)
export default reducer
