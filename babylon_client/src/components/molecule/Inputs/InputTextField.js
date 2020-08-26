import React from 'react';
import FormTextField from 'components/atomic/Field/FormTextField';
import LabelAsPlaceHolder from 'components/atomic/Label';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorField from 'components/atomic/Text/ErrorField';
import FormSection from 'components/atomic/Section/FormSection';

const InputFormSection = styled(FormSection)`
  & ${FormTextField}:not(:placeholder-shown) + label {
    transform: translate(0.5rem, -0.5rem);
    font-size: 0.8rem;
  }

  & ${FormTextField}:placeholder-shown + label {
    transform: translate(0.5rem, 1rem);
  }

  & ${FormTextField}:focus + label {
    transform: translate(0.5rem, -0.5rem);
    font-size: 0.8rem;
  }
`;

const InputTextField = (props) => {
  const { label, margin, register, error, ...input } = props;
  const { name } = props;

  return (
    <>
      <InputFormSection margin={margin}>
        <FormTextField placeholder=" " {...input} ref={register} />
        <LabelAsPlaceHolder htmlFor={name}>{label}</LabelAsPlaceHolder>
        <ErrorField> {error?.message}</ErrorField>
      </InputFormSection>
    </>
  );
};

InputTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
};

export default InputTextField;
