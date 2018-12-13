import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import "../ComponentStyles/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="first-footer-section">
                <div className="follow-us">
                    <h2>Follow Us:</h2>
                    <div className="brands">
                        <p><FontAwesomeIcon icon={['fab', 'facebook']} /></p>
                        <p><FontAwesomeIcon icon={['fab', 'instagram']} /></p>
                        <p><FontAwesomeIcon icon={['fab', 'linkedin']} /></p>
                        <p><FontAwesomeIcon icon={['fab', 'twitter']} /></p>
                    </div>
                    <hr/>
                </div>
                <div className="quick-links">
                    <h2>Quick Services:</h2>
                    <div className="links">
                        <Link to="/">FAQ</Link>
                        <Link to="/">Return</Link>
                        <Link to="/">Shipping</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Blog</Link>
                    </div>
                </div>
                <p className="copy-right">Copyright@ 2018 Decor's <i>Duc</i> </p>
            </div>
            <div className="second-footer-section">
                <div className="new-sletter">
                    <h2>Sign up to get discount!!</h2>
                    <div className = "sign-up-email">
                        <input placeholder="Email Address"></input>
                        <button>SIGN UP</button>
                    </div>
                </div>
                <div className="help">
                    <h2>Need help? Call Us:</h2>
                    <h2>+18822712811</h2>
                </div>
                <div className="credits-card">
                    <div className= "credit-cards">
                    <p><FontAwesomeIcon icon={['fab', 'cc-visa']} /></p>
                    <p><FontAwesomeIcon icon={['fab', 'cc-stripe']} /></p>
                    <p><FontAwesomeIcon icon={['fab', 'cc-paypal']} /></p>
                    <p><FontAwesomeIcon icon={['fab', 'cc-discover']} /></p>
                    <p><FontAwesomeIcon icon={['fab', 'cc-amex']} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer