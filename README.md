# Agrotools
## Teste de avaliação de capacidades para programação

Foi usado um banco de dados Mysql em um servidor grátis, as únicas informações prévia inserida nele foram nomes de usuários. A criação das tabelas e seu gerenciamento ficam por conta do ORM Sequelize.

Foram criadas duas rotas, uma para o front-end e uma para o back-end "/api", apesar das duas coisas estarem no mesmo lugar, a implementação é separada. Assim, o front-end faz requisições ao back-end.

Para instalar precisa ter o node e instalado em sua máquina. Baixe os aqruivos em

> https://github.com/thiago220/agrotools

Vá ao diretório via terminal e execute os seguitnes comandos:

```
npm install
```

e

```
npm start
```

Logo após basta acessa em algum navegador o endereço

> http://localhost:3000

##ENDPOINTS

Retorna todos os usuários
GET - /api/usuarios 

Retorna todas as respostas de um questionário por "id"
GET - /api/questionario-respostas/:id

Processa formulário, registra um questionário e retorna à home page
POST - /api/salvar-questionario

Processa formulário, registra uma resposta e retorna à home page
POST - /api/salvar-resposta

