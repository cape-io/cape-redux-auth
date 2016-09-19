import immutable from 'seamless-immutable'
import constant from 'lodash/constant'
import identity from 'lodash/identity'
import { createReducer } from 'cape-redux'

import {
  LOGIN, LOGOUT, PROVIDERS, TOKEN_SEND, TOKEN_SENT, TOKEN_VALIDATE, USER_ID,
} from './actions'

const initialState = immutable({
  auth: null,
  authenticated: false,
  sid: null,
  tokenSent: false,
  tokenSending: false,
  tokenValid: null,
  tokenValidating: false,
  user: {}, // Probably should use graph.entity instead?
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
    user: {
      id: payload.id,
    },
  })
}
export const reducers = {
  [LOGIN]: setUser,
  [LOGOUT]: constant(initialState),
  [PROVIDERS]: (state, { payload }) => state.set('provider', payload),
  [TOKEN_SEND]: (state, { payload }) => state.merge({ tokenSent: false, tokenSending: payload }),
  [TOKEN_SENT]: (state, { payload }) => state.merge({ tokenSent: payload, tokenSending: false }),
  [TOKEN_VALIDATE]: state => state.set('tokenValidating', true),
  [USER_ID]: setUserId,
}
export const opts = { skipErrors: false, actionPick: identity }
const reducer = createReducer(reducers, initialState, opts)
export default reducer
