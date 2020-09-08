import React from 'react';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import AtomicForm from 'components/atomic/Form';
import { yupResolver } from '@hookform/resolvers';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import SectionActions from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';
import InputTextAarea from 'components/molecule/TextArea/InputTextAarea';
import { useMutation, gql } from '@apollo/client';
import { UserActions } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import userSelector from 'redux/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
});

const UPDATE_PROFILE = gql`
  mutation updateUser($id: ID!, $input: UserInput!) {
    user: updateUser(id: $id, input: $input) {
      id
      name
      email
      role
      website
      bio
    }
  }
`;

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { id, ...defautlUser } = useSelector((state) =>
    userSelector.getUser(state)
  );

  const [updateUserProfile] = useMutation(UPDATE_PROFILE);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: defautlUser,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (input) => {
    const {
      data: { user },
    } = await updateUserProfile({
      variables: { id, input },
    });
    dispatch(UserActions.userLoged({ user }));
  };

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
