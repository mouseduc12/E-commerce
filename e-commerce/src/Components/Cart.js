import React, { Fragment } from "react"
import "../ComponentStyles/Cart.css"
import { withProduct } from "../Context/ProductsProvider"
import CartItems from "./CartItems"

class Cart extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                {typeof this.props.totalPriceOfProducts === "object" ?
                    <div className="cart-item-container">
                        {
                            this.props.cartData.map(each => <CartItems {...each}/>)
                        }
                        <h2>Total Price: ${this.props.totalPriceOfProducts.total}</h2>
                    </div>
                    :
                    <div className="cart-item-container">
                        {
                            this.props.cartData.map(each => <CartItems {...each}/>)
                        }
                        <h2>Total Price: ${this.props.totalPriceOfProducts}</h2>
                    </div>

                }
            </Fragment>
        )
    }
}

export default withProduct(Cart);

