# Projeto Rede Social [Postgres+ NestJS + TypeScript + Prisma + JWT]

### Projeto configurado e conectado ao Postgresql

### Integração do Prisma com NetsJS

### API REST com CRUD

### Autenticação com JWT

### Manipulação de erros do Prisma utilizando os filtros de exceções do NestJS

### Integração Backend + Postgresql + Prisma

## **** Podemos iniciar nossa API com o comando npm run start:dev para testar o swagger executando em:

http://localhost:3000/api/


### Deploy do projeto no Heroku.

###  Url_heroku = "https://projeto-redesocial.herokuapp.com"


## Rotas: Usuários, Seguidores, Seguindo, Tweet e Categoria

API com rotas e banco de dados distintos, através do VS Code.

### **** Endpoints escolhidos para testar os métodos através do JEST: Usuários e Categoria. ****


**** Existem os seguintes Endpoints por rota:

[GET] Leitura de todos os itens
[GET] Leitura de itens individuais (por ID)
[POST] Cadastro
[PATCH] Edição de item por ID
[DELETE] Exclusão de item por ID


## **** Endpoints - Usuários ****

[GET] Leitura de todos os itens
Url_heroku/user/

[GET] Leitura de itens individuais (por ID)
Url_heroku/user/id

[POST] Cadastro
Url_heroku/user/


Campos:
```

{
  "name": "String", 
  "lastname": "String",
  "username": "String",
  "password": "String",
  "about": "String",
  "birthday": "String", 
  "tweet": "Int",
  "follower": "Int",
  "following": "Int",
  "favoritTweet: "Int",
  "createdAt: "DateTime"
}

```

[PATCH] Edição de item por ID
Url_heroku/user/id


Campos:
```

{ 
  "name": "String", 
  "lastname": "String",
  "username": "String",
  "password": "String",
  "about": "String",
  "birthday": "String", 
  "tweet": "Int",
  "follower": "Int",
  "following": "Int",
  "favoritTweet: "Int",
  "createdAt: "DateTime"
}

```
[DELETE] Exclusão de item por ID
Url_heroku/user/id

## **** Endpoints - Seguidores ****

[GET] Leitura de todos os itens
Url_heroku/follower/

[GET] Leitura de itens individuais (por ID)
Url_heroku/follower/id

[POST] Cadastro
Url_heroku/follower/


Campos:
```

{
  "name": "String",
  "userid": "Int",
  "createdAt": "DateTime"
}

```
[PATCH] Edição de item por ID
Url_heroku/follower/id


Todos os campos são obrigatórios:
```

{ 
  "name": "String",
  "userid": "Int",
  "createdAt": "DateTime"
}

```

[DELETE] Exclusão de item por ID
Url_heroku/follower/id

## **** Endpoints - Seguindo ****

[GET] Leitura de todos os itens
Url_heroku/following/

[GET] Leitura de itens individuais (por ID)
Url_heroku/following/id

[POST] Cadastro
Url_heroku/following/


Todos os campos são obrigatórios:
```

{ 
  "name": "String",
  "userid": "Int",
  "createdAt": "DateTime"
}

```
[PATCH] Edição de item por ID
Url_heroku/following/id


Todos os campos são obrigatórios:
```

{ 
  "name": "String",
  "userid": "Int",
  "createdAt": "DateTime"
}

```

[DELETE] Exclusão de item por ID
Url_heroku/following/id

## **** Endpoints - Tweet ****

[GET] Leitura de todos os itens
Url_heroku/tweet/

[GET] Leitura de itens individuais (por ID)
Url_heroku/tweet/id

[POST] Cadastro
Url_heroku/tweet/


Campos:
```

{
  "content": "String",
  "userid": "Int",
  "createdAt": "DateTime"      
}

```

[PATCH] Edição de item por ID
Url_heroku/tweet/id


Campos:
```

{ 
  "content": "String",
  "userid": "Int",
  "createdAt": "DateTime" 
}

```
[DELETE] Exclusão de item por ID
Url_heroku/tweet/id

## **** Endpoints - Categoria ****

[GET] Leitura de todos os itens
Url_heroku/category/

[GET] Leitura de itens individuais (por ID)
Url_heroku/category/id

[POST] Cadastro
Url_heroku/category/

Campos:
```

{
  "name": "String",
  "createdAt": "DateTime"      
}

```

[PATCH] Edição de item por ID
Url_heroku/category/id

Campos:
```

{
  "name": "String",
  "createdAt": "DateTime"  
}

```
[DELETE] Exclusão de item por ID
Url_heroku/category/id



