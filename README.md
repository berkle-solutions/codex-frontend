# Codex Front-End

## Como Rodar o projeto

Instalar o NodeJS [Node.js](https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi).

```sh
git clone https://github.com/berkle-solutions/codex-frontend.git
git checkout -b <seu-nome>
npm install
npm run start
```

## Desenvolvimento

```sh
Adicionar o importe do view no arquivo routes.js

import NOME-DA-VIEWPage from './views/NOME-DA-VIEW.js'


{
    path: "/CAMINHO",
    name: "NOME DA VIEW",
    icon: "nc-icon nc-caps-small",
    component: NOME-DA-VIEWPage,
    layout: "/admin",
 },
```

Criar arquivo .js dentro da pasta views

```sh
/views/NOME-DA-VIEWPage.js

copiar estrutura base do arquivo Exemplo.JS

```

Commits:

```sh
git branch (checar se está na branch com o seu nome)
git status
git add .
git commit -m "breve descrição da sua atividade"
git push -u origin <seu-nome>
```
