# Component Validation with PropTypes

React can sometimes yield surprising behavior that'll force you to be a better developer. One thing you can do to make your code more predictable is use type checking to ensure developers working with your code provide props with the right data type.

Using PropTypes provides a way to do it. If you're using stateless functional components, you should set your propTypes as a property on the function. If it's as a class, you can set it as a property of the class, and you can set it as `static` so it's not recreated for every component instance.

You can use `PropTypes.shape()` to give yourself a model for what a passed object should look like.

Adding your proptypes after the fact gets kind of tedious if you're doing a bunch of files, so it probably makes a lot more sense to do it as you're adding new props.
