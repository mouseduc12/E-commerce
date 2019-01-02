import React from "react"
import "../ComponentStyles/ShowOffProduct.css"
import LazyLoad from "react-lazyload"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

class ShowOffProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            mouseEnter: false,
            mouseLeave: true,
            slideOver: 0,
            getIcon: false
        }
        this.intervalId = undefined
    }

    handleOver = () => {
        this.intervalId = setInterval(
            () => {
                if (this.state.slideOver >= this.props.otherImages.length - 1) {
                    this.setState({
                        slideOver: 0
                    })
                }
                else {
                    this.setState(prevState => ({
                        slideOver: prevState.slideOver + 1,
                        mouseEnter: true,
                        mouseLeave: false
                    }))
                }
            }, 2000)
    }

    handleLeave = () => {
        clearInterval(this.intervalId)
        this.setState({
            mouseLeave: true,
            mouseEnter: false
        })
    }

    handleIcon = () => {
        this.setState({
            getIcon: true
        })
    }
    handleIconLeave = () => {
        this.setState({
            getIcon: false
        })
    }

    render() {
        return (
            <LazyLoad height={400} once throttle={1000}>
                <div className="manage-front" onMouseEnter={this.handleIcon} onMouseLeave={this.handleIconLeave}>
                    <div className="manage-front-inside">
                        <Link to = {`/item/${this.props._id}`}>
                            <div
                                onMouseEnter={this.handleOver}
                                onMouseLeave={this.handleLeave}
                                style={{ backgroundImage: this.state.mouseEnter ? `url(${this.props.otherImages[this.state.slideOver]})` : `url(${this.props.image})` }}
                                className="product-image">
                            </div>
                        </Link>
                        <div className="product-image-text">
                            <h3>{this.props.headline}</h3>
                            <p>{this.props.price}</p>
                        </div>
                        {this.state.getIcon &&
                            <div className="product-buttons">
                                <button className="product-heart-button"><FontAwesomeIcon icon="heart" /></button>
                                <button onClick = {()=> this.props.handleNoUserCart(this.props._id)} className="product-cart-button"><FontAwesomeIcon icon="shopping-cart" /></button>
                            </div>
                        }
                    </div>
                </div>
            </LazyLoad>
        )
    }
}
export default ShowOffProduct   