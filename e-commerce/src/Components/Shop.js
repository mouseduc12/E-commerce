import React, { Fragment } from "react"
import Products from "./Products"
import { withProduct } from "../Context/ProductsProvider"
import "../ComponentStyles/Shop.css"

class Shop extends React.Component {
    componentDidMount() {
        this.props.getFirePits()
        this.props.getSculptures()
        this.props.getOutDoorLights()
        this.props.getPlant()
    }
    render() {
        return (
            <Fragment>
                <div className ="image-each-section-container">
                    <div className="image-each-section">
                        <h2>All Products</h2>
                    </div>
                </div>
                <div className="products-container">
                    <div className="selected-options">
                        <div className="options">
                            <div className="department-options">
                                <h3 style={{ color: "darkCyan" }}>All Products</h3>
                                <h3>Fire Pits</h3>
                                <h3>Plants</h3>
                                <h3>Garden Sculptures</h3>
                            </div>
                            <select className="selects-to-choose">
                                <option>Sort By</option>
                                <option>Lowest To highest</option>
                                <option>Highest To lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-container">
                        {this.props.data.map(each => <Products {...each} />)}
                    </div>
                </div>
            </Fragment>
        )
    }

}
export default withProduct(Shop)