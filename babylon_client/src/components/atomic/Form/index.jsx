import styled from 'styled-components';

const Form = styled.form`
  width: calc(100% - 2rem);
  max-width: 850px;

  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  box-sizing: border-box;

  justify-content: center;
  margin: ${(props) => props.margin || '0'};
`;

export default Form;
