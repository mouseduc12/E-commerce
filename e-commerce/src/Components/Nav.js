import React, { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../ComponentStyles/Nav.css"
import { Link } from "react-router-dom"

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            isScroll: false,
            openNav: true,
            openShop: false
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                isScroll: true,
                openNav: false
            })
        }
        else {
            this.setState({
                isScroll: false,
                openNav: true
            })
        }
    }

    checkNav = () => {
        this.setState(prevState => {
            return {
                openNav: !prevState.openNav
            }
        })
    }

    handleOnMouseOver = () => {
        this.setState({
            openShop: true
        })
    }

    handleOnMouseLeave = () => {
        this.setState({
            openShop: false
        })
    }

    render() {
        return (
            <div style={{ position: this.state.isScroll ? "fixed" : "", gridTemplateRows: this.state.openNav ? "1fr 100" : "1fr" }} className="nav">
                <div className="first-nav-row">
                    <div className="brand">
                        <div className="bars">
                            {this.state.isScroll &&
                                this.state.openNav === false ?
                                <button onClick={this.checkNav}><FontAwesomeIcon icon="bars" className="icon" /></button>
                                : <button onClick={this.checkNav} style={{ display: window.scrollY < 100 && "none" }}><FontAwesomeIcon icon="times" className="icon" /></button>
                            }
                        </div>
                        <h1><Link to="/" style={{ color: "yellow" }}>DECOR<i>'s</i></Link></h1>
                    </div>
                    <form className="search-shop">
                        <input type="text" />
                        <button><FontAwesomeIcon icon="search" /></button>
                    </form>
                    <div className="cart">
                        <button><FontAwesomeIcon icon="heart" /></button>
                        <button><FontAwesomeIcon icon="shopping-cart" /></button>
                    </div>
                </div>
                {this.state.openNav &&
                    <ul className="second-nav-row">
                        <li onMouseOver={this.handleOnMouseOver}><Link to="/shop">Shop <FontAwesomeIcon className = "nav-arrows" icon = {!this.state.openShop ? "arrow-down" : "arrow-up"}/></Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                }
                {this.state.openShop &&
                    <div className = "department-container"  onMouseLeave={this.handleOnMouseLeave}>
                        <ul className="department">
                            <li><Link to="/shop/sculptures">Sculptures</Link></li>
                            <li><Link to="/shop/plants">Plants</Link></li>
                            <li><Link to="/shop/lights">Outdoor Lights</Link></li>
                            <li><Link to="/shop/fire-pits">Fire Pits</Link></li>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
export default Nav