# Persisting our State with Firebase

Firebase gives us a way to maintain state, so if we leave our store and come back (or if someone else comes to our store) we can see our inventory info stick around. Firebase is a Google technology that uses WebSockets, and so changes are instantaneous.

To use Firebase with React, we need to use the "Re-base" and Firebase packages.

After setting up a realtime database and locating the SDK info, we can use that info to make a component that handles our Firebase app connection.

In order to keep Firebase in sync with our state updates, we need to use lifecycle methods to use `syncState()`. To initialize our Firebase connection, we're going to use `componentDidMount()`, and we're going to use the storeId to make a database entry for our fishes. Also, we should use `componentWillUnmount()` to unbind/quit syncing. If we just leave it syncing indefinitely, that's a memory leak and a performance problem.
