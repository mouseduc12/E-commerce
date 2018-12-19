import React from "react"
import Products from "./Products"
import { withProduct } from "../Context/ProductsProvider"

class Shop extends React.Component {
    componentDidMount() {
        this.props.getFirePits()
        this.props.getSculptures()
        this.props.getOutDoorLights()
        this.props.getPlant()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h3>All Products</h3>
                    <h3>Fire Pits</h3>
                    <h3>Plants</h3>
                    <h3>Garden Sculptures</h3>
                    <select>
                        <option>Sort By</option>
                        <option>Lowest To highest</option>
                        <option>Highest To lowest</option>
                    </select>
                </div>
                <div>
                    {this.props.data.map(each => <Products {...each} />)}
                </div>
            </div>
        )
    }

}
export default withProduct(Shop)