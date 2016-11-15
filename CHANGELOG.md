## 2.1.0

- Remove `sid` from reducer.
- Handle `USER_NEW` in reducer.
- Adjusted `isUserRef()`.

## 1.1.1

- `login({...user})` now correctly replaces the state.user with the payload instead of setting only id.

## 1.1.0

- Decided to create a thunk action `loginRedirect(user, location)` to allow logging in and redirect using `redux-history-sync`.
- `selectUser()` now returns `graph.entity[selectUse().uid]` if user in state is an object with a single `id` prop.
