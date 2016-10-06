## 1.1.0

- Decided to create a thunk action `loginRedirect(user, location)` to allow logging in and redirect using `redux-history-sync`.
- `selectUser()` now returns `graph.entity[selectUse().uid]` if user in state is an object with a single `id` prop.
