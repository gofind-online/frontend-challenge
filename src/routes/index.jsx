import Home from './Home';
import UserEditPage from './UserEditPage';
import UsersPage from './UsersPage';
import {
  Routes,
  Route,
  Navigate
} from 'react-router';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/user-edit/:id" element={<UserEditPage />} />
      <Route path="*" element={<Navigate to='/home' />} />
    </Routes>
  );
};

export default AppRoutes;
