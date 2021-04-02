# Persisting Order State with localstorage

Now that we've got our fishes being persisted to Firebase, we need to figure out how to keep the user's order around. Another way to persist state is to use local storage. According to Wes, local storage is kind of like cookies, but easier to work with.

To do this, we're going to use a couple more lifecycle methods. `componentDidUpdate()` will be perfect for us because we want to listen to when someone modifies their order. In that method, we'll use `localStorage.setItem()` to set the key value pair the way we like. The key in this case will be the storename, and the value will be the order.

If we just try to dump the order in there as a string, it'll dump out `[Object object]`, so we need to run `JSON.stringify` on it first.

We also need to put the value _back_ when the component mounts again (what's the point in writing something somewhere if we never read it?), so we handle that in `componentDidMount()`

However, things got a little hairy for a moment because the timing was squirrelly: we learn what the fish cost from a remote database, but we learn how many of those fish we're ordering from local storage. Since we need both of those things to show an order summary (number of fish × price of fish), we get an error when trying to render the order summary.

The solution was to write some more defensive code to handle the use case of trying to show information about a fish we don't know about.
