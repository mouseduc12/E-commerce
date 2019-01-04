import React from "react"
import { withAuth } from "../Context/AuthContext"
import { withWishList } from "../Context/WishListProvider"
import WishListItem from "./WishListItem"
import "../ComponentStyles/WishList.css"

class WishList extends React.Component{
    componentDidMount(){
        if(!this.props.user.email){
            this.props.history.push("/login")
        } else {
           this.props.getAllWishList(this.props.user._id)   
        } 
    }

    render(){
        console.log(this.props.wishList)
        return(
            <div className = "wish-list-container">
                <div className = "wish-list-small-container">
                {this.props.wishList.map(each => <WishListItem {...each}/>)}
                </div>
            </div>
        )
    }
}

export default withWishList(withAuth(WishList));