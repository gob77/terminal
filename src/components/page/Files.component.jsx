import React, {useState} from "react"
import Files from "../atoms/Files.styled"
import UpperBar from "../organism/upperbar/UpperBar.component";
import Draggable from "react-draggable";

function FilesContainer() {

    let [activeDrags, setActiveDrags] = useState(0)

    let onStart = () => {
        setActiveDrags(++activeDrags)
    };
    
    let onStop = () => {
        setActiveDrags(++activeDrags)
    };

    const dragHandlers = {onStart: onStart, onStop: onStop, defaultPosition: {x: 250, y: 220}};

    console.log(Draggable.position)
    return (
        <Draggable {...dragHandlers}>
            <Files className="files-container">
                <UpperBar title={"Files"}/>
            </Files>
        </Draggable>
    )
}

export default FilesContainer;