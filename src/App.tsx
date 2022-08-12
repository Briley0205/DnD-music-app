import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    ${(props) => props.theme.bgGradient1} 0%,
    ${(props) => props.theme.bgGradient2} 100%
  );
`;
const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
const Player = styled.div`
  width: 380px;
  border-radius: 8px;
  min-height: 592px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
`;

function App() {
  return (
    <Wrapper>
      <Boards>
        <Player></Player>
        {/* <Board></Board> */}
      </Boards>
    </Wrapper>
  );
}

export default App;
