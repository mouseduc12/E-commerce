import React, { Fragment } from "react"
import Products from "./Products"
import { withProduct } from "../Context/ProductsProvider"
import "../ComponentStyles/Shop.css"
import { Link } from "react-router-dom"

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
                                <h3><Link to="/shop" style={{ color: "darkCyan" }}>All Products</Link></h3>
                                <h3><Link to="/shop/fire-pits">Fire Pits</Link></h3>
                                <h3><Link to="/shop/plants">Plants</Link></h3>
                                <h3><Link to="/shop/sculptures">Garden Sculptures</Link></h3>
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