---
layout: post
title: "Melhorando sua Experiência no Terminal com Tmux"
date:   2015-11-03
image: http://i.ytimg.com/vi/u6_E2ggMchs/maxresdefault.jpg
language: pt
---

Uma das coisas que mais uso quando estou no terminal é o sensasional [tmux](http://tmux.github.io). Mas o que é esse tal de tmux?

Antes de mais nada, vejo muita gente usando o terminator. Eu não sou contra nem um ou outro, gosto de usar o `tmux` e ele está me servindo muito bem.

O tmux _(têmux)_ é um terminal multiplex que apresenta muita melhoria em relação a alternativa GNU Screen. Ele habilita um número de terminais (ou janelas) para serem acessados de apenas um terminal. Ele surgiu em 2009 sob a licença BSD, foi criado por Nicholas Marriott e hoje podemos encontrar pacotes de instalação dele em praticamente todas as distribuições [GNU/Linux](http://www.vivaolinux.com.br/linux/).

O tmux roda no OpenBSD, FreeBSD, NetBSD, GNU/Linux e OS X. Depende da libevent 2.x e Ncurses, que podem ser baixados nos links:

* [libevent](http://www.monkey.org/~provos/libevent)
* [NCURSES – New Curses](http://invisible-island.net/ncurses/)

Mas se você está usando Ubuntu, você pode instalá-lo com o simples comando.

{% highlight bash %}
$ sudo apt-get install tmux
{% endhighlight %}

## Iniciando

Para iniciar o tmux, basta digitar no shell o comando `tmux`, mas também podemos usá-lo com alguns parâmetros relacionados abaixo:

* `tmux` - cria uma nova sessão de nome 0 (zero) ou o próximo número da sequência;
* `tmux new -s <nome da sessão>` - cria uma nova sessão com o nome especificado;
* `tmux new -s <nome da sessão>` -d - cria uma nova sessão com o nome especificado em background;
* `tmux ls` - vai listar todas as sessões;
* `tmux attach-session -t <session name>` - abre a sessão especificada.

## Comandos

Para acionar os comandos do tmux, primeiro utilizamos as combinações de teclas Ctrl + b, que chamaremos de "Prefixo". A lista abaixo apresenta um resumo de alguns comandos do tmux:

* `Control + b` - comando principal, antecede a todos os outros;
* `Prefixo + d` - sair da sessão sem desligar o tmux;
* `Prefixo + c` - nova janela;
* `Prefixo + ,` - renomear a janela atual;
* `Prefixo + w` - selecionar uma janela;
* `Prefixo + n` - próxima janela;
* `Prefixo + f` - procurar uma janela;
* `Prefixo + z` - suspende o cliente tmux;
* `Prefixo + #` - lista todos os buffers;
* `Prefixo + :` - abre o prompt de comando do tmux;
* `Prefixo + &` - fechar uma janela;
* `Prefixo + ?` - lista todos os atalhos (bindings);
* `Prefixo + "` - dividindo horizontalmente uma janela ou quadro em dois quadros;
* `Prefixo + %` - dividindo verticalmente uma janela ou quadro em dois quadros.

![tmux screenshot](/images/posts/tmux.png)

Essa foi minha dica. E se precisar de uma relação completa dos comandos, recomendo ler o [manual da página oficial](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/tmux.1?query=tmux&sec=1).