import negate from 'lodash/negate'
import property from 'lodash/property'
import { select } from 'cape-select'

export const selectAuth = property('auth')
export const selectUser = select(selectAuth, 'user')
export const isAuthenticated = select(selectAuth, 'authenticated')
export const isAnonymous = negate(isAuthenticated)
export const selectUid = select(selectUser, 'id')
