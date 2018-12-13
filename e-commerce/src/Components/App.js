import React from "react"
import Header from "./Header"
import { Switch, Route } from "react-router-dom"
import Footer from "./Footer"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>

                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App 