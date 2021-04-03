# Bi-directional Data Flow and Live State Editing

In order for us to be able to edit fish instead of just adding fish, we need to make a new component: `<EditFishForm />`. To render out one of these for each of the fish, we need to get an array from our fishes object, then use map to show an edit element for each fish.

For each EditFishForm, we're going to pass an object representing that fish into it.

Inside the EditFishForm, we run into some trouble if we try to just pass the state directly into the value. React will catch this and block it if you try to modify the value of a field to update the value of the state object. Instead, we make a handler using onChange, and we can make that handler flexible enough to know which property to update by using computed keys (`{ [this.currentTarget.name]: this.currentTarget.value}`)

Finally, to get a method that can actually update a fish, I need to make a method to update the fishes in App.js (since that's where the state we want to update lives), then pass it all the way down to the EditFishForm component. I also need to make sure I pass the key (I call it a fishId) for the fish we want to update into the EditFishForm.
