import React from 'react';
import DefaultLayout from 'components/templates/DefaultLayout';
import useSecureAuthentication from 'customHooks/useSecureAuthentication';

export default function Home() {
  const { autheticationWasChecked } = useSecureAuthentication();
  if (!autheticationWasChecked) {
    return null;
  }
  return <DefaultLayout />;
}
