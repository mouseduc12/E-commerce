import React from "react"

const Faq = () => {
    return (
        <div className="top-level">
            <div className="second-level">
                <div className="second-level-text">
                    <h1>FAQ</h1>
                    <hr />
                </div>
            </div>
            <div className="third-level">
                <div className="third-level-nest">
                    <h3>How long will it take to get my order?</h3>
                    <p>This depends on whether it is an *International or a Domestic order. All orders within the U.S. are considered domestic orders and they are shipped and delivered within 2-5 business days. *Please see International Orders for more details.</p>
                </div>
                <div className="third-level-nest">
                    <h3>How can I track my order?</h3>
                    <p>We will send tracking information to the e-mail address associated with your order once the item has shipped. If you have not received your tracking information and it has been over 2 business day, please contact us at 1(882)-271-2811</p>
                </div>
                <div className="third-level-nest">
                    <h3>Where’s my package?</h3>
                    <p>We typically ship out orders same-day when placed by 12pm. When we ship out your package, an automatic email will be sent to the email address that you provided when placing the order. Inside this email, you will find a clickable tracking number that will tell you exactly where your package is. If you are having trouble viewing this information, feel free to contact us.</p>
                </div>
                <div className="third-level-nest">
                    <h3>Customs Fees</h3>
                    <p>Each country varies in customs fees and it's something we can't actually gauge. We charge international fee's in relation to your location as well as the total weight of your package and they range anywhere from $16-$80 USD, but any additional fees have to be taken up with customs in your country.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq;