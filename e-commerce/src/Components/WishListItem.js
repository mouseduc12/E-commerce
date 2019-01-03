import React from "react"
import "../ComponentStyles/WishListItem.css"

const WishListItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className="wish-list-image" style={{ backgroundImage: `url(${props.products.image})` }}>
            </div>
            <div className = "wish-list-products-info">
                <h2>{props.products.headline}</h2>
                <p>{props.products.price}</p>
            </div>
        </div>
    )
}

export default WishListItem