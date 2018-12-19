import React from "react"
import "../ComponentStyles/Products.css"

const Products = (props) =>{
    return(
        <div className = "each-product">
            <div className="product-images" style ={{backgroundImage: `url(${props.image})`}}></div>
            <div>
                <h3>{props.headline}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Products