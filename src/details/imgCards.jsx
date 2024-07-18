import React from "react"


export const ImgCard = (props) => {
    return (
        <div className='back_img_card_container'>
            <img src={props.img} alt="port" className="img_card" />
            <h5 className="data_card">{props.data}</h5>
            <h4 className="title_card">{props.top}</h4>
            <h2 className="body_card">{props.bottum}</h2>
        </div>
    )
}