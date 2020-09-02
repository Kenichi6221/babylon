import React from 'react';
import DefaultLayout from 'components/templates/DefaultLayout';
import ProfileForm from 'components/organism/forms/ProfileForm';

const profile = () => {
  return (
    <DefaultLayout title="Profile">
      <ProfileForm />
    </DefaultLayout>
  );
};

export default profile;
