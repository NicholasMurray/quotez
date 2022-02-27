import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #66c7f4;
  border-radius: 5px;
  color: #2d3047;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0;
  padding: 1rem;

  ${(props) => props.disabled} {
    &:disabled {
      background-color: grey;
    }
  }
`;

export default StyledButton;
