---
title: .bind(), .call(), .apply() in Javascript
summary: Functions are Objects, as you should know by now. And as Objects, functions have methods, including the bind, call and apply. We will learn more about this.
date: 2016-07-29 10:00:00
---

I came to this article about [.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), [.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) and [.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) functions in Javascript because this is a very complicated subject. And if you’re a beginner with Javascript this will help you to understand the concept of these functions and how to use and apply.

Functions are Objects, as you should know by now. And as Objects, functions have methods, including the bind, call and apply. We will learn more about this in a bit. We will discuss every scenario in which we use these three methods.

I assume that you know how this works in Javascript. If you don’t know I recommend you to search in many blog posts on the web. Maybe I make an article about this and how use it.

## TL’DR

1. `bind` are used when you want to call the method or function with the this explicity. In other words, bind allow us to easily set which specific object will be bound to this when a function or method is invoked.
2. `call` are used when you want to borrow function and set the this value in function invocation. The diference between apply is the call accepts an **argument list** instead of **single array of arguments**.
3. `apply` are used when you want to borrow function and set the this value in function invocation. The diference between call is the call accepts an **single array of arguments** instead of an **arguments list**.

## .call

`.call()` allows the calling of a function in way that this can be specified, while passing in required arguments(if any) to the function.

```javascript
var fx = function (arg1, arg2) {
  console.log(this, arg1, arg2)
}
```

And calling it:

```javascript
fx.call(null, 'lorem', 'ipsum') // [Window Object], "lorem", "ipsum"
fx.call({ id: 1 }, 'lorem', 'ipsum') // [Object] {id: 1} "lorem" "ipsum"
```

## .apply

`.apply()` is very similar to .call(). The big diference is the way that we pass the arguments to apply. We need to pass the arguments to the function as arrays. That is, still using the previous fx function defined above. we can call it thus:

```javascript
fx.apply(null, ['lorem', 'ipsum']) // [Window Object], "lorem", "ipsum"
fx.apply({id: 1}, ['lorem', 'ipsum']) // [Object] {id: 1} "lorem" "ipsum"
```

As you can see, `.call()` and `.apply()` only differ in how they handle function arguments.

## .bind

`.bind()` function is quite different from call and apply. It also allows you to determine what value of this would be, but it does not call the function. Instead, it return the exact copy of the function with the especified this bound appropriately.

Still using the fx function defined above. We use .bind() to create a new function called fxBounded which has the this referencing the value passed by bind method.

```javascript
var fxBounded = fx.bind({id: 1}, 'lorem', 'ipsum')
// function (arg1, arg2) { console.log(this, arg1, arg2) }

// executing
fxBounded() // [Object] {id: 1} "1" "2"
```

`.call()`, `.bind()` and `.apply()` make it easier to write generic functions which can be called in differents objects.