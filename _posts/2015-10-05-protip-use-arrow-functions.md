---
layout: post
title:  "Protip: Use Arrow Functions"
date:   2015-10-05
categories: javascript es6
description: There is hardly any reason anymore to use `var _this = this` or other name to store the value of `this` for future use. Before ES6, it was a necessity of code to be littered with references to `this` due date to each function binding `this` to this own scope.
---

<div class="post-content-meta">
    <p>
        Also available in: <a href="http://tutsmais.com.br/blog/ecmascript6/faca-uso-do-arrow-functions/">Portuguese</a>.
    </p>
</div>

There is hardly any reason anymore to use `var _this = this` or other name to store the value of `this`
for future use. Before ES6, it was a necessity of code to be littered with references to `this` due date to each
function binding `this` to this own scope. For Example:

{% highlight javascript %}

Framebuffer.prototype.invert = function() {
    var _this = this;

    this.memory.map(function(location) {
        return _this._invertLocation(location);
    });
}

Framebuffer.prototype._invertLocation = function(location) {
    // code goes here
}

{% endhighlight %}

Arrow functions introduce lexical scope for functions, so that the value of this in an arrow function is
bound to the callee’s scope. The relevant portion in the above example could be rewritten as:

{% highlight javascript %}
Framebuffer.prototype.invert = (location) => {
    this.memory.map(
        location => this._invertLocation(location)
    );
}

Framebuffer.prototype._invertLocation = (location) => {
    // code goes here
}
{% endhighlight %}

The line in the first example declaring `_this` may be removed entirely.