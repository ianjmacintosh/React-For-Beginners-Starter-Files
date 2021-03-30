# Helper and Utility Functions

Sometimes you'll have functionality that's really helpful and you'll want to use it in a bunch of different places in your application. To make that easier, we can make a JS file that includes all those things as exported functions, then import them wherever we'd like to use them. This idea isn't specific to React.

You can export one as the default (like we do when we export our component functions and classes), or you can name them in order to just pull in the helper function you'd like using the `import { getFunName } from "helpers"` syntax.
