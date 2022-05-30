import {
  React,
  useState,
  useEffect
} from 'react';
import apiGet from '../../api';
import {
  Container,
  Divider,
  Table,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  TableBody
} from '@mui/material';
import SearchBox from '../../components/SearchBox';
import {
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import GoButton from '../../components/GoButton';
import { Button } from "@mui/material";

const showAlert = () => {
  alert('Please');
}

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    setUsers(await apiGet())
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container sx={{
      marginTop: "7rem",
      marginBottom: 10
    }}>
      <SearchBox />
      <GoButton
        color="secondary.contrastText"
        bgColor="secondary.main"
        variant="contained"
        type="personAdd"
        marginTop="default"
        borderSet='light'
        typeColor="secondary"
      >
        Adicionar Usuário
      </GoButton>
      <TableContainer color="background" sx={{
        marginTop: 2
      }}>
        <Table size="large" width="100%" sx={{
          minWidth: 650
        }}>
          <TableHead>
            <TableRow tabIndex={-2}>
              <TableCell>Nome do Usuário</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => {
              return (
                <TableRow
                  key={user.id}
                  scope="row"
                >
                  <TableCell >{`${user.first_name} ${user.last_name}`}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right" sx={{
                    display: "flex",
                  }} >
                    <Button>
                      <EditIcon sx={{
                        color: "black"
                      }} />
                    </Button>

                    <Divider orientation="vertical" />
                    <Button>
                      <DeleteIcon sx={{
                        color: "red"
                      }} />
                    </Button>

                  </TableCell>

                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default UsersPage;