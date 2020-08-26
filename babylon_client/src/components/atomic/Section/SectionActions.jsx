import styled from 'styled-components';

export const SectionActions = styled.div`
  max-width: 400px;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  margin: 2rem 0;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-items: center;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
`;
