import React from 'react';
import AtomicForm from 'components/atomic/Form';
import { useForm } from 'react-hook-form';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import { SectionActions } from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';
import SelectInput from 'components/molecule/Select';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmpassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null]),
});

const RegisterForm = () => {
  const { register, handleSubmit, control, errors } = useForm({
    // defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    const { role, ...input } = data;
    input.role = role.value;
    console.log(input);
  };

  const options = [
    { label: 'Speaker', value: 'SPEAKER' },
    { label: 'Attendant', value: 'ATTENDANT' },
  ];

  const defaultValue = options[0];

  return (
    <AtomicForm autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
      <InputTextField
        name="name"
        label="name"
        type="name"
        register={register}
        error={errors.name}
        // autoComplete="username"
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />
      <InputTextField
        name="email"
        label="email"
        type="email"
        register={register}
        autoComplete="username"
        error={errors.email}
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />
      <InputTextField
        name="password"
        label="password"
        type="password"
        register={register}
        autoComplete="new-password"
        error={errors.password}
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />

      <InputTextField
        name="confirmpassword"
        label="confirm password"
        type="password"
        register={register}
        autoComplete="new-password"
        error={errors.confirmpassword}
        // margin="1.5rem 1.5rem 0.5rem 1.5rem"
      />

      <SelectInput
        name="role"
        label="role"
        // placeholder={'hola'}
        control={control}
        options={options}
        defaultValue={defaultValue}
      />

      <SectionActions>
        <SubmitButton type="submit">submit</SubmitButton>
      </SectionActions>
    </AtomicForm>
  );
};

export default RegisterForm;
