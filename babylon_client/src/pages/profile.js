import React from 'react';
import DefaultLayout from 'components/templates/DefaultLayout';
import ProfileForm from 'components/organism/forms/ProfileForm';

const Profile = () => {
  return (
    <DefaultLayout title="Profile">
      <ProfileForm />
    </DefaultLayout>
  );
};

export default Profile;
