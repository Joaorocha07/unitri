import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import AuthLogin from '../contexts/AuthLogin';

import Login from '../pages/Login';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Router>
      <AuthLogin>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthLogin>
    </Router>
  );
};

export default AppRoutes;
