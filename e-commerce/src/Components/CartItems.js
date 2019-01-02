import React from "react"

const CartItems = (props) => {
    return (
        <div>
            <div
                className="cart-image"
                style={{ backgroundImage: `url(${props.products.image})` }}>
            </div>
            <div>
                <h3>{props.products.headline}</h3>
                <p>{props.products.price}</p>
                <p>quantity</p>
            </div>
        </div>
    )
}

export default CartItems