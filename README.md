# cape-redux-auth v1.0.1

An example redux reducer for handling some authentication state.

## Actions

- `login(user)` Saves user object to `auth`.
- `loginRedirect(user, location)` thunk action allow logging in and redirect using `redux-history-sync`.

## Selectors

- `selectUser()` Returns `auth.user` or `graph.entity[selectUse().uid]` if user in state is an object with a single `id` prop.
