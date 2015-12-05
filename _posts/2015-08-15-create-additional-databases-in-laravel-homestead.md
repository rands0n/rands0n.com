---
layout: post
title: "Create Additional Databases in Homestead"
date: 2015-08-15
---

I often see [Homestead](http://laravel.com/docs/5.1/homestead) users just using the default `homestead` database that ships in a new Homestead box, rather
than create a new database specific to their application. When you're hosting multiple application through your homestead
instance it makes a lot more sense to name your database per-application, often with a `_testing` suffix for your
test database.

It's actually really easy to add new databases inside your homestead instance and here instructions for both. MySQL and PostgreSQL.

## PostgreSQL

{% highlight sh %}
// Login to PostgreSQL (password is "secret")
psql -U homestead -h localhost

// Create the new database
CREATE DATABASE your_database_name;

// Exit PostgreSQL
\q
{% endhighlight %}

## MySQL

{% highlight sh %}
// Login to MySQL (password is "secret")
mysql -u homestead -p

// Create the new database
CREATE DATABASE your_database_name;

// Exit MySQL
exit;
{% endhighlight %}