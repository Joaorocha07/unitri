import { createContext, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const AuthLogin = ({ children }) => {
  const login = async (userId, password, database) => {
    try {
      const formData = new FormData();

      formData.append('userId', userId);
      formData.append('password', password);
      formData.append('database', database);

      axios.post('https://acl-hmg.prod.unitri.edu.br/login', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      console.log('Erro no servidor!');
    }
  };

  return (
    <AuthContext.Provider value={useMemo(() => ({
      login,
    }), [])}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLogin;
