import styled, { keyframes } from "styled-components";

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
`;
const Father = styled.div`
  display: flex;
`;
const Emoji = styled.span`
  font-size: 100px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  color: white;
  background-color: ${(props) => props.bgColor};
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 100px;
    &:hover {
      font-size: 50px;
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father>
      <Box bgColor="tomato">
        <Emoji>🤗</Emoji>
      </Box>
      <Emoji>🤗</Emoji>
      <Circle bgColor="teal" />
    </Father>
  );
}

export default App;
