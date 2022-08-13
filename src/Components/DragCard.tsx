import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Wrapper = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${props => props.theme.cardBgColor};
`

interface IMusic {
    title: string;
    artist: string;
    index: number;
}

function DragCard({title, artist}: IMusic, index: number) {
    return (
    <Draggable key={title} draggableId={title} index={index}>
        {(magic) => (
            <Wrapper ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                {title}
            </Wrapper>
        )}
    </Draggable>
    );
}
export default DragCard;