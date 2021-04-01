# Displaying Order State with JSX

To see the order update, we need to write some JSX in our Order.js

First, we need to pass our order to the Order component via props. If you wanted, you could pass the entire state to a component with an object spread in the JSX: `<Order {...this.state} />` ...but that could backfire if you start adding more stuff that Order doesn't need! You probably don't want to do that, you want to maintain control over what your components get.

I got to play with the reduce method to get the price, but I did it directly in place in my JSX... which is silly. Wes showed me a better way, by setting the value in the class and calling it. NOTE: Remember in your JSX you can call variables set in the `render()` function (i.e., `const thing = "hello"` set inside the class) normally with just `thing`, you don't need to be all like `this.thing`.

To render out all the fishes, we can make what Wes calls a render helper function. This is where we define a class method to handle rendering some part of the application.
