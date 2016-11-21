import { defaultTo, negate, property } from 'lodash'
import { select } from 'cape-select'
import { getEntity, isEntityCreated } from '@kaicurry/redux-graph'

export const selectAuth = property('auth')
export const selectAuthUser = select(selectAuth, 'user')
export const selectUid = select(selectAuthUser, 'id')
export const selectToken = select(selectAuth, 'token')

export function selectUser(state) {
  const usr = selectAuthUser(state)
  if (isEntityCreated(usr)) {
    return defaultTo(getEntity(state, usr), usr)
  }
  return usr
}
export const isAuthenticated = select(selectAuth, 'authenticated')
export const isAnonymous = negate(isAuthenticated)
