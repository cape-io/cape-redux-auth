import test from 'tape'
import { isFunction } from 'lodash'

import reducer, { hasIdOnly, login, selectAuth, selectAuthUser, selectUser } from '../src'

import { state } from './mock'

test('selectAuth', (t) => {
  t.ok(isFunction(selectAuth))
  t.equal(selectAuth(state), state.auth)
  t.end()
})
test('selectAuthUser', (t) => {
  t.equal(state.auth.user.id, 'anonUser')
  t.equal(selectAuthUser(state), state.auth.user)
  t.end()
})
const action = login({ id: 'kai' })
const state2 = {
  ...state,
  auth: reducer(state.auth, action),
}
test('hasIdOnly', (t) => {
  const usr = selectAuthUser(state)
  t.false(hasIdOnly(usr))
  t.true(selectAuthUser(state2))
  t.end()
})
test('selectUser', (t) => {
  t.equal(selectUser(state), state.auth.user)
  t.deepEqual(state2.auth.user, { id: 'kai' }, 'sets user correctly')
  const kai = state.graph.entity.kai
  const usr = selectUser(state2)
  t.equal(usr, kai, 'gets graph.entity[id]')
  t.end()
})
