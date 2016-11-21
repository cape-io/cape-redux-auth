import test from 'tape'
import { isFunction } from 'lodash'

import reducer, { login } from '../src'
import { defaultUser } from '../src/reducer'

test('initState', (t) => {
  t.deepEqual(reducer(undefined, {}).user, defaultUser)
  t.end()
})

test('reducer login', (t) => {
  t.ok(isFunction(reducer))
  const st1 = reducer(undefined, login({ id: 'foo', name: 'kai' }))
  t.ok(st1.authenticated)
  t.false(st1.tokenSending)
  t.ok(st1.tokenValid)
  t.false(st1.tokenValidating)
  t.equal(st1.user.id, 'foo')
  t.deepEqual(st1.user, { id: 'foo', name: 'kai' })
  const st2 = reducer(st1, login({ name: 'curry' }))
  t.deepEqual(st2.user, { name: 'curry' })
  // t.deepEqual(st2, state2)
  t.end()
})
