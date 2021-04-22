import React, {useState} from "react"
import Terminal from "../atoms/Terminal.styled"
import UpperBar from "../organism/upperbar/UpperBar.component"
import TerminalInput from "../molecules/TerminalInput.component"
import Draggable, {DraggableCore} from 'react-draggable'

function TerminalContainer() {

    let [activeDrags, setActiveDrags] = useState(10)

    let onStart = () => {
        setActiveDrags(++activeDrags)
    };
    
    let onStop = () => {
        setActiveDrags(++activeDrags)
    };

    const dragHandlers = {onStart: onStart, onStop: onStop, defaultPosition: {x: 150, y: 70}};
    return (
        <Draggable {...dragHandlers}>
        <Terminal className="terminal-container">
            <UpperBar title={"Terminal"}/>
            <div className="input-container">
                <TerminalInput/>
                <TerminalInput/>
                <TerminalInput/>
                <TerminalInput/>
                <TerminalInput/>
            </div>
        </Terminal>
        </Draggable>
    )
}

export default TerminalContainer;