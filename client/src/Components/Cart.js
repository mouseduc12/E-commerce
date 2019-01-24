import React, { Fragment } from "react"
import "../ComponentStyles/Cart.css"
import { withProduct } from "../Context/ProductsProvider"
import CartItems from "./CartItems"
import { Link } from "react-router-dom"

class Cart extends React.Component {

    componentDidMount() {
        this.props.getAllCollectionData()
        this.props.handleNotNotifying()
    }
    
    componentWillUnmount(){
        this.props.handleNotNotifying()
    }

    render() {
        return (
            <Fragment>
                {typeof this.props.totalPriceOfProducts === "object" ?
                    <Fragment>
                        <div className="cart-item-container">
                            {
                                this.props.cartData.map(each => <CartItems {...each} />)
                            }
                            {this.props.totalPriceOfProducts.total > 0 && 
                            <h2>Total Price: ${parseFloat(this.props.totalPriceOfProducts.total)}</h2>
                            }
                        </div>
                        {this.props.totalPriceOfProducts.total > 0 && 
                        <div className="check-out-button">
                            <Link to="/checkout">
                                <button>Check Out</button>
                            </Link>
                        </div>
                        }
                    </Fragment>
                    :
                    <Fragment>
                        <div className="cart-item-container">
                            {
                                this.props.cartData.map(each => <CartItems {...each} />)
                            }
                            {this.props.totalPriceOfProducts.total > 0 ?
                            <h2>Total Price: ${parseFloat(this.props.totalPriceOfProducts)}</h2>
                            :
                            <h2>You have an empty cart!</h2>
                            }
                        </div>
                        {this.props.totalPriceOfProducts.total > 0 &&
                        <div className="check-out-button">
                            <Link to="/checkout">
                                <button>Check Out</button>
                            </Link>
                        </div>
                        }
                    </Fragment>
                }
            </Fragment>
        )
    }
}

export default withProduct(Cart);

