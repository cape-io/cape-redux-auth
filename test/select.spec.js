import test from 'tape'
import { isFunction } from 'lodash'

import { selectAuth, selectUser } from '../src'

import { state } from './mock'

test('selectAuth', (t) => {
  t.ok(isFunction(selectAuth))
  t.equal(selectAuth(state), state.auth)
  t.end()
})
test('selectUser', (t) => {
  t.equal(selectUser(state), state.auth.user)
  t.end()
})
