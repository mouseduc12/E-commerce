import React from "react"
import "../ComponentStyles/Products.css"
import LazyLoad from "react-lazyload"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

class Products extends React.Component {
    render() {
        return (
            <LazyLoad once height={400}>
                <div className="each-product" onMouseOver={this.props.handleIcon} onMouseLeave={this.props.handleIconLeave}>
                    <Link to={`/item/${this.props._id}`} style={{ width: "auto" }}>
                        <div className="product-images"
                            onMouseEnter={this.props.handleOver}
                            onMouseLeave={this.props.handleLeave}
                            style={{
                                backgroundImage: this.props.mouseEnter ? `url(${this.props.otherImages[this.props.slideOver]})` : `url(${this.props.image})`
                            }}>
                        </div>
                    </Link>
                    <div>
                        <h3>{this.props.headline}</h3>
                        <p>{this.props.price.charAt(0) === "$" ? this.props.price : "$" + this.props.price}</p>
                    </div>
                    {
                        this.props.getIcon &&
                        <div className="product-buttons">
                            <button onClick = {() => this.props.createProductOfWishList(this.props._id)} className="product-heart-button"><FontAwesomeIcon icon="heart" /></button>
                            <button onClick = {()=> this.props.handleNoUserCart(this.props._id)} className="product-cart-button"><FontAwesomeIcon icon="shopping-cart" /></button>
                        </div>
                    }
                </div>
            </LazyLoad>
        )
    }
}

export default Products