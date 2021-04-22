import styled from "styled-components"


const Terminal = styled.div`
    width: 60%;
    height: 610px;
    background-color: #300521;
    -webkit-box-shadow: 2px 2px 8px -1px #000000; 
    box-shadow: 2px 2px 8px -1px #000000;
    border-radius: 10px 10px 0 0;
    position: absolute;
    z-index: 1;

    > .input-container {
        height: 94.5%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        &::-webkit-scrollbar {
            width: 0.3em;
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 50px;
        }
 
        &::-webkit-scrollbar-thumb {
            background-color: #E95420;
        }
    }
`

export default Terminal;