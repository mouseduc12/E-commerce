import React from "react"
import { withAuth } from "../../Context/AuthContext"

class User extends React.Component{
    render(){
        return(
            <div>
                <h2>Hello world</h2>
            </div>
        )
    }
}

export default withAuth(User)