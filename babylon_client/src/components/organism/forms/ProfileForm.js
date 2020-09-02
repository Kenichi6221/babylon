import React from 'react';
import InputTextField from 'components/molecule/Inputs/InputTextField';
import AtomicForm from 'components/atomic/Form';
import { yupResolver } from '@hookform/resolvers';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import SectionActions from 'components/atomic/Section/SectionActions';
import SubmitButton from 'components/atomic/Button/SubmitButton';
import InputTextAarea from 'components/molecule/TextArea/InputTextAarea';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
});

const ProfileForm = () => {
  const { register, handleSubmit, errors } = useForm({
    // defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (submitInfo) => {
    console.log(submitInfo);
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
