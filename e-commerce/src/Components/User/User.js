import React from "react"
import { withAuth } from "../../Context/AuthContext";
import "../../ComponentStyles/User.css"
import ChangePassword from "./ChangePassword"
import Orders from "./Orders"
import UserInfo from "./UserInfo"
import WriteArticle from "./WriteArticle"

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            userInfoChecked: true,
            changePassword: false,
            orders: false,
            writeArticle: false
        }
    }
    componentDidMount() {
        !this.props.user.email && this.props.history.push("/notfound")
    }

    handleInfoClick = () => {
        this.setState({
            userInfoChecked: true,
            changePassword: false,
            orders: false,
            writeArticle: false
        })
    }

    handleChangePassword = () => {
        this.setState({
            userInfoChecked: false,
            changePassword: true,
            orders: false,
            writeArticle: false
        })
    }

    handleOrders = () => {
        this.setState({
            userInfoChecked: false,
            changePassword: false,
            orders: true,
            writeArticle: false
        })
    }

    handleWriteArticle = () => {
        this.setState({
            userInfoChecked: false,
            changePassword: false,
            orders: false,
            writeArticle: true
        })
    }

    render() {
        return (
            <div className="user">
                <div
                    style={{
                        backgroundImage: this.props.user.faceImage ? `url(${this.props.user.faceImage})` : `url("https://res.cloudinary.com/hd1n2hd4y/image/upload/f_auto,q_auto,c_fill,dpr_2.0,w_512,h_512,g_face/user-default.jpg")`,
                        height: this.state.writeArticle && "100%",
                        width: this.state.writeArticle && 500 
                    }}
                    className="user-image">
                </div>
                <div className="user-options">
                    <div
                        className="user-infos choose"
                        style={{ color: this.state.userInfoChecked && "white", backgroundColor: this.state.userInfoChecked && "#232f3e" }}
                    >
                        <p onClick={this.handleInfoClick}>User Info</p>
                    </div>
                    <div
                        className="change-password choose"
                        style={{ color: this.state.changePassword && "white", backgroundColor: this.state.changePassword && "#232f3e" }}
                    >
                        <p onClick={this.handleChangePassword}>Change Password</p>
                    </div>
                    <div
                        className="orders choose"
                        style={{ color: this.state.orders && "white", backgroundColor: this.state.orders && "#232f3e" }}>
                        <p onClick={this.handleOrders}>Ordered</p>
                    </div>
                    {this.props.user.isAdmin &&
                        <div
                            className="write-article choose"
                            style={{ color: this.state.writeArticle && "white", backgroundColor: this.state.writeArticle && "#232f3e" }}
                        >
                            <p onClick={this.handleWriteArticle}>Write Article</p>
                        </div>
                    }
                    <div className="log-out choose">
                        <p onClick={this.props.logout}>Log Out</p>
                    </div>
                </div>
                <div className="info-display">
                    {
                        this.state.userInfoChecked && <UserInfo />
                    }
                    {
                        this.state.changePassword && <ChangePassword />
                    }
                    {
                        this.state.orders && <Orders />
                    }
                    {
                        this.state.writeArticle && <WriteArticle />
                    }
                </div>
            </div>
        )
    }
}

export default withAuth(User)