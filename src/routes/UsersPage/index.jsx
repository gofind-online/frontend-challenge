import {
  Container,
} from '@mui/material';
import SearchBox from '../../components/SearchBox';
import UsersTable from '../../components/UsersTable'
import GoButton from '../../components/GoButton';

const UsersPage = () => {

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
      <UsersTable/>
    </Container>
  );
};
export default UsersPage;
