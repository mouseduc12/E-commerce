import React from "react"
import axios from "axios"

const WishListProviderContext = React.createContext()

class WishListProvider extends React.Component{
    constructor(){
        super()
        this.state = {
            wishList: [],
            allWishList: [],
            saveUserId: "",
        }
    }

    getWishList = (userId) => {
        axios.get(`/wishList/${userId}`).then(res =>{
            console.log(res)
            this.setState({
               wishList: res.data.products
            })
        })
    }

    getAllWishList = (userId) =>{
        axios.get("/wishList").then(res =>{
            this.setState({
               allWishList: res.data,
               saveUserId: userId
            }, () =>{
                if(this.state.allWishList.some(each => each.user === userId)){
                    this.getWishList(userId)
                    console.log("Already Exist");
                } else {
                    this.createWishList(userId)
                }
            })
        }) 
    }


    createProductOfWishList = (id) => {
        axios.post(`/wishList/${this.state.saveUserId}/${id}`).then(res =>{
            console.log(res)
            return this.getWishList(this.state.saveUserId)
        })
    }

    createWishList = (userId) => {
        axios.post(`/wishList/${userId}`).then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <WishListProviderContext.Provider
            value ={{
                ...this.state,
                getWishList: this.getWishList,
                getAllWishList: this.getAllWishList,
                createProductOfWishList: this.createProductOfWishList
            }}>
                {this.props.children}
            </WishListProviderContext.Provider>
        )
    }
}

export default WishListProvider

export const withWishList = (C) => props => (
    <WishListProviderContext.Consumer>
        {value => <C {...props} {...value}/>}
    </WishListProviderContext.Consumer>
)