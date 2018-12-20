import React from "react"
import "../ComponentStyles/Authentication.css"

class Authentication extends React.Component {
    constructor() {
        super()
        this.state = {
            isSignedUp: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isSignedUp: !prevState.isSignedUp
        }))
    }

    render() {
        return (
            <div className="authentication-page">
                <div className="authenticate">
                    <div className="authenticate-title">
                        <h1>Login</h1>
                        <hr />
                    </div>
                </div>
                {!this.state.isSignedUp ?
                    <div className="authenticate-form-container">
                        <div className="authenticate-form-small-container">
                            <form className="authenticate-form">
                                <input type="text" placeholder="@Email" required/>
                                <input type="text" placeholder="Password" required/>
                                <div className="authenticate-button">
                                    <button>Log In</button>
                                </div>
                            </form>
                            <div className="switch-form">
                                <h3>New Customer?</h3>
                                <p onClick={this.handleClick}>Sign Up</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="authenticate-form-container">
                        <div className="authenticate-form-small-container sign-up">
                            <form className="authenticate-form">
                                <input type="text" placeholder="First Name" required />
                                <input type="text" placeholder="Last Name" />
                                <input type="email" placeholder="@Email" required />
                                <input type="text" placeholder="Password" required />
                                <div className="authenticate-button">
                                    <button>Sign Up</button>
                                </div>
                            </form>
                            <div className="switch-form">
                                <h3>Already have an account?</h3>
                                <p onClick={this.handleClick}>Log in</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Authentication

// axios.get("/", asyn(req,res) =>{
//     const location = await 
// })