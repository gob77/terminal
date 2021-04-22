import React from "react"
import Handler from "../../atoms/handlers.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import "./upperBar.scss"

function UpperBar(props){

    const {title} = props

    return (
        <div className="upperBar-title">
            <div className="title-container">
                <b>{title}</b>
            </div>
            <div className="handlers-container">
                <div className="handlers">
                    
                    <Handler>
                        <FontAwesomeIcon icon={faWindowMinimize} size="xs"/>
                    </Handler>
                    <Handler>
                        <FontAwesomeIcon icon={faWindowMaximize} size="xs"/>
                    </Handler>
                    <Handler className="close">
                        <FontAwesomeIcon icon={faTimes} size="xs"/>
                    </Handler>
                </div>
            </div>
        </div>
    )
}

export default UpperBar