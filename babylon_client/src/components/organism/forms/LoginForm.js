import React from 'react';
import AtomicForm from 'components/atomic/Form';
import { useForm } from 'react-hook-form';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import fetchData, { buildPostOptions, buidPostFormData } from 'utils/Fetch';
import { environment } from 'utils/enviroment';

const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    // defaultValues: defaultValues,
  });

  const handleSubmitForm = async (data) => {
    const url = `${environment.api.url}/login`;
    const options = buidPostFormData({ data });
    const result = await fetchData(url, options);
    console.log(result);
  };

  return (
    <AtomicForm autocomplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
      <InputTextField
        name="email"
        label="email"
        type="email"
        register={register}
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />
      <InputTextField
        name="password"
        label="password"
        type="password"
        register={register}
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />
      <button type="submit">submit</button>
    </AtomicForm>
  );
};

export default LoginForm;
