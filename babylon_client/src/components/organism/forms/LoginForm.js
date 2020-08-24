import React from 'react';
import AtomicForm from 'components/atomic/Form';
import { useForm } from 'react-hook-form';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import fetchData, { buidPostFormData } from 'utils/Fetch';
import { environment } from 'utils/enviroment';
import { SectionActions } from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';

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
      <SectionActions>
        <SubmitButton type="submit">submit</SubmitButton>
      </SectionActions>
    </AtomicForm>
  );
};

export default LoginForm;
