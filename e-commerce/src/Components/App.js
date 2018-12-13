import React from "react"
import Header from "./Header"
import { Switch, Route } from "react-router-dom"
import Footer from "./Footer"
import GeneralShop from "./GeneralShop"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={GeneralShop}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App 