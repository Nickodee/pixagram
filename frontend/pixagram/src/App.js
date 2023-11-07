import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login'
import PasswordReset from './pages/PasswordResetPage/PasswordReset'
import PasswordConfirm from './pages/PasswordConfirmPage/PasswordConfirm'
import ActivationPage from './pages/Activationpage/Activation'
import SignUp from './pages/Signup/Signup'

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<PasswordReset />} />
        <Route path="/confirmpasswordreset" element={<PasswordConfirm />} />
        <Route path="/activateaccount" element={<ActivationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
