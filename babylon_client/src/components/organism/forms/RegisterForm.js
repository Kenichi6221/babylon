import React from 'react';
import AtomicForm from 'components/atomic/Form';
import { useForm } from 'react-hook-form';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import { SectionActions } from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';
import SelectInput from 'components/molecule/Select';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    user: createUser(input: $input) {
      id
      name
      email
      role
    }
  }
`;

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
  const router = useRouter();
  const [registerNewUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, control, errors } = useForm({
    // defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (user) => {
    const { role, ...input } = user;
    delete input.confirmpassword;
    input.role = role.value;

    try {
      await registerNewUser({
        variables: { input },
      });

      router.push('/login');
    } catch (exception) {
      //TODO: improve exception handdler
      console.error(exception);
    }
  };

  const options = [
    { label: 'Speaker', value: 'SPEAKER' },
    { label: 'Attendant', value: 'ATTENDANT' },
  ];

  const defaultValue = options[0];

  return (
    <AtomicForm autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
      <InputTextField
        id="name"
        name="name"
        label="name"
        type="name"
        register={register}
        error={errors.name}
        // autoComplete="username"
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
        id="password"
        name="password"
        label="password"
        type="password"
        register={register}
        autoComplete="new-password"
        error={errors.password}
      />

      <InputTextField
        id="confirmpassword"
        name="confirmpassword"
        label="confirm password"
        type="password"
        register={register}
        autoComplete="new-password"
        error={errors.confirmpassword}
      />

      <SelectInput
        id="role"
        name="role"
        label="role"
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
