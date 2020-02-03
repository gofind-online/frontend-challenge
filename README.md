# frontend-challenge

- React
- Material-ui
- https://reqres.in -> API FAKE
- Fazer um fork deste repositório.

## Criar um SPA com 3 rotas:

#### Home Page - /
  Colocar algum conteúdo fake e um button com link para a lista de usuários.

#### Users Page - /users
  - Buscar lista de usuários em GET `/api/users`.
  - Lista de usuários, pode ser uma table.
  - Cada user deve ter um button com link para a edição dele.
  - Button voltar para home
  
#### User Edit Page - /users/:userId
  - Buscar dados do usuário em GET `/api/users/:userId`.
  - Form para alterar email, first_name e last_name.
  - Fazer request para atualizar usuário em PUT `/api/users/:userId`,
  adicionar um mensagem informando o sucesso|erro.
  - Button voltar para users.

