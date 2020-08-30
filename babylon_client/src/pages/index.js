import React from 'react';
import BabilonLoginRegister from 'components/organism/BabilonLoginRegister';
import LoginLayout from 'components/templates/LoginLayout';

export default function Home() {
  return (
    <LoginLayout title={'Babylon'}>
      <BabilonLoginRegister />
    </LoginLayout>
  );
}
