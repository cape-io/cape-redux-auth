import test from 'tape'
import { isFunction } from 'lodash'

import { login } from '../src'

import { state } from './mock'

test('login', (t) => {
  t.ok(isFunction(login))
  t.deepEqual(login({ id: 'abc' }), { type: 'auth/LOGIN', payload: { id: 'abc' } })
  t.end()
})
