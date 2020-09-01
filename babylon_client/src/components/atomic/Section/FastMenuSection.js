import styled from 'styled-components';
import IconSvg from '../Icon/IconSvg';

const FastMenuSection = styled.section`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  ${IconSvg} {
    fill: white;
    width: 3rem;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default FastMenuSection;
