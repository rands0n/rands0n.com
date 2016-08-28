---
layout: post
title: 'Open a GitHub Pull Request with Hub'
date: 2016-04-13
tags: [git github]
description: Both in my professional life and personal life working as a open source contributor I use Git and GitHub a lot of time. GitHub publishes a command-line tools called Hub, which is more convenient way than the website for doing a few specific tasks.
tags:
- github
- hub
- git
- beginner
- tutorial
---

Both in my professional life and personal life working as a open source contributor I use Git and Git[Hub](https://hub.github.com/) a lot of time. GitHub publishes a command-line tools called [Hub](https://hub.github.com/), which is more convenient way than the website for doing a few specific tasks and in particular I've been using it more and more for opening pull requests(aka PR's).

It's fairly common to alias your `git` command to use with `hub` command, which gives you all your existing Git functionality with a few special GitHub-aware features like the `pull-request` command.

## Git + Hub = GitHub

First, you need to install [Git](https://git-scm.com/download) on your machine if it is not installed 😊

The basic workflow is to create a branch, add your changes, commit them and then push it to GitHub. But if you are first in Hub. You're welcome to install it in your machine.

If you are using osx, you can do this simple put this on terminal:

{% highlight shell %}
brew install hub
{% endhighlight %}

And if you aren't on OSX you can install using [linuxbrew](http://linuxbrew.sh/) and use the same command above to install it.

## Basic Workflow

After you commit your changes and push them to GitHub. It's time to open a new Pull Request. I'm pushing to my origin, I'm not sure what happens if you're pushing to somewhere else but if you know how, please add a comment below.

Running `git version` on my machine. The `git` and `hub` are showed to me:

{% highlight shell %}
git version
git version 2.7.0
hub version 2.2.2
{% endhighlight %}

It show the `hub` version because `git` is an alias on my `~/.zshrc` file. To make this you need to edit the `.zshrc` file and add a new alias to `hub`. If you're using bash, you can edit the `~/.bashrc` file.

{% highlight shell %}
nano ~/.zshrc
{% endhighlight %}

For bash users:

{% highlight shell %}
nano ~/.bashrc
{% endhighlight %}

And add this at the end of the file:

{% highlight shell %}
alias git="hub"
{% endhighlight %}

After that, you must restart you terminal. Just put there a `zsh` or `bash` command.

## Commiting you files

I'm implement this working on a tags on this blog. So, to do that. I'll create a commit to put this file and the things I've done about the tag feature on GitHub and create a new pull pequest to show to you.

Because this blog is hosted on a [GitHub Pages](https://github.com/rands0n/rands0n.com) the tags will not work now and you'll not see this working. I have plans to purchase a host plan soon :-)

{% highlight shell %}
git commit -m 'Create a new commit to show how to open a pull request with hub'
{% endhighlight %}

A big commit message I know. After that I pushed to the `feature/tags` on GitHub and created a new pull request with the hub command.

{% highlight shell %}
git push origin feature/tags

Counting objects: 11, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (9/9), done.
Writing objects: 100% (11/11), 1.91 KiB | 0 bytes/s, done.
Total 11 (delta 4), reused 0 (delta 0)
To git@github.com:rands0n/rands0n.com.git
  * [new branch]      feature/tags -> feature/tags
{% endhighlight %}

On code on GitHub, you just need to enter `git pull-request`. I've put an image below about this command :D

<img src="/images/posts/git-commit.png" style="margin: 0 auto;" alt="editor to create a description on github about a pr">

And the anwser is

{% highlight shell %}
https://github.com/rands0n/rands0n.com/pull/7
{% endhighlight %}

More nice things you can do with `git pull-request` command:

- Create a pull request against origin/master (this is the default):

{% highlight shell %}
git pull-request
{% endhighlight %}

- Create a pull request against another repo, you'd probably use this for open source or any other situation where you are pushing to a fork but requesting a pull against an upstream repo; use the `-b` switch and the format `owner:branch`:

{% highlight shell %}
git pull-request -b joindin:master
{% endhighlight %}

- Create a pull request against a branch called something other than "master":

{% highlight shell %}
git pull-request -b develop
{% endhighlight %}

- Create a pull request against something else entirely! The argument is in the format `owner/repo:branch` for that.

## Merging pull requests

It's the same when you click on a green button on GitHub's interface. So, I've merged the commit above by putting this command on my terminal. Nicely ;).

{% highlight shell %}
git merge https://github.com/rands0n/rands0n.com/pull/7
{% endhighlight %}

Thanks to read this little tutorial. It's just about [Hub](https://hub.github.com/) and a very specific command(pr). It helped a lot to me open a new pull requests on my work and I think it can help in your work.
