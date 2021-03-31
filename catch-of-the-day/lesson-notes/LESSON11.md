# Events, Refs and this Binding

Events in React work like events in vanilla JS or jQuery, with a main difference being they're wrapped in `SyntheticEvent`s, allowing them to work more predictably across different browsers. Another difference is that React uses inline event handlers extensively, meaning you'd add `onClick` (or whatever) attributes to elements.

For an example, if you've got a component with an element on it you'd like to bind an event listener to, you can do that with `<button onClick={this.handleClick}>` (NOTE: Omit an opening-and-closing paren. Don't do this.handleClick(), that will just make it run when it loads), and then define `handleClick()` on your class.

A golden rule of React is "Don't Touch the DOM." There are some exceptions, but that's the general idea.

In this case, where we're trying to get the value from an element, we have a couple good options: Refs and state.

## Refs

A reference allows us to call out to a component's elements without having to go through the DOM. The syntax is:

```js
class MyButton extends React.Component {
  buttonElement = React.createRef();

  render() {
    <button ref={this.buttonElement}>Click Me</button>;
  }
}
```

If you make a click handler for the button and try to call out to `this.buttonElement`, we'll run into a binding issue. All of the built-in methods (like render, componentDidMount, etc) have `this` already bound. We could use this approach to bind `this`:

```js
...
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }
...
```

...but that gets unwieldy when you've got a bunch of methods. Instead, we use this syntax for the click handler, declaring it as a property instead of a method:

```js
...
    clickHandler = () => {
        ...
    }
...
```
