import {
  useState,
  useEffect
} from 'react';
import {
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import {
  Button,
  Divider,
  Table,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  TableBody
} from '@mui/material';
import { apiGet } from '../../api';
import { Link } from 'react-router-dom';


const UsersTable = ({ children }) => {

  const [users, setUsers] = useState([]);

  const loadData = async () => {
    setUsers(await apiGet())
  }

  useEffect(() => {
    loadData();
  }, []);



  return (

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
                  <Link to={`/user-edit/${user.id}`}>
                    <Button >
                      <EditIcon sx={{
                        color: "black"
                      }} />
                    </Button>
                  </Link>

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

  );

}

export default UsersTable;
