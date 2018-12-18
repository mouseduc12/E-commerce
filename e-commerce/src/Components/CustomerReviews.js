import React, { Fragment } from "react"
import "../ComponentStyles/CustomerReviews.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from "react-lazyload"

class CustomerReviews extends React.Component {
    constructor() {
        super()
        this.state = {
            quote: 0
        }
        this.setIntervalId = undefined
    }

    componentDidMount() {
        this.setIntervalId = setInterval(() => {
            if (this.state.quote >= 2) {
                this.setState({
                    quote: 0
                })
            } else {
                this.setState(prevState => ({
                    quote: prevState.quote + 1
                }))
            }
        }, 20000)
    }
    componentWillMount() {
        clearInterval(this.setIntervalId)
    }

    render() {
        return (
            <LazyLoad hieght ={600} once>
            <div className="customer-reviews">
                <div className="customers">
                    <div className="img customer-big-img"></div>
                    <div className="img customer-small-img1"></div>
                    <div className="img customer-medium-img1"></div>
                    <div className="img customer-small-img2"></div>
                    <div className="img customer-small-img3"></div>
                </div>
                <div className="customers-words-container">
                    <div className = {`customers-words-small-container ${this.state.quote === 0 ? "selected-quote" : "not-selected-quote"}`}>
                        <h2>Customers:</h2>
                        <div className="customers-words">
                            <h2><FontAwesomeIcon icon="quote-left" /></h2>
                            <h3><i>A very nice little gnome that conveys my appreciation for my "neighbors" precisely. I only wish that this was available in a much larger size - so I could extend the greetings to a larger audience.</i></h3>
                            <p style={{ textAlign: "center" }}>Jennifer Griffy</p>
                        </div>
                    </div>
                    <div className = {`customers-words-small-container ${this.state.quote === 1 ? "selected-quote" : "not-selected-quote"}`}>
                        <h2>Customers:</h2>
                        <div className="customers-words">
                            <h2><FontAwesomeIcon icon="quote-left" /></h2>
                            <h3><i>Came in perfect condition! An excellent value for the money. I was able to split into two large pots. They look excellent!I would definitely order again from this seller. It's healthy and full. So pleased!</i></h3>
                            <p style={{ textAlign: "center" }}>Carlyn Mason</p>
                        </div>
                    </div>
                    <div className = {`customers-words-small-container ${this.state.quote === 2? "selected-quote" : "not-selected-quote"}`}>
                        <h2>Customers:</h2>
                        <div className="customers-words">
                            <h2><FontAwesomeIcon icon="quote-left" /></h2>
                            <h3><i>The plant is bigger and taller than I expected. It looks very healthy. Although the shipping box was beaten up on arrival, the plant is still in a good shape. I will not hesitate to buy again in the future.</i></h3>
                            <p style={{ textAlign: "center" }}>J. Wade</p>
                        </div>
                    </div>
                </div>
            </div>
            </LazyLoad>
        )
    }
}

export default CustomerReviews;