---
layout: vid
title: Cookies 101
subtitle: Types
date: 2022-05-27 12:00:00
video_url: https://www.youtube.com/embed/tSisyjVEpeY
prev_url: /vids/cookies-101/cookies-101-structure
tags: cookies
---

Covering a few types of cookies out there. We’re gonna see about session cookie, third-party cookie, same-site cookie and cookiewall.

Covering a few types of cookies out there. We’re gonna see about session cookie, third-party cookie, same-site cookie and cookiewall.

Session cookies starts when you spin up a new browser or window and last until you stay there. So we can say that this cookie last the time you basically spend on a website or application. When you close the window this cookies is deleted.

This type of cookie only works on the server that generated it. Which means other machines cannot use this cookie. The browser here is responsible for just sending the cookie again to the server until it is opened.

This type of cookie only works on the server that generated it. Which means other machines cannot use this cookie. The browser here is responsible for just sending the cookie again to the server until it is opened.

The purpose of session cookies is to remember anything the server wants when the user is moving between web pages. Therefore, without session cookies, websites have no memory and could not handle that.

A most common example of a session cookie is when you’re accessing an ecommerce website. When you visit an online store and put items to your cart, you can continue accessing the other pages without lost you items inside the cart.

For example, when an user visits a website. Every cookie that is set in this domain is a first-party cookie. A cookie placed by any other website is a third-party one. Third-party cookies can also may be referred as trackers.

Third-party cookies also works by being embedded with some javascript from one website to another. Imagine you’re acessing a contact page of some site. The contact page has a google maps embedded address. This embedded part insert cookies on your browser.

When creating a cookie, cookie attributes are specified in the HTTP response header.

To address if the cookie is gonna be a first-party or third-party is the Same-Site attribute.

The Same-Site attribute basically determines if the cookie is a first or third party cookie. There are some values we’ll see about this property, which is:

- If the cookie creator sets Same-Site to `Strict` , the cookie will be strictly first party, which means it will only work on the same website, and will never be sent on cross site requests. So, for example, when an user clicks on a link with this type of cookie set, the cookie will not be sent.
- If you set the attribute to use `LAX`, it’s gonna work because the cookie is sent. Now if you want the cookie to be available when your user is leaving your website, you should use `LAX`.
- If you instead want to use the cookie in both context. Meaning you want your cookie to work on both first-party and cross-site requests. You can set the attribute value to `None`. Which means, the cookie will be sent in all requests. But be aware, if you use this option. The `Secure` attribute must be set.

The last one we’re gonna see here is the easiest one to remember.

Have you ever landed on a website that won’t let you access anything before accepting the cookie? That’s the one.

This cookies creates a wall, you just access them if you comply to their terms. If you accept, this cookie is gonna be stored for an year and you should access the website as usual.

If not, they will remove all related cookies from your browser and should close the page.

This is as simple as saying: Yes or No.

<section class="post-prev-next">
  <a href="{{page.prev_url}}">
    <span class="chevron left" /> Cookies 101 - Structure
  </a>

  <a href="{{page.next_url}}"></a>
</section>