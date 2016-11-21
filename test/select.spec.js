import test from 'tape'
import { isFunction } from 'lodash'

import reducer, { login, selectAuth, selectAuthUser, selectUser } from '../src'
import { initialState } from '../src/reducer'

import { state, state2 } from './mock'

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
test('selectUser', (t) => {
  t.equal(selectUser(state), initialState.user)
  t.equal(selectUser(state2), state2.auth.user)
  const newUsr = { id: 'kai1', type: 'Person' }
  const action = login(newUsr)
  const ste3 = {
    ...state2,
    auth: reducer(state2.auth, action),
  }
  t.equal(ste3.auth.user, newUsr)
  t.equal(selectUser(ste3), ste3.graph2.Person.kai1)
  t.end()
})

// const state2 = {
//   ...state,
//   auth: reducer(state.auth, action),
// }
//
