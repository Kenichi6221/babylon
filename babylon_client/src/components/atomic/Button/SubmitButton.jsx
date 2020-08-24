import styled from 'styled-components';
import Button from './index';

const SubmitButton = styled(Button)`
  display: inline-block;
  max-width: 100%;
  background-color: #185e8f;
  color: #fff;
  padding: 0.5rem;
  flex: 1;
  transition: transform 0.3s ease;
  transform: scale(1);
  max-width: calc(50% - 0.5rem);
  :hover {
    transform: scale(0.96);
  }
`;

export default SubmitButton;
