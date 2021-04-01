# Updating our Order State

To update the order, we need to add functionality to handle when a fish is sold out, and update the state's order object otherwise.

That is pretty straightforward, we define a new method on the App component, but Wes shows us the techinque of strictly running the method directly to test it out instead of binding it and messing with it, since you're introducing possible failure points that way. You can find the element via React DevTools and then do `$r.addToOrder("fish1")` in your console.

Something kind of tricky is we need to call that method with a specific prop, and since we cannot do `onClick={this.props.addToOrder(this.props.index)}` because it'll call the method before we even click it, we can either:

- Define a separate wrapper method (i.e., `handleClick = () => { this.props.addToOrder(this.props.index)}`) and call that (`onClick={this.handleClick}`)
- Make an inline function that does the same thing: `onClick={() => this.props.addToOrder(this.props.index) }`

I'm going to do things a little differently and pass a different addToOrder function to each one since I don't foresee us needing that index value for anything else. I may live to regret that decision!
