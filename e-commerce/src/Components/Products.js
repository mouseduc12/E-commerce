import React from "react"
import "../ComponentStyles/Products.css"
import LazyLoad from "react-lazyload"

const Products = (props) =>{
    return(
        <LazyLoad once height = {350}>
        <div className = "each-product">
            <div className="product-images" style ={{backgroundImage: `url(${props.image})`}}></div>
            <div>
                <h3>{props.headline}</h3>
                <p>{props.price}</p>
            </div>
        </div>
        </LazyLoad>
    )
}

export default Products