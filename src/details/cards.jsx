import React from "react"


export const Card = (props) => {
    return (
        <div className={props.style}>
            <h4 className="title_card">{props.top}</h4>
            <h2 className="body_card">{props.bottum}</h2>
        </div>
    )
}