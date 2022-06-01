import { Box, AppBar } from '@mui/material';
import GoLogo from '../../img/GoLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <AppBar sx={{
        bgcolor: 'background.dark'
      }}>
        <Box sx={{
          padding: 3,
        }}
        >
          <Link to={"/home"}>
            <img alt="Logo da empresa GoFind" src={GoLogo} width='100' />
          </Link>

        </Box>
      </AppBar>
    </>
  );
};

export default Header;
