import { Box, AppBar } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import GoLogo from '../../img/GoLogo.png';



const useStyles = makeStyles(theme => {

});

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

          <img alt="Logo da empresa GoFind" src={GoLogo} width='100' />
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
