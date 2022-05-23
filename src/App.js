import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Button, ThemeProvider } from '@mui/material';
import AppRoutes from './routes';
import { GoTheme } from './theme/GoTheme';
import Header from './components/Header';
import { Container } from '@mui/system';


const App = () => {
  return (
    <ThemeProvider theme={GoTheme}>
      <Container maxWidth='md'>
        <Header>
          <Router>
            <AppRoutes />
          </Router>
        </Header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
