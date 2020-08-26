import styled from 'styled-components';

export const FormSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  margin: ${(props) => props.margin || '0.5rem 1.5rem'};
  position: relative;
  height: 4rem;
`;

export default FormSection;
