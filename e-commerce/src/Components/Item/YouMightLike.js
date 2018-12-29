import React from "react"
import "../../ComponentStyles/YouMightLike.css"

const YouMightLike = (props) => {
    return (
        <div className="you-might-also-like">
            <h2>{props.products.headline}</h2>
        </div>
    )
}

export default YouMightLike