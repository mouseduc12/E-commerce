import React, { Fragment } from "react"
import Products from "./Products"
import { withProduct } from "../Context/ProductsProvider"
import "../ComponentStyles/Shop.css"
import { Link } from "react-router-dom"
import HandleMouse from "../shared/HandleMouse"

class Shop extends React.Component {
    constructor() {
        super()
        this.newSortedData = []
    }
    componentDidMount() {
        this.props.getFirePits()
        this.props.getSculptures()
        this.props.getOutDoorLights()
        this.props.getPlant()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.sortedData === "lowest") {
            this.newSortedData = this.props.data.map(each => each.price[0] === "$" ? { ...each, price: each.price.slice(1) } : each).sort((a, b) => a.price - b.price)
        } else if (nextProps.sortedData === "highest"){
            this.newSortedData = this.props.data.map(each => each.price[0] === "$" ? { ...each, price: each.price.slice(1) } : each).sort((a, b) => b.price - a.price)
        } else {
            this.newSortedData = []
        }
    }
    render() {
        console.log(this.newSortedData)
        return (
            <Fragment>
                <div className="image-each-section-container">
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
                                <h3><Link to="/shop/lights">Outdoor Lights</Link></h3>
                            </div>
                            <select className="selects-to-choose" name="sortedData" onChange={this.props.handleChange}>
                                <option value="">Sort By</option>
                                <option value="lowest">Lowest To highest</option>
                                <option value="highest">Highest To lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-container">
                        {this.newSortedData.length > 1 ?
                            <Fragment>
                            {this.newSortedData.map(each => 
                                <HandleMouse
                                 otherImages={each.otherImages} 
                                 key={each._id} 
                                 render={(props) => <Products {...each} {...props} key={each._id} />} />)}
                            </Fragment>

                        : 
                            <Fragment>
                                {this.props.data.map(each => 
                                <HandleMouse
                                 otherImages={each.otherImages} 
                                 key={each._id} 
                                 render={(props) => <Products {...each} {...props} key={each._id} />} />)}
                            </Fragment>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }

}
export default withProduct(Shop)

      //    console.log(a.price.charAt(0) === "$" ? parseInt(a.price.slice(1, a.price.length)) : parseInt(a.price))
            //    console.log(typeof a.price.charAt(0) === "$" ? parseInt(a.price.slice(1, a.price.length)) : parseInt(a.price))
            //    console.log(b.price.charAt(0) === "$" ? parseInt(b.price.slice(1, b.price.length)) : parseInt(b.price))
            //    console.log(typeof parseInt(a.price.slice(1, a.price.length)))
            //    console.log(typeof parseInt(b.price.slice(1, b.price.length)))