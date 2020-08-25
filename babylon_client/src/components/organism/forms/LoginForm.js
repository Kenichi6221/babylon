import React from 'react';
import AtomicForm from 'components/atomic/Form';
import { useForm } from 'react-hook-form';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import fetchData, { buidPostFormData } from 'utils/Fetch';
import { environment } from 'utils/enviroment';
import { SectionActions } from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';
import { useDispatch } from 'react-redux';
import { UserActions } from 'redux/actions';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    // defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    const url = `${environment.api.url}/login`;
    const options = buidPostFormData({ data });
    const result = await fetchData(url, options);
    if (result.ok) {
      dispatch(UserActions.userLoged(result));
      router.push('/');
    }
  };

  return (
    <AtomicForm autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
      <InputTextField
        name="email"
        label="email"
        type="email"
        register={register}
        autoComplete="username"
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />
      <InputTextField
        name="password"
        label="password"
        type="password"
        register={register}
        autoComplete="current-password"
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />
      <SectionActions>
        <SubmitButton type="submit">submit</SubmitButton>
      </SectionActions>
    </AtomicForm>
  );
};

export default LoginForm;
