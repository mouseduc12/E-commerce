import React, { Fragment } from "react"
import { withProduct } from "../../Context/ProductsProvider"
import { Link } from "react-router-dom"
import Products from "../Products"
import HandleMouse from "../../shared/HandleMouse"

class FirePits extends React.Component {
    constructor() {
        super()
        this.newSortedData = []
    }
    componentDidMount() {
        this.props.getFirePits()
        this.props.getAllCollectionData()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.sortedFirePits === "lowest") {
            this.newSortedData = this.props.firePits.map(each => each.price[0] === "$" ? { ...each, price: each.price.slice(1) } : each).sort((a, b) => a.price - b.price)
        } else if (nextProps.sortedFirePits === "highest") {
            this.newSortedData = this.props.firePits.map(each => each.price[0] === "$" ? { ...each, price: each.price.slice(1) } : each).sort((a, b) => b.price - a.price)
        } else {
            this.newSortedData = []
        }
    }
    render() {
        return (
            <Fragment>
                <div className="image-each-section-container">
                    <div className="image-each-section" style={{ backgroundImage: `url("https://images.pexels.com/photos/249614/pexels-photo-249614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}>
                        <h2>Fire Pits</h2>
                    </div>
                </div>
                <div className="products-container">
                    <div className="selected-options">
                        <div className="options">
                            <div className="department-options">
                                <h3><Link to="/shop">All Products</Link></h3>
                                <h3><Link to="/shop/fire-pits" style={{ color: "darkCyan" }}>Fire Pits</Link></h3>
                                <h3><Link to="/shop/plants">Plants</Link></h3>
                                <h3><Link to="/shop/sculptures">Garden Sculptures</Link></h3>
                                <h3><Link to="/shop/lights">Outdoor Lights</Link></h3>
                            </div>
                            <select name="sortedFirePits" onChange={this.props.handleChange} className="selects-to-choose">
                                <option value="">Sort By Price</option>
                                <option value="lowest">Lowest To highest</option>
                                <option value="highest">Highest To lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-container">
                        {this.newSortedData.length > 1 ?
                            <Fragment>
                            {this.newSortedData.map(each =>
                                    <HandleMouse otherImages={each.otherImages}
                                        render={(props) => <Products handleNoUserCart = {this.props.handleNoUserCart} {...each} {...props} key={each._id} />} />)}
                            </Fragment>
                            :
                            <Fragment>
                                {this.props.firePits.map(each =>
                                    <HandleMouse otherImages={each.otherImages}
                                        render={(props) => <Products handleNoUserCart = {this.props.handleNoUserCart} {...each} {...props} key={each._id} />} />)}
                            </Fragment>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withProduct(FirePits)