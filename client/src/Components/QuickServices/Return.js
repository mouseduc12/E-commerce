import React from "react"

const Return = () => {
    return(
       <div className="top-level">
            <div className="second-level">
                <div className="second-level-text">
                    <h1>Return</h1>
                    <hr />
                </div>
            </div>
            <div className="third-level">
                <div className= "third-level-nest"> 
                    <p>To return an item to us, follow the directions listed on the return exchange form included with your order. If you don’t have this form available, you can download one by clicking here.</p>
                </div>
                <div className= "third-level-nest">
                    <p>For items that are damaged, defective or not what you ordered, please call us at 888-888-888 so we can best serve you and provide you with return instructions. Items that are made-to-order cannot be returned. </p>
                </div>
            </div>
        </div>
    )
}

export default Return;