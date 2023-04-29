import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';

import AuthLogin from '../contexts/AuthLogin';
import Login from '../pages/Login';

const AppRoutes = () => {
    return (
        <Router>
            <AuthLogin>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="*" element={<Navigate to="/login" />}></Route>
                </Routes>
            </AuthLogin>
        </Router>
    );
};

export default AppRoutes;
