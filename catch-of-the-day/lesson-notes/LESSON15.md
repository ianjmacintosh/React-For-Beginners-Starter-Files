# Displaying State with JSX

It's great to have the state get updated, but we want to see our fishes without having to dig into the component via devtools. Instead of just rendering all the fish in place on the menu, let's make a Fish component.

JSX doesn't support logic like looping, so we need to use JS. We want to loop over our fish... but that's currently stored in an object, not an array, so we'll use `Object.keys()` to get an array our fishes keys, then use `Array.map()` to iterate over those fishes to display each fish. We also need to give each of those rendered Fish components a unique key to their `key` props; `key={fish}` will work. We can also pass the all details for each fish into a single prop via `details={this.state.fishes[fish]}`, then use those details (passed as an object) to show each fish.

When building out the Fish component, it's a template-building game, and ES6 destructuring makes getting the values really slick:

```js
const { name, image, desc, price } = this.props.details;
```
