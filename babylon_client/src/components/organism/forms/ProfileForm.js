import React from 'react';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import AtomicForm from 'components/atomic/Form';
import { yupResolver } from '@hookform/resolvers';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import SectionActions from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';
import InputTextAarea from 'components/molecule/TextArea/InputTextAarea';
// import { useSelector } from 'react-redux';

import { gql, useQuery } from '@apollo/client';
// import userSelector from 'redux/selectors';

const GET_USER_PROFILE = gql`
  query getUserById($id: ID!) {
    user: getUserById(id: $id) {
      id
      name
      email
      bio
      website
    }
  }
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
});

const ProfileForm = () => {
  // const user = useSelector((state) => userSelector.getUser(state));

  // const { data, loading } = useQuery(GET_USER_PROFILE, {
  //   variables: { id: user.userId },
  // });

  const { register, handleSubmit, errors } = useForm({
    // defaultValues: data ?? null,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (submitInfo) => {
    console.log(submitInfo);
  };

  if (loading) {
    return 'loading...';
  }

  return (
    <AtomicForm autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
      <InputTextField
        id="name"
        name="name"
        label="name"
        type="name"
        register={register}
        error={errors.name}
      />

      <InputTextField
        id="email"
        name="email"
        label="email"
        type="email"
        register={register}
        autoComplete="username"
        error={errors.email}
      />

      <InputTextField
        id="website"
        name="website"
        label="website"
        type="website"
        register={register}
      />

      <InputTextAarea id="bio" name="bio" label="bio" register={register} />

      <SectionActions>
        <SubmitButton type="submit">submit</SubmitButton>
      </SectionActions>
    </AtomicForm>
  );
};

export default ProfileForm;
