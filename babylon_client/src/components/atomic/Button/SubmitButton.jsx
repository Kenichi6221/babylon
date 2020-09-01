import styled from 'styled-components';
import Button from './index';

const SubmitButton = styled(Button)`
  display: flex;
  padding: 0.5rem;

  width: 80%;
  height: 100%;
  min-width: 250px;
  max-width: 400px;
  box-sizing: border-box;

  color: #fff;
  background-color: #185e8f;
  justify-content: center;

  transition: transform 0.5s ease;
  transform: scale(1);
  :hover {
    transform: scale(0.96);
  }
`;

export default SubmitButton;
