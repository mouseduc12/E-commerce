import React from "react"
import Events from  "./Events"
import ShowOffProducts from "./ShowOffProducts";

class GeneralShop extends React.Component{
    render(){
        return(
            <div>
                <Events />
                <ShowOffProducts />
            </div>
        )
    }
}

export default GeneralShop