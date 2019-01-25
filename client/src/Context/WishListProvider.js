import React from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

const WishListProviderContext = React.createContext()

class WishListProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            wishList: [],
            allWishList: [],
            saveUserId: "",
            dontHaveUser: false,
            isNotifyingWishList: false,
        }
    }

    getWishList = (userId) => {
        if (!userId) {

        } else {
            axios.get(`/wishList/${userId}`).then(res => {
                this.setState({
                    wishList: res.data.products
                })
            })
        }
    }

    getAllWishList = (userId) => {
        axios.get("/wishList").then(res => {
            this.setState({
                allWishList: res.data,
                saveUserId: userId
            }, () => {
                if (this.state.allWishList.some(each => each.user === userId)) {
                    this.getWishList(userId)
                } else {
                    this.createWishList(userId)
                }
            })
        })
    }

    handleNotNotifyingWish = (userId) => {
        if (!userId) {
            this.setState(prevState => ({
                dontHaveUser: !prevState.dontHaveUser
            }))
        }
    }

    handleNotifyingWishList = () => {
        if (!this.state.dontHaveUser) {
            this.setState({
                isNotifyingWishList: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        isNotifyingWishList: false
                    })
                }, 4000)
            })
        }
    }

    createProductOfWishList = (id) => {
        if(!this.state.saveUserId){
            this.props.history.push("/login")
        }
        this.handleNotifyingWishList()
        axios.post(`/wishList/${this.state.saveUserId}/${id}`).then(res => {
            return this.getWishList(this.state.saveUserId)
        })
    }

    createWishList = (userId) => {
        axios.post(`/wishList/${userId}`).then(res => {
        })
    }

    deleteWishListItem = (id) => {
        axios.put(`/wishList/${this.state.saveUserId}/${id}`).then(res => {
            this.setState({
                wishList: res.data.products
            })
        })
    }

    render() {
        return (
            <WishListProviderContext.Provider
                value={{
                    ...this.state,
                    getWishList: this.getWishList,
                    getAllWishList: this.getAllWishList,
                    createProductOfWishList: this.createProductOfWishList,
                    deleteWishListItem: this.deleteWishListItem,
                    handleNotifyingWishList: this.handleNotifyingWishList,
                    handleNotNotifyingWish: this.handleNotNotifyingWish 
                }}>
                {this.props.children}
            </WishListProviderContext.Provider>
        )
    }
}

export default withRouter(WishListProvider)

export const withWishList = (C) => props => (
    <WishListProviderContext.Consumer>
        {value => <C {...props} {...value} />}
    </WishListProviderContext.Consumer>
)