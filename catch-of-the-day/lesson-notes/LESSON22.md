# Animating React Components

This lesson will show us how to implement 2 different types of animations:

1. Sliding fish in and out for order
2. Rolling numbers in the purchase order like an odometer

## Sliding fish in and out for order

To start with, we're going to import the TransitionGroup and CSSTransition modules from react-transition-group and replace our <ul> elements with TransitionGroup and wrap our li's in CSSTransition's.

The syntax here is not clearly explained by Wes, he shows me what to write and then I write it.

Wes uses Stylus (`*.styl`) to write style rules, which is exactly like SCSS except it omits colons and semi-colons. It also uses indentation to define rules instead of curly braces. He explains the Stylus compiling works outside the scope of create-react-app by using custom npm run scripts.

The CSSTransition component does some cool stuff with class handling and adding "state" for our presentation timing and applying classes based on what we define. This deserves a little bit of time just focusing exclusively on CSSTransition, but doesn't seem overwhelming. Effectively it handles the setting of classes based on timeout.

## Rolling numbers like odometer

Same idea again, but this time we make a new element for each index and rely on TransitionGroup and CSSTransition to remove elements. It's important that the "exit" element is the one that's positioned absolutely because the exiting elements are the ones that could have multiples in place easily. There's a lot of flexibility, but that requires understanding.

## Keeping multiple returns in sync

If you're defining multiple TransitionGroups because you've got multiple possible return values, you can DRY things up a little by defining your TransitionGroup components' properties as an object and spread the properties in.
