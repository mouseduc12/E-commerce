import React from "react"
import "../../ComponentStyles/YouMightLike.css"
import { Link } from "react-router-dom"

const YouMightLike = (props) => {
    return (
        <div className="you-might-also-like">
            <Link to = {`/item/${props.products._id}`} style ={{width: "100%"}}>
                <div
                    className="you-might-also-like-image"
                    style={{ backgroundImage: props.mouseEnter ? `url(${props.products.otherImages[props.slideOver]})` : `url(${props.products.image})` }}
                    onMouseLeave={props.handleLeave}
                    onMouseOver={props.handleOver}>
                    </div>
            </Link>
            <div className="headline-and-price">
                <h3>{props.products.headline}</h3>
                <p>{props.products.price}</p>
            </div>
        </div>
    )
}

export default YouMightLike