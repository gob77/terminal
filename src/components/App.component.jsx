import React, {Fragment, useState} from "react";
import TerminalContainer from "./page/Terminal.component"
import DockContainer from "./organism/dockContainer/DockContainer.component"
import FilesContainer from "./page/Files.component"

function App(){
    const [showTerminal, setShowTerminal] = useState(true)
    const [showFiles, setShowFiles] = useState(true)

    const terminal = (() => {
        setShowTerminal(!showTerminal)
    })

    const files = (() => {
        setShowFiles(!showFiles)
    })

    return(
        <Fragment>
            <DockContainer terminal={terminal} files={files}/>
            {showTerminal && <TerminalContainer/>}
            {showFiles && <FilesContainer/>}
        </Fragment>
    )
}

export default App;