import {
  Alert,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@mui/material';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../../api';
import UserForm from '../../components/UserForm';

const UserEdit = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    async function resUser() {
      return setUser(await getUser(id))
    }
    resUser()
  }, [id]);

  const toggleUserForm = () => {
    setShowUserForm(!showUserForm)
  };

  const editPost = (user) => {
    async function apiPatch() {
      try {
        const res = await fetch(`https://reqres.in/api/users/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        const json = await res.json();

        setUser(json);
        setShowUserForm(false);
        setMessage(' ');

        return json.data
      } catch (err) {
        console.log(err);
      }
    }
    apiPatch()
  };

  return (
    <Container sx={{
      marginTop: "7rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Box>
        {!showUserForm ? (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{`${user.first_name || user.name} ${user.last_name}`}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <UserForm
            userData={{
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email
            }}
            handleSubmit={editPost}
            btnText="Salvar"
          />
        )}
        <Button onClick={toggleUserForm}>
          {!showUserForm ? 'Editar Usuário' : 'Fechar'}
        </Button>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
        {message && <Alert severity="success">Usuário editado com sucesso!</Alert>}
      </Box>
    </Container>
  );
};

export default UserEdit;
