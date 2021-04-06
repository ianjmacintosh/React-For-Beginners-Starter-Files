# Ejecting from create-react-app

So far in this tutorial, we've used `create-react-app`, which hides a bunch of the tooling. Tooling can get hairy with plugins and presets and templates and blah-blah-blah, and when you just want to write JS, `create-react-app` is a great way of getting a killer default toolchain in a hurry. But if you want a _custom_ setup with your own tooling, you'll have to "eject" from `create-react-app`. You can't go back, so do it on a branch first so you can revert if you need.

After you do that, you'll see your package.json gets a ton of new lines, and that's what was previously abstracted by create-react-app. Now you can tinker with your webpack setup, like if you want to add new plugins or change your settings.
