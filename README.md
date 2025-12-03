# API-GerenciadorDeCidades
API simples para gerenciar Estados e Cidades do Brasil, permitindo visualizar, criar, atualizar e deletar registros.

# Status do Projeto
Em produção.

# Tecnologias Utilizadas
- Node.Js (Express)
- MySQL
- Postman

# Estrutura do Projeto
Dentro da pasta src, temos algumas pastas e um arquivo:
- config
- controllers
- middleware
- models
- routers
- services
- server.js

Crie na raiz do projeto um arquivo chamado .env, que é onde vão ficar as variaveis do database e do middleware.

Dentro do arquivo .env, utilize:
- DB_NAME = "Seu banco de dados"
- DB_USER = "Seu usuario do MySQL"
- DB_PASSWORD = "Sua senha do MySQL"
- DB_HOST = localhost
- SECRET = "Uma senha secreta, aqui você pode colocar sua preferencia"
- PORT = 3000 | "Ou a porta que você escolher"
- MEU_TOKEN_FIXO = "Coloque ou crie um token a sua preferencia"

# Como Rodar o Projeto
a sua maquina precisa estar instalado:
- Node.Js
- Git
- MySQL
- Postman

Primeiro, crie um banco de dados no MySQL:
- Em um arquivo MySQL, digite CREATE DATABASE "E o nome do database que voce escolher".

Ex: CREATE DATABASE dbGerenciadorDeCidades;

Depois de criar o database, vá para o terminal do projeto.

Entrando no terminal do projeto, digite esses comandos:
- npm install (Para instalar todas as dependencias do projeto).
- npm run dev (Para iniciar o servidor).

Voltando para o MySQL, crie os Estados do Brasil, pois, depois de ter iniciado o servidor, a criação das tabelas "Estados" e "Cidades" já devem ter sido criadas automaticamente.
Para cadastrar um Estado, entre no database e insira os dados na tabela "estados".

Digite esse comando para inserir dados na tabela "estados":

INSERT INTO estados (nome, uf, createdAt, updatedAt)
VALUES
('Acre', 'AC', NOW(), NOW());


# Rotas
- Estado:

  GET      /estados        Listagem

  GET      /estados/{id}   Retorna um estado

- Cidade:

  GET      /cidades        Listagem

  GET      /cidades/{id}   Retorna uma cidade

  POST     /cidades        Cria uma cidade
  
  PUT      /cidades/{id}   Edita uma cidade
  
  DELETE   /cidades/{id}   Remove uma cidade

- Exemplos de rotas:

  GET      http://localhost:3000/api/cidades
  
  GET      http://localhost:3000/api/cidades/1
  
  POST     http://localhost:3000/api/cidades
  
  PUT      http://localhost:3000/api/cidades/1
  
  DELETE   http://localhost:3000/api/cidades/1

# Criando e Editando Cidades
Para criar ou editar uma cidade e vincular ela a um estado, envie no corpo JSON do postman com essas informações:

{
    "nome": "São Paulo",
    "estado_uf": "SP"
}


# Autenticação
Todas as rotas estão protegidas com token, então para acessar as rotas, é preciso passar um Authorization (Bearer Token) no cabeçalho/Header.
Utilize a ferramenta Postman/Insomnia para testar.
O token que colocar, tem que ser igual da variavel do arquivo .env "MEU_TOKEN_FIXO".

Exemplo: Authorization: Bearer MEU_TOKEN_FIXO
