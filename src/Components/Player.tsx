import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import styled from "styled-components";

const Controls = styled.div``;
const ControlButton = styled.button`
  margin: 0 10px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
`;

interface ISong {
  title: string;
  artist: string;
  src: string;
}
interface ISongIndex {
  songIndex: number;
  setCurrentIndex: any;
  nextSongIndex: number;
  songs: ISong[];
}
function Player({
  songIndex,
  setCurrentIndex,
  nextSongIndex,
  songs,
}: ISongIndex) {
  const audioEl = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioEl?.current.play();
    } else {
      audioEl?.current.pause();
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentIndex(() => {
        songIndex++;
        if (songIndex > songs.length - 1) {
          songIndex = 0;
        }
        return songIndex;
      });
    } else {
      setCurrentIndex(() => {
        songIndex--;
        if (songIndex < 0) {
          songIndex = songs.length - 1;
        }
        return songIndex;
      });
    }
  };
  return (
    <div>
      <audio src={songs[songIndex].src} ref={audioEl}></audio>
      <h4>Playing Now</h4>
      <p>
        {songs[songIndex]?.title} by {songs[songIndex].artist}
      </p>
      <p>
        {songs[nextSongIndex]?.title} by {songs[nextSongIndex].artist}
      </p>
      {/* DETAILS */}
      {/* Controls */}
      <Controls>
        <ControlButton
          onClick={() => {
            SkipSong(false);
          }}
        >
          <FaBackward />
        </ControlButton>
        <ControlButton
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        >
          {!isPlaying ? <FaPlay /> : <FaPause />}
        </ControlButton>
        <ControlButton
          onClick={() => {
            SkipSong();
          }}
        >
          <FaForward />
        </ControlButton>
      </Controls>
    </div>
  );
}

export default Player;
