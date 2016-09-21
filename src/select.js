import negate from 'lodash/negate'
import property from 'lodash/property'
import { select } from 'cape-select'

export const selectAuth = property('auth')
export const selectUser = select('user', selectAuth)
export const isAuthenticated = select('authenticated', selectAuth)
export const isAnonymous = negate(isAuthenticated)
export const selectUid = select('id', selectUser)
