# TarrafaHC Website

Este projeto foi feito em Rect](https://reactjs.org/), uma biblioteca Javascript para criar websites.

![demo](https://i.imgur.com/8Wlv2OZ.gif)

## Como desenvolver

# Instale [NodeJS](https://nodejs.org/en/) e [NPM](https://www.npmjs.com/) (Node Package Manager)
[Versões do Node](https://nodejs.org/en/about/releases/) (pode instalar a 12 mesmo)
```sudo apt install nodejs
sudo apt install npm (normalmente é instalado junto com o nodejs)
node --version
npm --version
```

# Clone este repositório para o seu computador
```
git clone https://github.com/Markkop/tarrafahcwebpage.git
cd tarrafahcwebpage
```

# Instale as dependências do projeto
Este comando instala todas as `dependencies` e `devDependencies` declaradas no [package.json](https://github.com/tarrafahc/tarrafahc.github.io/blob/dev/package.json), além do próprio `node_modules` que é padrão do npm
```
npm install
```

# Veja o projeto no navegador
Este comando roda o `scripts: start` do [package.json](https://github.com/tarrafahc/tarrafahc.github.io/blob/dev/package.json)
```
npm start
```

# Para disponibilizar em um site real
Este comando executa uma dependência que serve uma página estática do projeto em uma outra [branch](https://github.com/tarrafahc/tarrafahc.github.io/tree/gh-pages).
Aqui tem um [tutorial](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f), mas se for feito para organização em vez de um usuário, algumas coisas mudam. (aguarde novidades)
`npm run deploy`
