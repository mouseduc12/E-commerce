import React from "react"
import { withAuth } from "../../Context/AuthContext"
import moment from "moment"

const UserInfo = (props) => {
    return (
        <div>
            <div>
                <p>First Name:</p>
                <p>{props.user.firstName}</p>
            </div>
            {props.user.lastName &&
                <div>
                    <p>Last Name:</p>
                    <p>{props.user.lastName}</p>
                </div>
            }
            <div>
                <p>User Name:</p>
                <p>{props.user.username}</p>
            </div>
            <div>
                <p>Joined:</p>
                <p>{moment(props.user.memberSince).format('llll')}</p>
            </div>
        </div>
    )
}

export default withAuth(UserInfo)