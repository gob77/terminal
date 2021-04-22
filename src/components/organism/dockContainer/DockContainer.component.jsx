import Dock from "../../atoms/Dock.styled"
import IconContainer from "../../molecules/IconContainer.component"

function DockContainer(props) {
    const {terminal, files} = props
    return(
        <Dock>
            <IconContainer terminal={terminal} files={files}/>
        </Dock>
    )

}

export default DockContainer;