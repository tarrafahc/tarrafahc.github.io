# TarrafaHC Website

Este projeto foi feito em [React](https://reactjs.org/), uma biblioteca Javascript para criar websites.\
_Atualmente há um problema com o certificado de segurança do Tarrafa, estamos trabalhando nisso_

![demo](https://i.imgur.com/8Wlv2OZ.gif)

## Como desenvolver

```bash
# Install system dependencies
sudo apt install nodejs npm git

# Clone this repository
git clone https://github.com/tarrafahc/tarrafahc.github.io.git

# Install project dependencies
cd tarrafahc.github.io
npm install

# Serve website on port 3000
npm start
```

### Para disponibilizar em um site real

Este comando executa uma dependência que serve uma página estática do projeto em uma outra [branch](https://github.com/tarrafahc/tarrafahc.github.io/tree/gh-pages).
Aqui tem um [tutorial](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f), mas se for feito para organização em vez de um usuário, algumas coisas mudam. (aguarde novidades)

```
npm run deploy
```
