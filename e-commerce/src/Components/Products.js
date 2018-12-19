import React from "react"


const Products = (props) =>{
    return(
        <div>
            <div className="product-images" style ={{backgroundImage: props.image}}></div>
            <div>
                <h3>{props.headline}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Products