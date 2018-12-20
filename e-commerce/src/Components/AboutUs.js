import React from "react"

const AboutUs = () => {
    return (
        <div className="top-level">
            <div className="second-level" id="img-of-about-us">
                <div className="second-level-text" >
                    <h1>About Us</h1>
                    <hr />
                </div>
            </div>
            <div className="third-level">
                <div>
                    <h3>You're the reason why we work hard!</h3>
                    <p>Welcome to Decor's, your number one source for all things such as Garden and Outdoor. We're dedicated to giving you the very best of outdoor products, with a focus on dependability, customer service and uniqueness.</p>
                </div>
                <div>
                    <h3>Started At:</h3>
                    <p>Founded in 2017 by Terra, Decor's has come a long way from its beginnings in a small office in Colorado. We rapidly grow in thin air just because of our customers is unquestionable</p>
                    <div className="image-of-operation" style={{ backgroundImage: `url("https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}></div>
                </div>
                <div>
                    <h3>How it all happened:</h3>
                    <p> When Terra first started out, her goal is to help other parents be more eco-friendly, providing the best equipment to carry neighbors work that keep drove her to quit her day job, and gave her the impetus to turn hard work and inspiration into to a booming online store</p>
                    <div className="image-of-operation" style={{ backgroundImage: `url("https://images.pexels.com/photos/1111028/pexels-photo-1111028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}></div>
                </div>
                <div>
                    <h3>Where do we serve?</h3>
                    <p>We now serve customers all over the US and Canada, and are thrilled to be a part of the eco-friendly wing of the garden industry.</p>
                </div>
                <div>
                    <h3>Last Words:</h3>
                    <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                    <hr />
                    <p>Sincerely, Terra , Founder of Decor's</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs