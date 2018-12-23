import React from "react"
import { withAuth } from "../../Context/AuthContext";
import "../../ComponentStyles/User.css"

class User extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="user">
                <div
                    style={{ backgroundImage: this.props.user.faceImage ? `url(${this.props.user.faceImage})` : `url("https://res.cloudinary.com/hd1n2hd4y/image/upload/f_auto,q_auto,c_fill,dpr_2.0,w_512,h_512,g_face/user-default.jpg")` }}
                    className="user-image">
                </div>
                <div className="user-infos">
                    <p>User Info</p>
                </div>
                <div className="change-password">
                    <p>Change Password</p>
                </div>
                <div className = "orders">
                    <p>Ordered</p>
                </div>
                <div className = "log-out">
                    <p>Log Out</p>
                </div>
                {this.props.user.isAdmin &&
                    <div className="write-article">
                        
                    </div>
                }
            </div>
        )
    }
}

export default withAuth(User)