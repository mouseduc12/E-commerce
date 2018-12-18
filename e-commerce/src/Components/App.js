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
import CustomerReviews from "./CustomerReviews"
import GoogleMap from "./GoogleMap"
import Modal from "react-modal"
import "../ComponentStyles/App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Authentication from "./Authentication";

Modal.defaultStyles.overlay.backgroundColor = 'rgba(1,1,1,0.4)';
Modal.defaultStyles.overlay.zIndex = 100
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false,
            count: 0,
            hasLoadedInsta: false
        }
    }

    componentDidMount() {
        !this.state.modalIsOpen &&
            setTimeout(() => {
                this.setState(prevState => ({
                    modalIsOpen: !prevState.modalIsOpen,
                    count: prevState.count + 1
                }))
            }, 3000)
    }


    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        console.log("I'm rendering")
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" render={(props) =>
                        <Fragment>
                            <Header {...props} />
                            <Events {...props} />
                            <GeneralShop {...props} />
                            <CustomerReviews />
                            <IFrame {...props} />
                            <GoogleMap {...props} />
                            <NewInstaFeed {...props} count = {this.state.count}/>
                        </Fragment>
                    } />
                    <Route path="/quickservice/:name" render={(props) => (
                        <QuickServices {...props} />
                    )} />
                    <Route path="/login" render={(props) => (<Authentication {...props}/>)} />

                </Switch>
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="modal"
                >
                    <div className="modal-container">
                        <div className="modal-img">
                        </div>
                        <div className="modal-contents">
                            <div className="close-modal-button">
                                <button onClick={this.closeModal}>X</button>
                            </div>
                            <div className="text-new-seletter">
                                <h1>NEW SELETTER</h1>
                                <p>Join our new seletter to get weekly discounts and ton of benefits that would suprise you!!</p>
                                <form className="modal-sign-up">
                                    <input placeholder="Email Address" type="email"></input>
                                    <button><FontAwesomeIcon icon="envelope" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Footer />
            </div>
        )
    }
}

export default App 