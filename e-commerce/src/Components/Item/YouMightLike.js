import React from "react"
import "../../ComponentStyles/YouMightLike.css"

const YouMightLike = (props) => {
    return (
        <div className="you-might-also-like">
            <div
                className="you-might-also-like-image"
                style={{ backgroundImage: props.mouseEnter ? `url(${props.products.otherImages[props.slideOver]})` : `url(${props.products.image})` }}
                onMouseLeave={props.handleLeave}
                onMouseOver={props.handleOver}></div>
            <div className="headline-and-price">
                <h3>{props.products.headline}</h3>
                <p>{props.products.price}</p>
            </div>
        </div>
    )
}

export default YouMightLike