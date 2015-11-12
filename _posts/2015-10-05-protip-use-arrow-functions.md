---
layout: post
title:  "Protip: Use Arrow Functions"
date:   2015-10-05
categories: javascript es6
description: There is hardly any reason anymore to use `var _this = this` or other name to store the value of `this` for future use. Before ES6, it was a necessity of code to be littered with references to `this` due date to each function binding `this` to this own scope.
image: https://lh3.googleusercontent.com/TvdgDawI60S4XnFmPEkjbhZ5EVDMpYQ6I_INAWNOsojfaNl_o2GfYIQa34RepZNLPegUSlTJZhOOulMFTpzwjlQ2y9tLNlU6jJZNR405nC7Jomnx71mXxkOpRj87HLuAhCIJlYSRhD9pfgcvfLUS98bUygVp57Mes35fxqCL0ToTI79exH8BkgdrirdJ4p1JAcvYP9VkSCUVQDuUGDhTRrDRYIxxUn5qbfMHsM7Im718-gwlwNypnMJSaPkV2ASL5cqoKXtrt0m-rPd1cNEzQVOD4kPBZeyKkQ8IjCvYo8YGV8iEhIls4BcQ3s8ktrd1oR4kHWwU0nC2DTrd13jNzizq_hvdcvI8moi874YuWcRaKaYmjA6zDprxtLMUqZYAd599MboaLXXU8WEiJ19YCTIWbXwfITO0Rzbo4Wvh6Zo-09YyQdZeRAc-xgVqh9pBK52jBZlj9IYgl-w6NR987NSMzCve9ZnMa957AC0gYUYSAdLsBjQhxalPn8nrTcClixz4u7MDyAt0qjc_sJ5rNaAsJO7wfNs3C-tXFAF39gs=w1508-h848-no
---

<p class="flash">
    This article was translated to Brazilian Portuguese and posted on <a href="http://tutsmais.com.br/blog/ecmascript6/faca-uso-do-arrow-functions/">Tutsmais</a>.
</p>

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
