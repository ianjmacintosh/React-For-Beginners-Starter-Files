# Passing Dynamic data with props

This course covers two fundamental concepts:

1. Props
2. State

## Props

To understand props, consider HTML attributes; for an example, an <img> element can accept a `src` attribute and a `alt` attribute, which you pass values into, representing the source path and some alternate text for the image.

Props are sent the same way. Note: `size="10"` passes "10" as a string. If you want to pass a value as anything but a string, you have to wrap it in curlies. For example, to pass 10 as a number for size, you'd have to write it out as `size={10}`.

React DevTools will help expose props for you. If you select an element, you can write out `$r` in your console to show the component instance, which will help you find props.
