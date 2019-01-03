import React from "react"
import "../ComponentStyles/CartItem.css"
import { withProduct } from "../Context/ProductsProvider"

class CartItems extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            changeQuantity: this.props.quantity
        }
    }
    render() {
        return (
            <div className="cart-items">
                <div className="cart-items-small-container">
                    <div
                        className="cart-image"
                        style={{ backgroundImage: `url(${this.props.products.image})` }}>
                    </div>
                    <div className="cart-item-infos">
                        <h3>{this.props.products.headline}</h3>
                        <p>{this.props.products.price}</p>
                    </div>
                </div>
                <div className="cart-items-second-small-container">
                    <div className="cart-quantities">
                        <p>Quantity:
                        <input
                                type="number"
                                name="changeQuantity"
                                value={this.state.changeQuantity}
                                max="500"
                                onChange={(e) => this.props.handleChangeQuanity(e, this.props._id)} /></p>
                        <p>Price: ${this.props.total}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withProduct(CartItems)