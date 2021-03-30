# Routing with React Router

We're using React Router to handle loading different pages. Specifically, we'll use BrowserRouter, Route, and Switch, which are all components from the `react-router-dom` package.

The BrowserRouter component includes a Switch component, which can include a Route for each page.

To use the router, we start by making our own Router component, then we define our routes, then we include the router in our index instead of the app. Since we're using JSX, we need to import React.

This will make your journey to finding your app within React DevTools a little longer, since you'll now have a BrowserRouter with a Switch with a Route with your App.

When you've got a `path="/store/:storeId"` for instance, you can access that param within your component. this.params.storeId will map to whatever that's been set to in the URL.
