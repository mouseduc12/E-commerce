import React from "react";
import Iframe from "react-iframe"
import "../ComponentStyles/Iframe.css"
import LazyLoad from "react-lazyload"

const IFrame = () => {
    return (
        <LazyLoad 
            height= {450}
            once
            throttle = {1000}
        >
            <div className="iframe">
                <Iframe url="https://www.youtube.com/embed/t2q0qYDUxjk"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen />
                <div className="info-of-author">
                    <h2>Undecided? Check it out!</h2>
                    <p>Our expert is going to show you what you can do with our toy to build a wonderful garden!</p>
                </div>
            </div>
        </LazyLoad>
    )
}
export default IFrame

// width="1100px"
// height="450px"