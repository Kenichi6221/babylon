import React from 'react';
import AtomicForm from 'components/atomic/Form';
import { useForm } from 'react-hook-form';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import SectionActions from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import useLogin from 'customHooks/useLogin';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const { handleLoginSubmit, loginErrors } = useLogin();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  if (loginErrors) {
    console.log('from login errors are ', loginErrors);
  }

  return (
    <AtomicForm autoComplete="off" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputTextField
        id="email"
        name="email"
        label="email"
        type="email"
        register={register}
        autoComplete="username"
      />
      <InputTextField
        id="password"
        name="password"
        label="password"
        type="password"
        register={register}
        autoComplete="current-password"
      />
      <SectionActions>
        <SubmitButton type="submit">submit</SubmitButton>
      </SectionActions>
    </AtomicForm>
  );
};

export default LoginForm;
