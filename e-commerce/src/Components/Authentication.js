import React from "react"


class Authentication extends React.Component {
    render() {
        return (
            <div className="authentication-page">
                <div className="authenticate">
                    <h1>Login</h1>
                    <hr />
                </div>
                <form>
                    <input type="text" placeholder="UserName" />
                    <input type="text" placeholder="Password" />
                    <button>Log In</button>
                </form>
                <div>
                    <h3>New Customer?</h3>
                    <p>Sign Up</p>
                </div>
            </div>
        )
    }
}
export default Authentication