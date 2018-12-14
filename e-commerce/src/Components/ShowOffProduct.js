import React from "react"
import "../ComponentStyles/ShowOffProduct.css"

const ShowOffProduct = (props) => {
    return (
        <div className="manage-front">
            <div className="manage-front-inside">
                <div style={{ backgroundImage: `url(${props.image})` }} className="product-image"></div>
                <div className = "product-image-text">
                    <h3>{props.headline}</h3>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowOffProduct   