import { Box, AppBar } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import GoLogo from '../../img/GoLogo.png'

const useStyles = makeStyles(theme => {

});

const Header = ({ children }) => {


  return (
    <>
      <AppBar sx={{
        bgcolor: 'background.dark',


      }}>
        <Box sx={{
          padding: 3,

        }}
        >
          <img src={GoLogo} width='100' />
        </Box>
      </AppBar>
      {children}
    </>
  );
};

export default Header;
