import React, { Fragment } from "react"
import { Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import GeneralShop from "./GeneralShop"
import QuickServices from "./QuickServices/QuickServices"
import NewInstaFeed from "./NewInstaFeed"
import Events from "./Events"
import Header from "./Header"
import IFrame from "./Iframe"

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" render={(props) =>
                            <Fragment>
                            <Header {...props}/>
                            <Events {...props}/>
                            <GeneralShop {...props}/>
                            <IFrame {...props}/>
                            <NewInstaFeed {...props}/>
                            </Fragment>
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