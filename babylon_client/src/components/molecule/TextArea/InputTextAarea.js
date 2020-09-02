import React from 'react';
import FormSection from 'components/atomic/Section/FormSection';
import styled from 'styled-components';
import TextArea from 'components/atomic/TextArea/TextArea';
import ErrorField from 'components/atomic/Text/ErrorField';
import PropTypes from 'prop-types';
import LabelAsPlaceHolder from 'components/atomic/Label';

const InputFormSection = styled(FormSection)`
  height: 5.5rem;
  & ${TextArea}:not(:placeholder-shown) + label {
    transform: translate(0.5rem, -0.5rem);
    font-size: 0.8rem;
  }

  & ${TextArea}:placeholder-shown + label {
    transform: translate(0.5rem, 1rem);
  }

  & ${TextArea}:focus + label {
    transform: translate(0.5rem, -0.5rem);
    font-size: 0.8rem;
  }
`;

const InputTextAarea = (props) => {
  const { error, id, label, register, ...input } = props;
  return (
    <InputFormSection>
      <TextArea placeholder=" " {...input} ref={register} />
      <LabelAsPlaceHolder htmlFor={id}>{label}</LabelAsPlaceHolder>
      <ErrorField> {error?.message}</ErrorField>
    </InputFormSection>
  );
};

InputTextAarea.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.object,
  label: PropTypes.string,
  register: PropTypes.func.isRequired,
};

export default InputTextAarea;
