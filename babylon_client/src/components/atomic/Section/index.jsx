import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: ${(prop) => prop.height || '3rem'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Section;
