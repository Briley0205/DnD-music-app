import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import React from "react";

const Wrapper = styled.div`
  border-radius: 5px;
  margin-bottom: 7px;
  padding: 15px 20px;
  background-color: ${props => props.theme.cardBgColor};
  box-shadow: 0px 6px 15px rgba(0,0,0,0.15);
`

interface IMusic {
    title: string;
    artist: string;
    index: number;
}

function DragCard(options: IMusic) {
    return (
    <Draggable key={options.title} draggableId={options.title} index={options.index}>
        {(magic) => (
            <Wrapper ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                {options.title}
            </Wrapper>
        )}
    </Draggable>
    );
}
export default React.memo(DragCard);