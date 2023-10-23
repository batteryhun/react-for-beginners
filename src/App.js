import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
`;
const Box = styled.div`
  font-size: 100px;
`;

function App() {
  return (
    <Father>
      <Box>Hello</Box>
    </Father>
  );
}

export default App;
