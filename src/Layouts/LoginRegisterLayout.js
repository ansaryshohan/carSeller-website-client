import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginRegisterNavBar from '../Components/Login&Register/LoginRegisterNavBar';

const LoginRegisterLayout = () => {
  return (
    <div>
      <LoginRegisterNavBar></LoginRegisterNavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginRegisterLayout;