# Removing Items from State

Consider the CRUD acronym ("Create, Read, Update, Delete") and notice our app does 3/4 of those. We don't have a way to delete fish from our inventory.

To do this, we'll make a new `deleteFish()` method in our App. Remember that when we bind the `deleteFish(fishId)` call to the "Delete Fish" button we make in our `EditFishForm` if you do it just with `onClick={this.props.deleteFish(fishId)}`, React will throw an error because it'll try to call `deleteFish` immediately when parsing the code. To fix it, wrap it in an arrow function: `onClick={() => this.props.deleteFish(fishId)}`

Wes has us try to do the same thing in the order on our own.
