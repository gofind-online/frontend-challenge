import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <Container maxWidth="xl" sx={{
      minWidth: '540px',
      paddingTop: "7rem",
      paddingBottom: "7rem",
      marginTop: "7rem",
      display: "flex",
      alignItems: "center",
      boxShadow: 3
    }}>
      <Box sx={{
        width: "50%",
        minWidth: "215px",
        padding: 3,
        marginRight: 1
      }}>
        <Typography maxWidth="70%" variant="h3">Sistema de Usuários GoFind</Typography>
      </Box>

      <Box sx={{
        width: "50%",
        minWidth: "215px",
        padding: 3,

      }}>
        <Typography
          maxWidth="70%"
          variant="h5"
          sx={{
            marginBottom: "3rem"
          }}
        >
          Começe a consultar usuários de forma prática
        </Typography>
        <Link style={{ textDecoration: 'none' }} to={"/users"}>
          <Button variant="contained">Lista de Usuários</Button>
        </Link>
      </Box>

    </Container>
  )
};



export default Home;