# Writing HTML with JSX

When working with React components and HTML, it's often useful to make use of JSX, which makes writing HTML in JS a bit easier. You don't have to, but it can be nice.

As an alternative to JSX, you can use the React.createElement API, but that can quickly get more cumbersome.

JSX has a few gotcha's, including you have to use `className` instead of `class`. If you use Emmet, your plugin should autodetect you're in a React component and make these kinds of substitutions easily.

Another gotcha is that when you return JSX, you cannot `return` and then on a newline write your JSX, because automatic semicolon insertion will make it return prematurely. Get around this by wrapping in parens (`()`).

Yet another gotcha is that you cannot returns sibling elements, which you can get around by either wrapping your whole component in a `<div>`, a `<React.Fragment>` tag (which will be render to nothing).

Also, commenting looks a little funky, `{/* Comment Here */}`, and you cannot return a comment and an element, your comment must be inside your returned element.
