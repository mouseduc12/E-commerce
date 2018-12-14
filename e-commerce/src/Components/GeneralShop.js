import React from "react"
import Events from "./Events"
import ShowOffProduct from "./ShowOffProduct";
import { withProduct } from "../Context/ProductsProvider"
import "../ComponentStyles/GeneralShop.css"

class GeneralShop extends React.Component {
    componentDidMount() {
        this.props.getPlant()
    }
    render() {
        console.log(this.props.plants)
        return (
            <div>
                <Events />
                <div className="manage-showoff">
                    <div className = "manage-store-teller">
                        <div className="visit-store-teller">
                            <p>VISIT OUR</p>
                            <h2>PLANTS</h2>
                        </div>
                    </div>
                    {this.props.plants.map(each => <ShowOffProduct {...each} key={each._id} />)}
                </div>
            </div>
        )
    }
}

export default withProduct(GeneralShop);