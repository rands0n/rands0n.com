---
layout: post
title:  "How to Use Arguments in a Rake Task"
date:   2015-11-28
---

I came across this today. You can write rake tasks that accepts arguments. Called like this.

{% highlight shell %}
$ rake notes:send[rnd]
{% endhighlight %}

You define a rake task like this.

{% highlight ruby %}
namespace :notes
  desc "send a note to an user"
  task :send, [:user] => [:enviroment] do |task, args|
    Note.send(args[:user])
  end
end
{% endhighlight %}

## Multiple arguments

So, if you want use multiple arguments in a task. You can add in Array, like this.

{% highlight shell %}
$ rake notes:send[rnd, arg2]
{% endhighlight %}

And you'll get this in a task like this.

{% highlight ruby %}
args[:arg2]
{% endhighlight %}

## ZSH

Unfortunately, `zsh` can't parse the call to the rake, so you'll see the error.

{% highlight shell %}
zsh: no matches found: notes:send[rnd]
{% endhighlight %}

So, you'll need to run like this.

{% highlight shell %}
$ rake 'notes:send[rnd]'
{% endhighlight %}

Searched in the web. I found this is controlled by [the `NOMATCH` zsh option:](http://zsh.sourceforge.net/Doc/Release/Options.html#index-NOMATCH)

> If a pattern for filename generation has no matches, print an error, instead of leaving it unchanged in the argument list. This also applies to file expansion of an initial ‘~’ or ‘=’.

You can set the option and disable her. Like this.

{% highlight shell %}
unsetopt nomatch
$ rake notes:send[rnd]
{% endhighlight %}

Also, you can unset this in your `.zshrc` file.