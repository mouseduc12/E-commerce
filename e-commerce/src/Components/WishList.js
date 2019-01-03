import React from "react"
import { withAuth } from "../Context/AuthContext"

class WishList extends React.Component{
    componentDidMount(){
        if(!this.props.user.email){
            this.props.history.push("/login")
        } else if(this.props.WishList){
            
        } 
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Your Wish List is empty</h1>
            </div>
        )
    }
}

export default withAuth(WishList);