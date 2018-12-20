import React from "react"
import "../ComponentStyles/Authentication.css"
import { withAuth } from "../Context/AuthContext"

class Authentication extends React.Component {
    constructor() {
        super()
        this.state = {
            isSignedUp: false,
            SfirstName: "",
            SlastName: "",
            SuserName: "",
            Spassword: "",
            lUserName: "",
            lPassword: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleClick = () => {
        this.setState(prevState => ({
            isSignedUp: !prevState.isSignedUp
        }))
    }

    handleSignUpSubmit = (e) => {
        e.preventDefault()
        const sendSignUp = {
            username: this.state.SuserName,
            password: this.state.Spassword,
            firstName: this.state.SfirstName,
            lastName: this.state.SlastName
        }
        this.props.signup(sendSignUp).then(() => {
            this.props.history.push("/")
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        const sendLogin = {
            username: this.state.lUserName,
            password: this.state.lPassword
        }
        this.props.login(sendLogin).then(() =>{
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <div className="authentication-page">
                <div className="authenticate">
                    <div className="authenticate-title">
                        {this.state.isSignedUp ? <h1>Sign Up</h1> : <h1>Log In</h1>}
                        <hr />
                    </div>
                </div>
                {!this.state.isSignedUp ?
                    <div className="authenticate-form-container">
                        <div className="authenticate-form-small-container">
                            <form className="authenticate-form" onSubmit = {this.handleLogin}>
                                <input 
                                type="text" 
                                placeholder="UserName" 
                                name = "lUserName" 
                                value = {this.state.lUserName} 
                                onChange = {this.handleChange}
                                required />

                                <input 
                                type="text"
                                placeholder="Password" 
                                required
                                name = "lPassword" 
                                value = {this.state.lPassword}
                                onChange = {this.handleChange}/>

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
                            <form className="authenticate-form" onSubmit={this.handleSignUpSubmit}>
                                <input
                                    type="text"
                                    name="SfirstName"
                                    value={this.state.SfirstName}
                                    onChange={this.handleChange}
                                    placeholder="First Name" required />

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="SlastName"
                                    value={this.state.SlastName}
                                    onChange={this.handleChange} />

                                <input
                                    type="text"
                                    placeholder="UserName"
                                    name="SuserName"
                                    value={this.state.SuserName}
                                    onChange={this.handleChange}
                                    required />

                                <input
                                    type="text"
                                    placeholder="Password"
                                    name="Spassword"
                                    value={this.state.Spassword}
                                    onChange={this.handleChange}
                                    required />

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
export default withAuth(Authentication)

// axios.get("/", asyn(req,res) =>{
//     const location = await 
// })