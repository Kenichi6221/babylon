import styled from 'styled-components';

export const FormSection = styled.section`
  flex: 1 0;
  min-width: 250px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  margin: ${(props) => props.margin || '0.5rem'};
  position: relative;
  height: 4rem;
`;

export default FormSection;
