import React from 'react';
import LoginLayout from 'components/templates/LoginLayout';
import LoginForm from 'components/organism/forms/LoginForm';

const Login = () => {
  return (
    <LoginLayout title={'Log in to Babylon'}>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
