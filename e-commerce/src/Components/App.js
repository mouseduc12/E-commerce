import React, { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import GeneralShop from "./GeneralShop"
import QuickServices from "./QuickServices/QuickServices"

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" render={(props) =>
                            <GeneralShop {...props} />
                    } />
                    <Route path = "/quickservice/:name" render= {(props) =>(
                        <QuickServices {...props}/>
                    )}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App 