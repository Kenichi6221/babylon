import styled from 'styled-components';
import ReactSelect from 'react-select';

const Select = styled(ReactSelect)`
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  border: none;
  display: flex;
  & > div {
    border-radius: 1rem;
    width: 100%;
  }
  & > .singlevalue {
    padding: 3rem;
    background-color: blue;
  }
`;

export default Select;
