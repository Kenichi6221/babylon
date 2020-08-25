import React from 'react';
import LoginLayout from 'components/templates/LoginLayout';
import RegisterForm from 'components/organism/forms/RegisterForm';

const Login = () => {
  return (
    <LoginLayout title={'Create your account'}>
      <RegisterForm />
    </LoginLayout>
  );
};

export default Login;
