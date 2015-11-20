---
layout: post
title:  "JavaScript Strings: Uppercase, Lowercase e Capitalize"
date:   2015-11-09
language: pt
---

Veja como fazer uma transformação de string em Javascript com `uppercase`, `lowercase` e `capitalize`. Este último ainda não existe na documentação oficial. Mas é implementado em forma de função.

Em muitos casos, você não irá precisa usar Javascript para essa situação. Se o conteúdo só será mostrado em uma página Web realmente não será necessário fazer o uso; é mais facil e performático usar CSS para fazer essas transformações.

No entando, CSS tem limitações. Ele só pode ser usado quando isto realmente for mostrado em uma página Web. Se você está querendo transformar a String antes de salvar ela no banco de dados ou exibi-lá em atributos HTML5 como `alt` e `title` você faz o uso dessas funções em Javascript.

> Também pode fazer em alguma linguagem _server side_ como [PHP](http://php.net/), [Ruby](http://ruby-lang.org/) ou [Python](https://www.python.org/)...

## Uppercase

Em **Javascript**:

{% highlight js %}
var text = "this is a lowercase text";

console.log(text.toUpperCase()); // THIS IS A LOWERCASE TEXT
{% endhighlight %}

Você pode usar o facilmente CSS para fazer isso.

{% highlight css %}
.selector { text-transform: uppercase; }
{% endhighlight %}

## Lowercase

Em **Javascript** nós usaremos conforme o nome.

{% highlight js %}
var text = "Em um Mundo onde Cervejas são Baratas.";

console.log(text.toLowerCase()); // em um mundo onde cervejas são baratas.
{% endhighlight %}

Você pode usar facilmente isso com CSS dessa forma:

{% highlight css %}
.selector { text-transform: lowercase; }
{% endhighlight %}

## Capitalize

Ainda não temos essa função no Objeto String em Javascript. Mas podemos implementá-lo ele e adicionar. Vejamos como ficaria.

{% highlight js %}
var text = "em um mundo onde cervejas são baratas.";

String.prototype.capitalize = function() {
    return this.replace(/[^-'\s]+/g, function(word) {
        return word.replace(/^./, function(firstLetter) {
            return firstLetter.toUpperCase();
        });
    });
}

console.log(text.capitalize()); // Em Um Mundo Onde Cervejas São Baratas.
{% endhighlight %}

Você pode fazer isso facilmente em CSS com a propriedade `text-transform`.

{% highlight css %}
h1 { text-transform: capitalize; }
{% endhighlight %}

Essa foi minha dica de como manipular Strings com Javascript. Existem milhões de coisas que você pode fazer, recomendo [dar uma olhada no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) para poder ver as funções que podemos usar para manipulação de String.

Lembrando que esse post se trata apenas dessas funções.