# Handling Events

For the submit handler, Wes's example uses (I think deprecated) `ref.value`, while I'm using `ref.current` to get the current reference.

Instead of changing window.location, we're using React Router and so I want to change the URL without refreshing the page or losing anything. Since StorePicker is a child of React Router, I can use `this.props.history` and push a new URL to it:

```js
this.props.history.push(`/store/${storeName}`);
```
