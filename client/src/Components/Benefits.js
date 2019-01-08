import React from "react";
import "../ComponentStyles/Benefits.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Benefits = () =>{
    return(
        <div className="benefits">
            <div className ="benefit">
                <FontAwesomeIcon icon ="truck" className="icons"/>
                <div className = "ad">
                    <h2>Local Shipping:</h2>
                    <p>Shop over $50 and get free shipping!</p>
                </div>
            </div>
            <div className ="benefit">
                <FontAwesomeIcon icon ="plane-departure"  className="icons"/>
                <div className = "ad">
                    <h2>Global Shipping:</h2>
                    <p>Shop over $200 and get free global shipping!</p>
                </div>
            </div>
            <div className ="benefit">
                <FontAwesomeIcon icon ="gift"  className="icons"/>
                <div className = "ad">
                    <h2>Gift:</h2>
                    <p>We're selling gift too! We'll take care and make it awesome</p>
                </div>
            </div>
            <div className ="benefit">
                <FontAwesomeIcon icon ="phone"  className="icons"/>
                <div className = "ad">
                    <h2>Support 24/7:</h2>
                    <p>Have question? Call +18822712811</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits