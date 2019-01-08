import React from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"

const AuthContextProvider = React.createContext()

class AuthContext extends React.Component{
    constructor(){
        super()
        this.state = {
            article: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    signup = (userInfo) =>{
        return axios.post("/user/signup", userInfo).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data.user))
            localStorage.setItem("token", res.data.token)
            this.setState({
                user: res.data.userData,
                token: res.data.token
            })
            return res
        })
    }

    login = (credentials) => {
        return axios.post("/user/login", credentials).then(res=>{
            const { token, user } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user: user,
                token
            })
            return res
        })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: {},
            token: "",
            article: []
        }, this.props.history.push("/login"))
    }

    render(){
        return(
            <AuthContextProvider.Provider value ={{
                user: this.state.user,
                signup: this.signup,
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </AuthContextProvider.Provider>
        )
    }
}

export const withAuth = (C) => props => (
 <AuthContextProvider.Consumer>
     {
         value => (<C {...props} {...value}/>)
     }
 </AuthContextProvider.Consumer>   
)

export default withRouter(AuthContext)