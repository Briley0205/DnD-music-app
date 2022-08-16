import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DragCard from "./Components/DragCard";
import Player from "./Components/Player";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
const Board = styled.div`
  width: 380px;
  border-radius: 8px;
  min-height: 592px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
`;
interface IDropAreaProps {
  draggingFromThis: boolean;
  isDraggingOver: boolean;
}
const DropArea = styled.div<IDropAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.draggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.2s ease-in-out;
  padding: 20px;
`;

function App() {
  const [songs, setSongs] = useState([
    {
      title: "ミツキヨ - YU.ME.NO",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - YU.ME.NO.mp3"
    }, {
      title: "ミツキヨ - ユノのアトリエ",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - ユノのアトリエ.mp3"
    }, {
      title: "ミツキヨ - ユメの喫茶店",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - ユメの喫茶店.mp3"
    }, {
      title: "ミツキヨ - ようこそトロイメへ",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - ようこそトロイメへ.mp3"
    }, {
      title: "ミツキヨ - 日差しの中のティータイム.mp3",
      artist: "Mitsukiyo",
      src: "./music/ミツキヨ - 日差しの中のティータイム.mp3"
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);
  const onDragEnd = () => {}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
        <Board>
        <Droppable droppableId="music">
          {(provided, snapshot) => (
            <DropArea
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {songs.map((options, index) => (
              <DragCard
                key={options.title}
                title={options.title}
                index={index}
                artist={options.artist}
              ></DragCard>
            ))}
            {provided.placeholder}
          </DropArea>
          )}
        </Droppable>

          <Player 
          songIndex={currentSongIndex} 
          setCurrentIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
          />
        </Board>
        {/* <Board></Board> */}
      </Boards>
    </Wrapper>
    </DragDropContext>
  );
}

export default App;
