import React from "react"
import "../ComponentStyles/CartItem.css"

const CartItems = (props) => {
    console.log(props)
    return (
        <div className="cart-items">
            <div className="cart-items-small-container">
                <div
                    className="cart-image"
                    style={{ backgroundImage: `url(${props.products.image})` }}>
                </div>
                <div className="cart-item-infos">
                    <h3>{props.products.headline}</h3>
                    <p>{props.products.price}</p>
                </div>
            </div>
            <div className="cart-items-second-small-container">
                <div className="cart-quantities">
                    <p>Quantity:<input type= "number" max ="500"  defaultValue = {props.quantity}/></p>
                    <p>Price: ${props.total}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItems