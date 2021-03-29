# Loading CSS into our React Application

There are many different ways to style your application, including importing your CSS directly into your component (called "componentized CSS") and there's some debate on the topic, but Wes avoids that topic for now. Instead we'll include all our styles in our index file.

Because we're using create-react-app, we're using Webpack, which is smart enough to note that our imported CSS file is not a JS file, so will accordingly update styles and hot-reload styles.
