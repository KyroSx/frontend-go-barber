import React from 'react';

import GlobalStyle from './styles/GlobalStyle';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  );
};

export default App;
