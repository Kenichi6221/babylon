import styled from 'styled-components';

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 4.5rem;

  min-width: 0;
  padding: 1rem;
  resize: none;
  box-sizing: border-box;

  border: 1px solid #ccc;
  border-radius: 1rem;
  outline: none;
`;

export default TextArea;
