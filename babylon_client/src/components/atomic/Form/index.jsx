import styled from 'styled-components';

const Form = styled.form`
  max-width: 850px;

  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  box-sizing: border-box;

  justify-content: center;
  margin: ${(props) => props.margin || '0 1.5rem'};
`;

export default Form;
