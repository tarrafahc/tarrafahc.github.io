+++
title = "Como postar conteúdo no site do Tarrafa"
date = 2017-09-29
menu = ""
description = ""
+++

O site do tarrafa foi feito usando [Hugo](https://gohugo.io) para gerar as páginas do site, e [git](https://git-scm.com/) para fazer o versionamento e deploy. O processo para gerar conteúdo pro site se resume em:

* Instalar os programas envolvidos
* Clonar o repositório
* Criar conteúdo
* Gerar o Site

# Instalação dos programas

Se a sua distribuição não vem com git instalado, a instalação pode ser realizada diretamente pelo gerenciador de pacotes. No debian por exemplo seria: 

    sudo apt-get install git

(tenho que aprender como mostrar código em markdown)

Já para a instalação do hugo, eu recomendo o uso dos binários do site deles, como descrito [nesta sessão](https://gohugo.io/getting-started/installing/).

Confira se o hugo roda no seu computador através do comando:

    hugo help

ou 

    hugo env

# Clonagem do repositório e teste 

O site do Tarrafa está hospedado no github pages, serviço gratuito de hospedagem de páginas estáticas voltada para desenvolvedores, organizações e seus projetos. O repositório do site pode ser clonado através do comando:

    git clone https://github.com/tarrafahc/tarrafahc.github.io.git

a partir disso entre na pasta builder do repositório e teste se o hugo gera o site corretamente:

    hugo server

abra o seu navegador em localhost:1313


Ao executar o comando hugo server, toda alteração na pasta é atualizada pelo hugo e exibida no localhost:1313. Agora podemos criar páginas ou editar o tema. 

# Criar conteúdo

## novas páginas

Novas páginas podem ser criadas pelos comando:

    hugo new <nome da página>.md

exemplos:

    hugo new wiki/como-hackear-um-facebook.md

    hugo new eventos.md

tem que por o .md no final para o hugo reconhecer o arquivo. Doutra forma n "renderiza"

Ao executar o comando, um arquivo .md é criado na pasta /content e pode ser editado usando markdown.O estilo de markdown é o padrão do hugo chamado blackfriday e a documentação está disponível [aqui](https://gohugo.io/content-management/formats/). 

Caso queiras editar alguma página existente, vais encontrá-la em /content e pronta para ser editada.
 
# Atualizando as alterações

Ok, depois de algumas iterações o conteúdo está pronto pra ir para a página. Execute o script `deploy.sh` e ele faz tudo pra ti.
