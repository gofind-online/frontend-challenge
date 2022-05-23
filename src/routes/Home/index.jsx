import {
  React,
  useState,
  useEffect
} from 'react';
import apiGet from '../../api';
import {Box, Container} from '@mui/material';


const Home = () => {

  const [users, setUsers] = useState([]);

  const loadData = async () => {
    setUsers(await apiGet())
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container sx={{
      marginTop: '10rem'
    }}>
      <Box>asdaee</Box>
    </Container>
  );
};

{/* <h1>Home</h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>{user.first_name}</li>
          )
        })}
      </ul> */}

export default Home;