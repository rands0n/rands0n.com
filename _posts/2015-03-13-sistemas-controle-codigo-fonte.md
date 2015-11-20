---
layout: post
title:  "Sistemas de Controle de Código-Fonte"
date:   2015-03-13
language: pt
---

<p class="flash">
    Esse texto foi removido do livro <a href="http://www.amazon.com.br/The-Pragmatic-Programmer-Journeyman-Master/dp/020161622X">Pragmatic Programmer</a>, escrito por <a href="https://twitter.com/pragmaticandy">Andrew Hunt</a> e <a href="http://pragdave.me/">David Thomas</a>.
</p>

Uma das coisas mais importantes que procuramos em uma interface de usuário é a tecla UNDO — um simples botão que nos redime de nossos erros. É ainda melhor quando o ambiente nos dá vários suporte entre desfazer e refazer, assim podemos voltar e consertar o erro que cometemos minutos atrás. Mas, e se o erro ocorreu essa semana e você desligou e ligou o computador várias vezes desde então? Bem, esse é um dos muitos beneficíos de se usar um controle de código-fonte: é uma tecla UNDO gigante — uma máquina do tempo com abrangência de projeto que pode levá-lo de volta àqueles prósperos dias da semana passada, quando o código era realmente compilado e executado.

Os sistemas de controle de código-fonte, ou sistemas de gerenciamento de configurações que têm escopo mais amplo, registram cada alteração feita no código e na documentação. Os melhores também podem registrar versões de compilador e sistema operacional. Com um sistema de controle de código-fonte apropriadamente configurado, você sempre poderá voltar a uma versão anterior do seu software.

> Em vez de advir da mudança , o progresso depende da lembrança. Aqueles que não conseguem se lembrar do passado estão condenados a repeti-lo.
>
> _George Santayana, Life of Reason_

Um sistema de controle de código-fonte SCCS(_Source Code Control System_) faz muito mais do que desfazer erros. Um bom SCCS permitirá que você rastreie alterações e responda perguntas como: Quem fez alterações nessa linha de código?, Qual a diferênça entre a versão atual e a ultima versão?, Que arquivos foram alterados com mais frequência?. Esse tipo de informação é inestimável para fins de rastreio de erros, auditoria, desempenho e qualidade.

Um SCCS também permitirá que você indentifique versões do seu software. Uma vez indentificada, você sempre poderá voltar e gerar novamente uma versão, independente das alterações que tenha ocorrido.

Com frequência, usamos um SCCS para gerenciar ramificações da árvore de desenvolvimento. Por exemplo, uma vez que você tiver lançado um software, provavelmente vai querer continuar a desenvolvê-lo visando a uma próxima versão. Ao mesmo tempo, terá de lidar com erros da versão atual, enviando versões corrigidas para os clientes. Você vai querer que essas correções de erros se estendam á próxima versão(se apropriado), mas não vai querer enviar código em desenvolvimento para os clientes.

Com um SCCS, poderá gerar ramificações da árvore de desenvolvimento sempre que gerar uma versão. Você poderá aplicar correções de erros a códigos da ramificação e continuar o desenvolvimento no tronco principal. Já que as correções de erros também podem ser relevantes para o tronco pricipal, alguns sistemas permitem que alterações selecionadas na ramificação sejam mescladas ao tronco principal automaticamente.

Os sistemas de controle de código-fonte podem manter os arquivos que armazenam em um depósito central — um ótimo candidato a arquivo-morto.

Para concluir, alguns produtos podem permitir que dois ou mais usuários trabalhem conconrrentemente no mesmo conjunto de arquivos, até mesmo fazendo alterações concorrentes no mesmo arquivo. O sistema gerenciará então a mesclagem dessas alterações quando os arquivos forem enviados de volta ao depósito. Embora pareça arriscado, na prática esses sistemas funcionam bem em projetos de todos os tamanhos.

> Use sempre um controle de código-fonte

Sempre. Mesmo se você for uma equipe de uma pessoa em um projeto de uma semana. Mesmo no caso de um protótipo “descartável”. E mesmo se aquilo que você estiver trabalhando não for código-fonte. Certifique-se de quetudo esteja sob o controle do código-fonte — documentação, listas telefônicas, memorando para fornecedores, makefiles, procedimentos de construção e lançamento, aquele pequeno script de shell que grava o CD mestre — tudo. Devemos usar rotineiramente o controle de código-fonte em práticamente tudo que digitamos. Mesmo se não estiver trabalhando em um projeto, nosso trabalho diário fica protegido em um depósito.

## O controle de código-fonte e as construções

Há um ótimo benefício oculto em se ter um projeto inteiro sob a tutela de um SCCS: você pode ter construções de produtos que sejam _automáticas_ e _repetíveis_.

O mecanismo de construção do projeto pode extrair a fonte mais recente do depósito automaticamente. Ele pode ser executado no meio da noite após todos(espero) terem ido para casa. Você pode executar teste de regressão automáticos para verificar se a codificação do dia não estragou nada. A automação da construção assegura consistência — não há procedimentos manuais, e você precisará que os desenvolvedores se lembrem de copiar código em alguma área de construção especial.

A construção é repetível porque você sempre poderá reconstruir a fonte na forma em que ela estava em uma data específica.

## Mas minha equipe não está usando um SCCS

Que vergonha! Soa como uma oportunidade de evangelização! No entanto, enquanto você esperá que eles vejam a luz, talvez devesse implementar seu próprio controle de fonte privado. Use umas das ferramentas disponíveis gratuitamente e ganhe pontos mantendo seu trabalho pessoal seguramente guardado em um depósito(além de fazer o que seu projeto requer). Embora possa parecer duplicação de trabalho, posso garantir que isso lhe economizará aborrecimentos (e economizará o dinheiro de seu projeto) na primeira vez em que tiver de responder a perguntas como: O que fez com módulo xyz? e O que estragou a construção?. Essa abordagem também pode ajudar a convecer sua gerência de que o SCCS realmente funciona.

Não esqueça que um SCCS é igualmente aplicável a coisas que você faz fora do ambiente de trabalho.