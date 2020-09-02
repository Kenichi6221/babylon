import styled from 'styled-components';
import Header from 'components/atomic/Header';
import FastMenuSection from './FastMenuSection';
import ContainerMainSection from './ContainerMainSection';
import Section from '.';

const ContainerSection = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 900px;
  padding: 0 1rem;
  box-sizing: border-box;

  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 2rem 1fr 5rem;
  justify-content: center;
  grid-template-areas:
    'headerApp'
    'titleSection'
    'mainContent'
    'fastMenu';

  ${Header} {
    position: fixed;
    width: 100%;
    grid-area: headerApp;
    max-width: 900px;
    top: 0;
    margin: 0 0 0 -1rem;
    background-color: #185e8f;
  }

  ${ContainerMainSection} {
    grid-area: mainContent;
  }
  ${Section} {
    grid-area: titleSection;
  }
  ${FastMenuSection} {
    position: fixed;
    bottom: 0;
    margin: 0 0 0 -1rem;
    grid-area: fastMenu;
    max-width: 900px;
    background-color: #185e8f;
  }

  /* background-color: red; */
`;

export default ContainerSection;
