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
import Shop from "./Shop";
import FirePits from "./Departments/FirePits"
import Lights from "./Departments/Lights"
import Plants from "./Departments/Plants"
import Sculptures from "./Departments/Sculptures"
import Blog from "./Blog/Blog"
import AboutUs from "./AboutUs";
import User from "./User/User"
import NotFound from "./NotFound";
import AuthorBlogs from "./Blog/AuthorBlogs"
import DisplayEachBlog from "./Blog/DisplayEachBlog"

Modal.defaultStyles.overlay.backgroundColor = 'rgba(1,1,1,0.4)';
Modal.defaultStyles.overlay.zIndex = 100
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false,
            count: 0,
        }
        this.setTimeout = undefined
    }

    componentDidMount() {
        this.setTimeout = !this.state.modalIsOpen &&
            setTimeout(() => {
                this.setState(prevState => ({
                    modalIsOpen: !prevState.modalIsOpen,
                    count: prevState.count + 1
                }))
            }, 30000)
        
    
    }

    componentWillUnmount(){
        this.state.modalIsOpen &&
        clearTimeout(this.setTimeout)
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
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
                            <NewInstaFeed {...props} count={this.state.count} />
                        </Fragment>
                    } />
                    <Route exact path="/quickservice/:name" render={(props) => (
                        <QuickServices {...props} />
                    )} />
                    <Route path="/login" render={(props) => (<Authentication {...props} />)} />

                    <Route exact path="/shop"
                        render={(props) => (
                            <Shop {...props} />
                        )} />

                    <Route path="/shop/fire-pits"
                        render={(props) => (
                            <FirePits {...props} />
                        )} />

                    <Route path="/shop/plants" render={(props) => (
                        <Plants {...props} />
                    )} />

                    <Route path="/shop/lights" render={(props) => (
                        <Lights {...props} />
                    )} />

                    <Route path="/shop/sculptures" render={(props) => (
                        <Sculptures {...props} />
                    )} />
                    <Route path="/author/:userId" component= {AuthorBlogs} />
                    <Route path="/blog/:userId/:id" component = {DisplayEachBlog}/>
                    <Route path="/about" component={AboutUs} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/user" component={User} />
                    <Route path= "/notfound" component = {NotFound} />
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