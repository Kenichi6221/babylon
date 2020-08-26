import React from 'react';
import BabilonLoginRegister from 'components/organism/BabilonLoginRegister';
import LoginLayout from 'components/templates/LoginLayout';

export default function Home() {
  // const {
  //   autheticationWasChecked,
  //   isAuthenticated,
  // } = useSecureAuthentication();
  // if (!autheticationWasChecked) {
  //   return null;
  // }
  // return isAuthenticated && <DefaultLayout />;
  return (
    <LoginLayout title={'Babylon'}>
      <BabilonLoginRegister />
    </LoginLayout>
  );
}
