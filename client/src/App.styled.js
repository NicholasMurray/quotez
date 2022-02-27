import styled from 'styled-components';

const StyledApp = styled.div`
  align-items: center;
  background-color: #2d3047;
  color: #f5f1ed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h3,
  h4 {
    animation: fadeIn 2.5s;
  }
`;

export default StyledApp;
