import { flow, get, isString, negate, overEvery, property, size } from 'lodash'
import { eq } from 'lodash/fp'
import { select } from 'cape-select'
import { entitySelector } from 'redux-graph'

export const selectAuth = property('auth')
export const selectAuthUser = select(selectAuth, 'user')
export const selectUid = select(selectAuthUser, 'id')

export const hasIdOnly = overEvery(
  flow(property('id'), isString),
  flow(size, eq(1))
)

export function selectUser(state) {
  const usr = selectAuthUser(state)
  if (hasIdOnly(usr)) return get(entitySelector(state), usr.id, usr)
  return usr
}
export const isAuthenticated = select(selectAuth, 'authenticated')
export const isAnonymous = negate(isAuthenticated)
