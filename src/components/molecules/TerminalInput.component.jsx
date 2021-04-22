import Identifier from "../atoms/Identifier.styled";
import Input from "../atoms/Input.styled"
import IdentifierContainer from "../atoms/IdentifierContainer.styled"

function TerminalInput() {
    return (
        <IdentifierContainer>
            <Identifier>
                mauricio.ortiz@JRR1793 ~ $
            </Identifier>
            <Input type="text" placeholder="|"/>
        </IdentifierContainer>
    )
}

export default TerminalInput;