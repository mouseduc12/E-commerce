import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../ComponentStyles/Nav.css"

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            isScroll: false,
            openNav: true,
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 30) {
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

    render() {
        return (
            <div style={{ position: this.state.isScroll ? "fixed" : "", gridTemplateRows: this.state.openNav ? "1fr 100" : "1fr"}} className="nav">
                <div className="first-nav-row">
                    <div className="brand">
                        <div className="bars">
                            {this.state.isScroll &&
                                this.state.openNav === false ?
                                <button onClick={this.checkNav}><FontAwesomeIcon icon="bars" className="icon" /></button>
                                : <button onClick={this.checkNav} style={{ display: window.scrollY < 30 && "none" }}><FontAwesomeIcon icon="times" className="icon" /></button>
                            }
                        </div>
                        <h1>TALITZ</h1>
                    </div>
                    <form className="search-shop">
                        <input type="text" />
                        <button><FontAwesomeIcon icon="search" /></button>
                    </form>
                    <div className="cart">
                        <button><FontAwesomeIcon icon="shopping-cart" /></button>
                    </div>
                </div>
                {this.state.openNav &&
                    <ul className="second-nav-row">
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                }
            </div>
        )
    }
}
export default Nav