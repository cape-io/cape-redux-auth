import noop from 'lodash/noop'

import { createAction } from 'cape-redux'
import { createHistory } from 'redux-history-sync'

// The comment above export defines the expected payload to the action creator.
// No comment, no payload expected.

// User object.
export const LOGIN = 'auth/LOGIN'
export const login = createAction(LOGIN)
// Login and redirect.
export function loginRedirect(user, destination) {
  if (!destination) throw new Error('loginRedirect requires a user obj and destination str.')
  return (dispatch) => {
    dispatch(login(user))
    dispatch(createHistory(destination))
  }
}
// Logout the user.
export const LOGOUT = 'auth/LOGOUT'
function logoutMeta() {
  return { cookie: { name: 'sid' } }
}
export const logout = createAction(LOGOUT, noop, logoutMeta)

// Set the sid cookie token.
export const TOKEN = 'auth/TOKEN_SET'
export const tokenSet = createAction(TOKEN)
export const TOKEN_REQ = 'auth/TOKEN_REQ'
export const tokenReq = createAction(TOKEN_REQ)
// Email choice if user has more than one email. Must be associated with account.
export const TOKEN_SEND = 'auth/TOKEN_SEND'
export const tokenSend = createAction(TOKEN_SEND)
// Email string.
export const TOKEN_SENT = 'auth/TOKEN_SENT'
export const tokenSent = createAction(TOKEN_SENT)
// Token string.
export const TOKEN_VALIDATE = 'auth/TOKEN_VALIDATE'
export const tokenValidate = createAction(TOKEN_VALIDATE)
// User ID string. Sent from server in response to email.
export const USER_ID = 'auth/USER_ID'
export const setUserId = createAction(USER_ID)
export const USER_NEW = 'auth/USER_NEW'
export const userNew = createAction(USER_NEW)
export const setUser = userNew
