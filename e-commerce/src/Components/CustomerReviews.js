import React from "react"
import "../ComponentStyles/CustomerReviews.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CustomerReviews extends React.Component {
    render() {
        return (
            <div className="customer-reviews">
                <div className="customers">
                    <div className="img customer-big-img"></div>
                    <div className="img customer-small-img1"></div>
                    <div className="img customer-medium-img1"></div>
                    <div className="img customer-small-img2"></div>
                    <div className="img customer-small-img3"></div>
                </div>
                <div className="customers-words-container">
                    <h2>Customers:</h2>
                    <div className="customers-words">
                        <h2><FontAwesomeIcon icon="quote-left" /></h2>
                        <h3><i>A very nice little gnome that conveys my appreciation for my "neighbors" precisely. I only wish that this was available in a much larger size - so I could extend the greetings to a larger audience.</i></h3>
                        <p style={{textAlign: "center"}}>Jennifer Griffy</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerReviews;