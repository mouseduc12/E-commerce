import React from "react"
import "../ComponentStyles/Products.css"
import LazyLoad from "react-lazyload"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Products extends React.Component {
    render() {
        console.log(this.props)
        return (
            <LazyLoad once height={400}>
                <div className="each-product" onMouseOver={this.props.handleIcon} onMouseLeave={this.props.handleIconLeave}>
                    <div className="product-images"
                        onMouseEnter={this.props.handleOver}
                        onMouseLeave={this.props.handleLeave}
                        style={{
                            backgroundImage: this.props.mouseEnter ? `url(${this.props.otherImages[this.props.slideOver]})` : `url(${this.props.image})`
                        }}>
                    </div>
                    <div>
                        <h3>{this.props.headline}</h3>
                        <p>{this.props.price}</p>
                    </div>
                    {
                        this.props.getIcon &&
                        <div className="product-buttons">
                            <button className="product-heart-button"><FontAwesomeIcon icon="heart" /></button>
                            <button className="product-cart-button"><FontAwesomeIcon icon="shopping-cart" /></button>
                        </div>
                    }
                </div>
            </LazyLoad>
        )
    }
}

export default Products