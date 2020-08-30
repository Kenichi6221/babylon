import styled from 'styled-components';

const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const IconSvg = styled(Icon)`
  padding: 0;

  box-sizing: border-box;
  margin: ${(props) => props.margin};

  display: flex;
  justify-content: center;
  align-items: center;
  fill: #fff;
`;

export default IconSvg;
