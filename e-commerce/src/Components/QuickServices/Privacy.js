import React from "react"

const Privacy = () => {
    return (
        <div className="top-level">
            <div className="second-level">
                <div className="second-level-text">
                    <h1>Privacy Policy</h1>
                    <hr />
                </div>
            </div>
            <div className="third-level">
                <div className="third-level-nest">
                    <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>
                </div>
                <div className="third-level-nest">
                    <p>When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
                </div>
                <div className="third-level-nest">
                    <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
                </div>
            </div>
        </div>
    )
}

export default Privacy;