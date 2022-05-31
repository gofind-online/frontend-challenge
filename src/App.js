import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppRoutes from './routes';
import { GoTheme } from './theme/GoTheme';
import Header from './components/Header';
import { Container } from '@mui/system';
import { UsersContextProvider } from './contexts/UsersContexts'


const App = () => {
  return (
    <ThemeProvider theme={GoTheme}>
      <CssBaseline>
        <UsersContextProvider>
          <Container maxWidth='xl'>
            <Router>
              <Header />
              <AppRoutes />
            </Router>
          </Container>
        </UsersContextProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
