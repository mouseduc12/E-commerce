import React from "react"
import "../ComponentStyles/ShowOffProduct.css"
import LazyLoad from "react-lazyload"

class ShowOffProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            mouseEnter: false,
            mouseLeave: true,
            slideOver: 0
        }
        this.intervalId = undefined
    }

    handleOver = () => {
        this.intervalId = setInterval(
            () => {
                if (this.state.slideOver >= this.props.otherImages.length - 1) {
                    console.log("It's right")
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

    render() {
        return (
            <LazyLoad height={400} once throttle={1000}>
                <div className="manage-front">
                    <div className="manage-front-inside">
                        <div
                            onMouseEnter={this.handleOver}
                            onMouseLeave={this.handleLeave}
                            style={{ backgroundImage: this.state.mouseEnter ? `url(${this.props.otherImages[this.state.slideOver]})` : `url(${this.props.image})` }}
                            className="product-image">
                        </div>
                        <div className="product-image-text">
                            <h3>{this.props.headline}</h3>
                            <p>{this.props.price}</p>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        )
    }
}
export default ShowOffProduct   