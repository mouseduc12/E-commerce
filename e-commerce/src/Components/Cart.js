import React from "react"
import "../ComponentStyles/Cart.css"
import { withProduct } from "../Context/ProductsProvider"
import CartItems from "./CartItems"
 
class Cart extends React.Component {
    render() {
        console.log(this.props.cartData)
        return (
            <div className = "cart-item-container">
                {
                    this.props.cartData.map(each => <CartItems {...each}/>)
                }
            </div>
        )
    }
}

export default withProduct(Cart);