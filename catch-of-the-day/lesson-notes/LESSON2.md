# Thinking and Understanding React Components

When learning React, step away from usual MVC (Model-View-Controller) setup and instead get on board with the React way of doing things, where everything is a Component.

For example, in the _Catch of the Day_ app, you've got a bunch of fish, which are represented with a Fish component. Instead of copying and pasting all that code a bunch of times, you can render out a bunch of Fish. React DevTools will help you to explore React components in your browser.

By having the Fish component broken out into its own thing, you can have someone just work on that component without affecting the larger application, and they don't need to write a ton of JS.

Any time you have something you can consider a piece of your application, it's good practice to build it out as a component.

One of the powers of React is storing data in the state letting React use the data store there to render components.
