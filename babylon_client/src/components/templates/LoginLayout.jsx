import React from 'react';
import LogoSection from 'components/molecule/LogoSection';
import TitleSection from 'components/molecule/TitleSection';
import LoginForm from 'components/organism/forms/LoginForm';

const LoginLayout = () => {
  return (
    <>
      <LogoSection />
      <TitleSection title="Log in to Babylon" />
      <LoginForm />
    </>
  );
};

export default LoginLayout;
