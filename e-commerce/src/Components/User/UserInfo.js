import React from "react"
import { withAuth } from "../../Context/AuthContext"
import moment from "moment"
import "../../ComponentStyles/UserInfo.css"

const UserInfo = (props) => {
    return (
        <div className = "infos-from-data">
            <div className= "infos-from-user">
                <p>First Name:</p>
                <p>{props.user.firstName}</p>
            </div>
            {props.user.lastName &&
                <div className= "infos-from-user">
                    <p>Last Name:</p>
                    <p>{props.user.lastName}</p>
                </div>
            }
            <div className= "infos-from-user">
                <p>User Name:</p>
                <p>{props.user.username}</p>
            </div>
            <div className= "infos-from-user">
                <p>Joined:</p>
                <p>{moment(props.user.memberSince).format('llll')}</p>
            </div>
        </div>
    )
}

export default withAuth(UserInfo)