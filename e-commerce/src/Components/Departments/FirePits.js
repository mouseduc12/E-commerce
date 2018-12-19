import React, { Fragment } from "react"
import { withProduct } from "../../Context/ProductsProvider"
import { Link } from "react-router-dom"
import Products from "../Products"

class FirePits extends React.Component {
    componentDidMount() {
        this.props.getFirePits()
    }
    render() {
        return (
            <Fragment>
                <div className="image-each-section-container">
                    <div className="image-each-section" style ={{backgroundImage: `url("https://images.pexels.com/photos/1680165/pexels-photo-1680165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`}}>
                        <h2>Fire Pits</h2>
                    </div>
                </div>
                <div className="products-container">
                    <div className="selected-options">
                        <div className="options">
                            <div className="department-options">
                                <h3><Link to="/shop">All Products</Link></h3>
                                <h3><Link to="/shop/fire-pits" style={{ color: "darkCyan" }}>Fire Pits</Link></h3>
                                <h3><Link to="/shop/plants">Plant</Link></h3>
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
                        {this.props.firePits.map(each => <Products {...each} />)}
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withProduct(FirePits)