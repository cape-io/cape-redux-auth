import { constant, identity } from 'lodash'
import { createReducer, fpMerge as merge, set, setIn } from 'cape-redux'

import {
  LOGIN, LOGOUT, TOKEN, TOKEN_REQ, USER_ID,
} from './actions'

export const defaultUser = { id: 'anonUser', type: 'Person', name: 'Anonymous' }

export const initialState = {
  auth: null,
  authenticated: false,
  sid: null,
  token: null,
  tokenSent: false,
  tokenSending: false,
  tokenValid: null,
  tokenValidating: false,
  user: defaultUser,
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
function wPay(actionReducer) {
  return (state, action) => actionReducer(state, action.payload)
}
export const reducers = {
  [LOGIN]: setUser,
  [LOGOUT]: constant(initialState),
  [TOKEN]: wPay(set('token')),
  [TOKEN_REQ]: merge({ tokenSending: true }),
  // [TOKEN_SEND]: (state) => ({ ...state, tokenSent: false, tokenSending: true }),
  // [TOKEN_VALIDATE]: state => state.set('tokenValidating', true),
  [USER_ID]: wPay(setIn([ 'user', 'id' ])),
}
export const opts = { skipErrors: false, actionPick: identity }
const reducer = createReducer(reducers, initialState, opts)
export default reducer
