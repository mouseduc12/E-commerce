import React from "react"
import Events from  "./Events"
import ShowOffProducts from "./ShowOffProducts";
import { withProduct } from "../Context/ProductsProvider"

class GeneralShop extends React.Component{
    componentDidMount(){
        this.props.getPlant()
    }
    render(){
        console.log(this.props.plants)
        return(
            <div>
                <Events />
                <ShowOffProducts />
            </div>
        )
    }
}

export default withProduct(GeneralShop);