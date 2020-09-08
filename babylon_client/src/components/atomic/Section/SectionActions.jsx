import styled from 'styled-components';

const SectionActions = styled.div`
  width: 100%;
  max-width: 850px;
  min-width: 250px;
  height: 3rem;
  padding: 1rem;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-content: center;
  justify-items: center;
  justify-content: center;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
`;

export default SectionActions;
