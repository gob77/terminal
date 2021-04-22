import Icons from "../atoms/IconsContainer.styled"
import Icon from "../atoms/Icons.styled";
import fileManager from "../../assets/fileManager.svg"
import terminalIcon from "../../assets/terminal.svg"
import readme from "../../assets/readme.svg"
import git from "../../assets/git.svg"
import contact from "../../assets/contact.svg"


function IcontaContainer(props) {
    console.log(props)

    const {terminal, files} = props

    return (
        <Icons>
                <Icon src={fileManager} onClick={files}/>
                <Icon src={terminalIcon} onClick={terminal}/>
                <Icon src={readme}/>
                <Icon src={git}/>
                <Icon src={contact}/>
        </Icons>
    )
}

export default IcontaContainer;