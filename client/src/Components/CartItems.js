import React from "react"
import "../ComponentStyles/CartItem.css"
import { withProduct } from "../Context/ProductsProvider"


class CartItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            changeQuantity: this.props.quantity
        }
    }

    handleDeleteItem = (id) => {
        this.props.hanldeDeleteCartItem(id)
    }

    handleChangeQuantity = (e) => {
        const { name, value } = e.target;
        if (value > 999 || value <= 0) {

        } else {
            this.setState({
                [name]: value
            }, () => {
                this.props.handleNoUserCart(this.props._id, this.state.changeQuantity)
            })
        }
    }

    render() {
        console.log(this.props)
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
                                min="1"
                                onChange={this.handleChangeQuantity} /></p>
                        <p>Price: ${parseFloat(this.props.total.toFixed(2))}</p>
                    </div>
                    <div className="cancel-item">
                        <p onClick={() => this.handleDeleteItem(this.props._id)}>X</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withProduct(CartItems)