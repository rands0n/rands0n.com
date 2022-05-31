---
layout: vid
title: Cookies 101
subtitle: Structure
date: 2022-05-18 12:00:00
video_url: https://www.youtube.com/embed/7ImQDC2Ts8w
prev_url: /vids/cookies-101/cookies-101-introduction
next_url: /vids/cookies-101/cookies-101-types
tags: cookies
---

In this lesson, we’re going to take a look at how we structure a cookie. We’re going to see which attributes we can use to set a cookie and how we set it. You already knows that cookies is used for three mainly purposes:

- In this lesson, we’re going to take a look at how we structure a cookie. We’re going to see which attributes we can use to set a cookie and how we set it. You already knows that cookies is used for three mainly purposes:
- We can use a cookie to deal with session management. It means we can use it for login pages, shopping carts, game scores, or anything that the server should remember;
- We can also use it for personalisation. If a user wants your website to look in a different theme, or just use black as a background color. We can use cookie to store that information;

And I think most websites out there, use cookies for tracking purposes. They can record and analise user behaviours across the internet.

With that in mind, let’s understand how the server sets a cookie.

To be able to do that, imagine you’re accessing a website, could be any website. We prompt the URL and then, the browser sends a request to the server. The server usually takes some microseconds to respond to the browser. But when the server answer, it answer with some metadata.

For example, the server responds to the browser with the code 200 which means OK. This is a HTTP response code. To be able to set a cookie, inside the same response the server sends to the browser a property called Set-Cookie associated with some value. Here, for example, we’re setting the theme to be dark.

Then, with every subsequent request to the server, the browser sends all previously stored cookies back to the server with the Cookie header.

To understand what a cookie is. We need to take a look at how a cookie is structured. It has optional properties and required ones.

First, we have a domain property. Which naturally is the current domain we are viewing it. But, it also can be a different domain, so it turns into a third-party cookie, which we’ll cover in forward lessons.

We also have a `Flags`. Which means we can add an expiration time for our cookie, we can setup a security(tells the cookie to be only transported through HTTPS connections).

We can also setup a cookie to only be available in some parts of our website. With the `Path` property, we can setup that this cookie is only available when the user goes to the `/contact` page.

And finally, we always gonna have a name and a value associated with that cookie. We can setup as many names and values as we want. Covering everything we said so far. The server responds with a `Set-Cookie` property with all the flags, names and values we saw earlier.

Complementing the things we just saw. We’re gonna take a look at which type of cookies we can use in the next lesson. Remember when we talk about types of cookies, probably this type is just a flag we can set on our response to the browser.

So the browser understands what he needs to deal with.

See you there.

<section class="post-prev-next">
  <a href="{{page.prev_url}}">
    <span class="chevron left" /> Cookies 101 - Introduction
  </a>

  <a href="{{page.next_url}}">
    Cookies 101 - Types <span class="chevron right" />
  </a>
</section>