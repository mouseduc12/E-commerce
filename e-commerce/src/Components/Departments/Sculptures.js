import React, { Fragment } from "react"
import Products from "../Products";
import { withProduct } from "../../Context/ProductsProvider"
import { Link } from "react-router-dom"

class Sculptures extends React.Component {
    componentDidMount(){
        this.props.getSculptures()
    }
    render(){
        return (
            <div>
                <Fragment>
                    <div className="image-each-section-container">
                        <div className="image-each-section" style={{ backgroundImage: `url("https://images.pexels.com/photos/234510/pexels-photo-234510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}>
                            <h2>Sculptures</h2>
                        </div>
                    </div>
                    <div className="products-container">
                        <div className="selected-options">
                            <div className="options">
                                <div className="department-options">
                                    <h3><Link to="/shop">All Products</Link></h3>
                                    <h3><Link to="/shop/fire-pits">Fire Pits</Link></h3>
                                    <h3><Link to="/shop/plants">Plants</Link></h3>
                                    <h3><Link to="/shop/sculptures" style={{ color: "darkCyan" }}>Garden Sculptures</Link></h3>
                                </div>
                                <select className="selects-to-choose">
                                    <option>Sort By</option>
                                    <option>Lowest To highest</option>
                                    <option>Highest To lowest</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-container">
                            {this.props.sculptures.map(each => <Products {...each} />)}
                        </div>
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default withProduct(Sculptures)