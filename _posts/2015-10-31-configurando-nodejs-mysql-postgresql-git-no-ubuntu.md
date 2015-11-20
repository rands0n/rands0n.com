---
layout: post
title:  "Configurando NodeJS com BD's e Git no Ubuntu"
date:   2015-10-31
image: http://74211.com/wallpaper/picture_big/Image-of-Relaxable-Time-MacBook-and-Coffee-Slowly-Running-Time.jpg
language: pt
---

Se você quer desenvolvedor com NodeJS e quer saber como configurar seu Ubuntu, esse artigo é para você. Nele eu irei ensinar como instalar o NodeJS, PostgreSQL, MySQL e Git em um Ubuntu Desktop 15.05.

## Instalando as depedências

Abra o terminal, você pode utilizar o launcher do Unity para isso.

![](https://nandovieira.com.br/media/ubuntu-ruby-setup/open-terminal.png)

Para instalar e compilar programas, você precisa ter algumas depedências instaladas. Primeiro, certifique-se que o seu sistema está atualizado.

{% highlight bash %}
$ sudo apt-get update
$ sudo apt-get upgrade
{% endhighlight %}

Depois, instale as depedências.

{% highlight bash %}
$ sudo apt-get install -y build-essential autoconf bison libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev
{% endhighlight %}

## Instalando o Git

Para instalar o Git, você pode usar o comando `sudo apt-get install git`. Depois disso precisaremos configurar algumas váriaveis globais do Git como nome e email.

{% highlight bash %}
git config --global user.name "Randson Oliveira"
git config --global user.email "randsonjs@gmail.com"
{% endhighlight %}

Para listar as configurações instaladas, use o comando `git config -l`.

{% highlight bash %}
$ git config -l
user.name=Randson Oliveira
user.email=randsonjs@gmail.com
{% endhighlight %}

## Instalando o NodeJS

Primeiro crie um diretório no seu diretório de usuário para que não precisamos ficar usando ele como administrador.

{% highlight bash %}
$ mkdir ~/.nodejs
{% endhighlight %}

Precisamos desse caminho no seu `PATH` para o sistema saber onde o NodeJS está.

{% highlight bash %}
echo 'export PATH=$HOME/.nodejs/bin:$PATH' >> ~/.bashrc
{% endhighlight %}

Depois clonamos o NodeJS para o diretório especificado.

{% highlight bash %}
git clone https://github.com/nodejs/node ~/.nodejs
{% endhighlight %}

Com isso precisamo configurar as váriaveis pré-compilação e depois compila-lo. O primeiro é apenas um segundo, a compilação demora mais que dois minutos.

{% highlight bash %}
./configure --prefix=~/.nodejs
make install
{% endhighlight %}

Com isso o NodeJS já está instalado em sua máquina e você já pode comecar a usá-lo.

> Lembrando que ele instala a ultima versão do node, para usar um versão anterior você precisa usar uma ferramenta para gerenciamento de versão como o [nvm](https://github.com/creationix/nvm).

## Instalando o PostgreSQL

Se você pretende utilizar o [PostgreSQL](http://postgresql.org/), terá que instalá-lo com o comando abaixo.

{% highlight bash %}
sudo apt-get install postgresql postgresql-contrib libpq-dev
{% endhighlight %}

Depois crie um usuário no PostgreSQL com o mesmo nome do seu usuário no Ubuntu, no exemplo abaixo: `randsonjs`.

{% highlight bash %}
sudo -u postgres createuser -rds randsonjs
{% endhighlight %}

Depois, crie um banco de dados com o mesmo nome de seu usuário.

{% highlight bash %}
$ createdb $USER
{% endhighlight %}

Finalmente, você pode acessar o console do PostgreSQL com o comando `psql`.

{% highlight bash %}
$ psql
psql (9.3.10)
Type "help" for help.

randsonjs=#
{% endhighlight %}

## Instalando o MySQL

Se você pretende utilizar o [MySQL](http://mysql.com/), precisa instalá-lo com o comando abaixo.

{% highlight bash %}
sudo apt-get install mysql-client mysql-server libmysqlclient-dev
{% endhighlight %}

Você pode acessar o console do MySQL com o comando `mysql`.

{% highlight bash %}
$ mysql
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 46
Server version: 5.5.46-0ubuntu0.15.05 (Ubuntu)

Copyright (c) 2000, 2015, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
{% endhighlight %}

Pronto! Agora você tem um Ubuntu configurado para desenvolver aplicações com NodeJS. Se tiver dúvidas ou problemas, não deixe de comentar!
