import React from 'react';
import { LabelInput } from 'components/atomic/Label/LabelInput';
import { Controller } from 'react-hook-form';
import Select from 'components/atomic/Select';
import PropTypes from 'prop-types';
import FormSection from 'components/atomic/Section/FormSection';

const overrideStyles = {
  menuList: (styles) => ({
    ...styles,
    padding: '0.5rem',
  }),
  option: (styles) => ({
    ...styles,
    borderRadius: '5px',
  }),
  singleValue: (styles) => ({
    ...styles,
    padding: 'calc(0.5rem - 2px)',
  }),
};

const SelectInput = (props) => {
  const { label, margin, placeHolder, ...properties } = props;
  const { id } = props;
  return (
    <FormSection margin={margin}>
      <Controller
        instanceId
        as={Select}
        isClearable
        placeholder={`${placeHolder}`}
        styles={overrideStyles}
        {...properties}
      />
      <LabelInput htmlFor={id}>{label}</LabelInput>
    </FormSection>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  margin: PropTypes.string,
};

export default SelectInput;
