# frontend-challenge

- React
- Material-ui
- https://reqres.in -> API FAKE
- Fazer um fork deste repositório.

## Criar um SPA com 3 rotas:

### Home Page - /

Colocar algum conteúdo fake e um button com link para a lista de usuários.

### Users Page - /users

- Buscar lista de usuários em GET `/api/users`.
- Lista de usuários, pode ser uma table.
- Cada user deve ter um button com link para a edição dele.
- Button voltar para home

### User Edit Page - /users/:userId

- Buscar dados do usuário em GET `/api/users/:userId`.
- Form para alterar email, first_name e last_name.
- Fazer request para atualizar usuário em PUT `/api/users/:userId`,
  adicionar um mensagem informando o sucesso|erro.
- Button voltar para users.

---

Aqui na Gofind a gente trabalha com UX portanto no arquivo [SPECS.md](SPECS.md) você vai encontrar as especificações de UX para o desafio. Nas especificações você vai encontrar a tela de lista de usuários sugerida, e a partir dela, em conjunto com as especificações você deve criar as telas adicionais.

---

Lembrando que não precisa estar perfeito, é uma sugestão mostrando um pouco de como nós trabalhamos, mas é um bônus bem grande seguir as especificações.
