# Creating our First Components

We'll use Webpack to create our JS bundle ("bundle.js")

To make a new component, start by importing your dependencies (i.e., React) using ES6 "Modules" syntax to import libraries from node_modules.

Next we'll define our class (use PascalCase as a best practice), and every single class needs at least one `render` method inside of it, which describes what DOM elements to render out to the page.

We almost never touch the DOM directly using React, but one time when we do is when mounting our application to the page. To manipulate the DOM directly, we'll need to use the `react-dom` library. To render our component on the page, we'll call its `render` method (after importing it) and give it our component plus the HTML element we'd like to render within.

You can either self-close or have an opening and closing tag for your StorePicker.

For the StorePicker component, we'll put it in our components directory. Wes likes to use the same name for his files and components. e.g., the `StorePicker` component class will live in `StorePicker.js`

To be able to use it, you'll need to export your module from the StorePicker file, and then import it as a new dependency using the same ES6 modules syntax.
