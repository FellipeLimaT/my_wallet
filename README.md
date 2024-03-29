# My Wallet 

## Sobre

My Wallet é um aplicativo web que permite aos usuários controlar suas finanças pessoais. Possui front-end, back-end e banco de dados implantado na nuvem. O projeto foi separado em dois repositórios diferentes, um para front-end e outro para back-end, utilizando Git para versionamento. O back-end foi arquitetado em controllers, routers e middlewares, enquanto o front-end foi construído utilizando ReactJS. Foi implementado o cadastro de usuários, capaz de criar uma conta através da validação de campos e senhas. O aplicativo também permite que os usuários façam login, visualizem suas transações e adicionem novas.

<p align="center">
  <img width="790" alt="My Wallet Project" src="https://user-images.githubusercontent.com/95102911/236885662-c365187c-1202-4f10-aaf1-40912291500b.png">
</p>

<hr/>

🔸 Backend Repository: https://github.com/FellipeLimaT/my_wallet_API

🔸 Deploy: https://projeto13-mywallet-front-five-beta.vercel.app/login

<hr/>

## Features

- O projeto é separado em dois repositórios diferentes, um para front-end e outro para back-end, e foi usado Git para versionamento.
- O front-end foi implementado utilizando HTML, CSS, JS e React, rodando sempre na porta 8000.
- O back-end foi arquitetado em controllers, routers e middlewares, usando dotenv para gerenciar variáveis ​​de ambiente. O servidor deve rodar na porta 5000.
- Cadastrar usuários no banco de dados através de uma solicitação POST, validando todos os campos e retornando a mensagem de erro correspondente em caso de falha.
- Os usuários podem fazer login, visualizar suas transações e adicionar novas.

<hr/>

## Motivação

O Projeto My Wallet foi desenvolvido para fornecer um aplicativo web que ajuda as pessoas a gerenciar suas finanças e que fosse fácil de usar. A inspiração veio da necessidade de ter uma ferramenta única que pudesse fornecer uma visão abrangente da situação financeira, incluindo um resumo de despesas, receitas e investimentos.

<hr/>

## Tecnologias

<p align='rigth'>
<img style='margin: 2px;' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='React'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='React Router'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/axios-800080?style=for-the-badge&logo=axios&logoColor=white' alt='Axios'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' alt='Styled-Components'/>
</p>

<hr/>

## Funcionamento:

Para baixar e configurar o projeto, siga estas etapas:

1. Clone o repositório front-end: git clone https://github.com/FellipeLimaT/my_wallet.git
2. Clone o repositório back-end: git clone https://github.com/FellipeLimaT/my_wallet_API.git
3. Instale as dependências para ambos os repositórios usando *npm install*
4. Crie um arquivo *.env* na raiz do diretório back-end, contendo as seguintes variáveis:
    `
      MONGO_URI=<your-mongodb-uri>
      PORT=5000
    `
5. Inicie o servidor backend executando npm start no diretório backend.
6. Inicie o servidor front-end executando npm start no diretório front-end.
7. Acesse o aplicativo em seu navegador em http://localhost:8000

Nota: Este projeto requer que o MongoDB esteja instalado e em execução. Se você não o tiver instalado, siga as instruções no site (https://www.mongodb.com/try/download/community).


  

