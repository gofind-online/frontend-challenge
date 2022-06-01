import { Box, Button, TableCell, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api'

const UserEdit = () => {

  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [showUserForm, setShowUserForm] = useState(false);

  useEffect(() => {
    async function resUser() {
      return setUser(await getUser(id))
    }
    resUser()
  }, [id]);

  const toggleUserForm = () => {
    setShowUserForm(!showUserForm)
  }


  return (
    <Container sx={{
      marginTop: "7rem",
    }}>

      <Box>
        <Button onClick={toggleUserForm}>
          {!showUserForm ? 'Editar Usuário' : 'Fechar'}
        </Button>

        {!showUserForm ? (
          <TableRow>
            <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ) : (<p>User Form</p>)}

      </Box>

    </Container>

  );
};

export default UserEdit;