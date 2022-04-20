
# Blogs API
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


API de um CRUD posts de blog (com o Sequelize). Foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao banco de dados.

Foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, também uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma.

# Habilidades
Nesse projeto, foi construído um back-end usando ORM com o pacote sequelize do npm, e as seguintes habilidades:

- Criar e associar tabelas usando models do sequelize
- Construir endpoints para consumir os models que criar
- Fazer um CRUD com o ORM

# Relacionamentos

Para fazer um post é necessário usuário e login, portanto foi trabalhada a relação entre user e post. Também é necessário a utilização de categorias para os posts, assim trabalhando a relação de posts para categorias e de categorias para posts.


# Documentação

## Endpoints


### POST /user

- O endpoint é capaz de adicionar um novo user

- O corpo da requisição deve ter o seguinte formato: 


```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

   - **displayName**: É o nome completo do usuário, e tem que ser uma string com no mínimo 8 caracteres para ser válida;
   - **email**: É o email do usuário, e será considerado válido se tiver o formato `<prefixo>@<domínio>` e não tiver outro usuário cadastrado com o mesmo email;
   - **password**: É a senha do usuário e deve ser uma string com 6 caracteres;

- **Caso exista uma pessoa com o mesmo email na base, é retornado o seguinte erro**:

  ```json
  {
    "message": "User already registered"
  }
  ```

### POST `/login`

- Para fazer login deverá ser informado o email e a password do usuário cadastrado.

- O corpo da requisição deverá seguir o formato abaixo:

  ```json
  {
    "email": "email@mail.com",
    "password": "123456"
  }
  ```

- Caso algum desses campos seja inválido ou não exista um usuário correspondente no banco de dados, é retornado um código de status 400 com o corpo `{ message: "Invalid fields" }`.

- Caso esteja tudo certo com o login, a resposta deve ser um token `JWT`.

### GET `/user`

lista todos os **Users** e o retorno tem a seguinte estrutura:

  ```json
  [
    {
      "id": "401465483996",
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ]
  ```

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### GET `/user/:id`

- Retorna os detalhes do usuário baseado no `id` da rota. A resposta tem o seguinte formato:

  ```json
  {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### GET `/categories`

lista todas as Categorias e retorna na seguinte estrutura:

```json
[
  {
    "id": 1,
    "name": "Escola"
  },
  {
    "id": 2,
    "name": "Inovação"
  }
]
```

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### POST `/post`

- Esse endpoint deve receber um title, content e categoryIds no corpo da requisição para criar o post na base. O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

- Caso o post não contenha o `title`, `content` ou `categoryIds` a API deve retorna um erro de `status 400` com uma mensagem de erro como resposta.

- `categoryIds` deve ser um array com os números das categorias na qual o post pertence

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### GET `/post`

- Esse endpoint lista todos os _BlogPosts_ e responde com a seguinte estrutura:

```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
]
```

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### GET `post/:id`

- Retorna um **BlogPost** com o `id` especificado. O retorno tem o seguinte formato:

```json
  {
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    }
  ]
}
```

- Caso o post não exista, um código 404 é retornado e a resposta será igual a:

```json
{
  "message": "Post does not exist"
}
```

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### PUT `/post/:id`

- O endpoint deve receber um **BlogPost** que irá sobrescrever o original com o `id` especificado na URL. Só quem tem permissão para atualizar é o usuário que criou o **BlogPost**.

- A(s) categoria(s) do post **não** podem ser editadas, somente o `title` e `content`.

- O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```

- Caso uma pessoa diferente de quem criou faça a requisição, é retornado um código `status 401` e a seguinte resposta será dada.

```json
{
  "message": "Unauthorized user"
}
```

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### DELETE `post/:id`

- Deleta o post com o `id` especificado na URL. Só é permitido para o usuário que criou o **BlogPost**.

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### DELETE `/user/me`

- O usuário que fez a requisição é apagado, e um código status 204 é retornado

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```

### GET `post/search?q=:searchTerm`

- Lista todos os **BlogPosts** que contenham em seu título, ou conteúdo, o termo pesquisado na `query` da URL. O retorno deve ter o seguinte formato:

```json
[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
  ```

- Quando nada é passado na `query` da URL, todos os post são listados.

- A requisição deve ter token de autenticação nos headers e, caso contrário, é retornado um código de `status 401` e a seguinte resposta:

```json
{
    "message": "Token not found"
}
```

- Se o token for inválido é retornado um código status 401 e a seguinte resposta:

```json
{
    "message": "Expired or invalid token"
}
```


## Para instalar localmente

1. Clone o repositório
  * `git clone git@github.com:imgeff/Blog-API.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Blog-API`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Crie e popule o banco de dados:
    * `npm prestart` (A conexão com MYSQL deve está ativa)
  * Para ativar a conexão MYSQL:
    * `systemctl start mysql`
  * Inicialize o servidor:
      * `npm start`


    
## Stack utilizada

**Back-end:** Node.js, Express, Sequelize

## Feedback

Se você tiver algum feedback, por favor mande uma mensagem em  https://www.linkedin.com/in/imgeff/

