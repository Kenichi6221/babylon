import styled from 'styled-components';

const LabelAsPlaceHolder = styled.label`
  position: absolute;
  padding: 0 0.5rem;
  transform: translate(0.5rem);

  text-transform: capitalize;
  transition-property: transform, font-size, color;
  transition-timing-function: ease;
  transition-duration: 0.3s;

  color: hsl(0, 0%, 50%);
  pointer-events: none;

  background-color: #fbfbfb;
`;

export default LabelAsPlaceHolder;
