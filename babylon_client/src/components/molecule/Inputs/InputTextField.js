import FormTextField from 'components/atomic/Field/FormTextField';
import LabelAsPlaceHolder from 'components/atomic/Label';
import styled from 'styled-components';

export const FormSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: ${(props) => props.margin || '1.5rem'};
  position: relative;
  height: 3rem;

  & ${FormTextField}:not(:placeholder-shown) + label {
    transform: translate(0.5rem, -1.5rem);
    font-size: 0.7rem;
  }

  & ${FormTextField}:focus + label {
    transform: translate(0.5rem, -1.5rem);
    font-size: 0.7rem;
  }
`;

const InputTextField = (props) => {
  const { label, margin, register, ...input } = props;

  return (
    <FormSection margin={margin}>
      <FormTextField placeholder=" " {...input} ref={register} />
      <LabelAsPlaceHolder htmlFor={props.name}>{label}</LabelAsPlaceHolder>
    </FormSection>
  );
};

export default InputTextField;
