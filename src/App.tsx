import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DragCard from "./Components/DragCard";
import Player from "./Components/Player";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import { MusicState } from "./atoms";

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
  background: linear-gradient(
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
interface IDropAreaProps {
  draggingFromThis: boolean;
  isDraggingOver: boolean;
}
const DropArea = styled.div<IDropAreaProps>`
  flex-grow: 1;
  transition: background-color 0.2s ease-in-out;
  padding: 20px;
`;

function App() {
  const [songs, setSongs] = useRecoilState(MusicState);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    setSongs((allSongs) => {
      const songsCopy = [...allSongs];
      const songCopy = allSongs[source.index];
      songsCopy.splice(source.index, 1);
      //@ts-ignore
      songsCopy.splice(destination?.index, 0, songCopy);
      return songsCopy;
    });
  };
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
