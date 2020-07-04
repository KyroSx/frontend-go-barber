import React from 'react';

import GlobalStyle from './styles/GlobalStyle';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthContext.Provider value={{ name: 'yeah' }}>
        <SignIn />
      </AuthContext.Provider>
    </>
  );
};

export default App;
