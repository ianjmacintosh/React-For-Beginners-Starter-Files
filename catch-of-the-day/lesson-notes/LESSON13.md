# Understanding State

State is a fundamental concept in React, so this lesson is the one that is most worth going over multiple times.

State is just an object that holds data, stored within a component, accessed by the component and maybe accessed by its children.

It is the single source of truth, so multiple components may consume it, and when you update it it goes to all those consumer components. This beats having to update the same thing separately for each component. Whenever state changes, React reacts to the change and updates all the different pieces of the application.

In this tutorial, we keep all the fish in our Daily Catch store in state. Since we want to share our fish across the application, we need to store the fish at a state at a level that's above each component needing to consume it. In our case, we want to share all our fish with our Menu, Order, and Inventory components. The parent for all those components is the App component.

When we first add state to App, we need to define the initial state. This can be done in the constructor method: `constructor() { super(); this.state = {} }` or as a prop (Wes's preferred approach): `state = {}`. To update the state, we can't do it directly from the AddFishForm, because the methods that update state and the state itself always need to live in the exact same component. So we need to make an addFish method in App.

In order to call addFish from addFishForm, we need to pass addFish method from the App component through child components' props until it gets down to the addFishForm component.
