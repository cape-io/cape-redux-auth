import { conforms, flow, get, isString, negate, overEvery, property, size } from 'lodash'
import { eq } from 'lodash/fp'
import { select } from 'cape-select'
import { entitySelector } from 'redux-graph'

export const selectAuth = property('auth')
export const selectAuthUser = select(selectAuth, 'user')
export const selectUid = select(selectAuthUser, 'id')
export const selectToken = select(selectAuth, 'token')

export const isUserRef = overEvery(
  conforms({ id: isString, type: isString }),
  flow(size, eq(1))
)

export function selectUser(state) {
  const usr = selectAuthUser(state)
  if (isUserRef(usr)) return get(entitySelector(state), usr.id, usr)
  return usr
}
export const isAuthenticated = select(selectAuth, 'authenticated')
export const isAnonymous = negate(isAuthenticated)
