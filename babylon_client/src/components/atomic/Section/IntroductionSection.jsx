import styled from 'styled-components';

const IntroductionSection = styled.section`
  width: 100%;
  height: 100%;
  max-width: 400px;
  border-radius: 1rem;
  overflow: hidden;
  background: rgb(202, 215, 224);
  background: linear-gradient(
    90deg,
    rgba(202, 215, 224, 1) 15%,
    rgba(79, 138, 194, 1) 100%
  );
  figure {
    position: relative;

    display: flex;
    align-items: center;
  }
  img {
    opacity: 0.7;
  }
  figcaption {
    position: absolute;

    width: 70%;
    right: 1rem;
  }
`;

export default IntroductionSection;
