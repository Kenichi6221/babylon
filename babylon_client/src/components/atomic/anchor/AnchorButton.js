import styled from 'styled-components';

const AnchorButton = styled.a`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  min-width: 300px;

  box-sizing: border-box;

  color: #fff;
  border-radius: 1rem;
  background-color: #185e8f;
  justify-content: center;

  transition: transform 0.5s ease;
  transform: scale(1);
  :hover {
    transform: scale(0.96);
  }
`;

export default AnchorButton;
