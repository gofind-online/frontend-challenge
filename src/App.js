import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppRoutes from './routes';
import { GoTheme } from './theme/GoTheme';
import Header from './components/Header';
import { Container } from '@mui/system';


const App = () => {
  return (
    <ThemeProvider theme={GoTheme}>
      <CssBaseline>
        <Container maxWidth='xl'>
          <Router>
            <Header />
            <AppRoutes />
          </Router>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
