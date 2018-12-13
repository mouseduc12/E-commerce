import React, { Fragment } from "react"
import Header from "./Header"
import { Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import GeneralShop from "./GeneralShop"

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" render={(props) =>
                        <Fragment>
                            <Header {...props} />
                            <GeneralShop {...props} />
                        </Fragment>
                    } />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App 