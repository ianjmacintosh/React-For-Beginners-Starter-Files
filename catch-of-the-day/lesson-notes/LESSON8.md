# Stateless Functional Components

When a component just has a render method, it can be a stateless functional component.

Many component classes have state and all kinds of methods hanging off them, lifecycle events, etc. But if your component only has a render method (and proptypes) you can convert it to a stateless functional component.

To turn a component class into a stateless functional component:

- Make it a function call
  - OPTIONAL: Use an arrow function with an implicit return
- Instead of getting props from `this`, pass it as an argument and reference the `props` object that way
  - OPTIONAL: Instead of calling `props.firstName` or whatever, you can destructure in the function declaration: `({ firstName })` and just call `firstName` that way
