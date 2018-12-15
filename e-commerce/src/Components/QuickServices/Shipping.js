import React from "react"

const Shipping = () => {
    return (
        <div className="top-level">
            <div className="second-level">
                <h1>Shipping</h1>
            </div>
            <div className="third-level">
                <p>Our shipping prices are based on the value of the items in your order and on the service level you choose. When calculating your total shipping time, please keep in mind that the day the package is shipped or picked up from our warehouse is not considered the first business day; start counting business days from first full day that the package is “in transit” to you.</p>
                <p>Items shipping directly from the vendor / artist and items on backorder will take longer, and this difference is noted on the item page. We’ll let you know throughout the checkout process if you’ve chosen one of these items before you pay for your order. </p>
                <div>
                    <h3>Economy shipping:</h3>
                    <p>Ships within 9 days, arriving no later than the 10th business day after the order was placed.</p>
                </div>
                <div>
                    <h3>Standard shipping:</h3>
                    <p>Ships within 5 days, arriving 6 business days after the order was placed.</p>
                </div>
                <div>
                    <h3>Preferred shipping:</h3>
                    <p>Ships within 3 days, arriving 4 business days after the order was placed.</p>
                </div>
                <div>
                    <h3>Expedited shipping:</h3>
                    <p>Ships within 2 days, arriving 3 business days after the order was placed.</p>
                </div>
                <div>
                    <h3>Express shipping:</h3>
                    <p>Ships within 1 day, arriving 2 business days after the order was placed.</p>
                </div>
            </div>
        </div>
    )
}

export default Shipping;