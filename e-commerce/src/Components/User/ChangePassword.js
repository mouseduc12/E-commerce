import React from "react"
import "../../ComponentStyles/Password.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ChangePassword extends React.Component {
    constructor() {
        super()
        this.state = {
            isVisible: false
        }
    }

    handleVisible = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }))
    }

    render() {
        return (
            <div className="change-password">
                <form>
                    <input type={this.state.isVisible ? "text" : "password"} placeholder="Old Password" />
                    <input type={this.state.isVisible ? "text" : "password"} placeholder="New Password" />
                    <div>
                        <button>Change</button>
                    </div>
                </form>
                {this.state.isVisible ?
                    <p onClick = {this.handleVisible}><FontAwesomeIcon icon="eye" /></p>
                    :
                    <p onClick = {this.handleVisible}><FontAwesomeIcon icon="eye-slash" /></p>
                }
            </div>
        )
    }
}

export default ChangePassword