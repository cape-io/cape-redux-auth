import { initialState } from '../src/reducer'

const graph2 = { Person: { kai1: { id: 'kai1', type: 'Person', name: 'Kai Curry' } } }

export const state = {
  auth: initialState,
  graph2,
}
export const state2 = {
  auth: {
    ...initialState,
    authenticated: true,
    user: { name: 'curry' },
  },
  graph2,
}
