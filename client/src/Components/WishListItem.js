import React from "react"
import "../ComponentStyles/WishListItem.css"
import { withWishList } from "../Context/WishListProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WishListItem = (props) => {
    return (
        <div className="each-wish-list">
            <div className="wish-list-image" style={{ backgroundImage: `url(${props.products.image})` }}>
            </div>
            <div className="wish-list-products-info">
                <h2>{props.products.headline}</h2>
                <div className="wish-list-price-and-like">
                    <p>{props.products.price}</p>
                    <div className="wish-list-heart">
                        <p  style= {{cursor: "pointer"} }onClick = {() => {props.deleteWishListItem(props._id)}}><FontAwesomeIcon icon="heart" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//hello
export default withWishList(WishListItem)