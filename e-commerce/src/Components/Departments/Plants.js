import React, { Fragment } from "react"
import Products from "../Products";
import { withProduct } from "../../Context/ProductsProvider"
import { Link } from "react-router-dom"
import HandleMouse from "../../shared/HandleMouse"

class Plants extends React.Component {
    constructor() {
        super()
        this.newSortedData = []
    }
    componentDidMount() {
        this.props.getPlant()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sortedPlants === "lowest") {
            this.newSortedData = this.props.plants.map(each => each.price[0] === "$" ? { ...each, price: each.price.slice(1) } : each).sort((a, b) => a.price - b.price)
        } else if (nextProps.sortedPlants === "highest") {
            this.newSortedData = this.props.plants.map(each => each.price[0] === "$" ? { ...each, price: each.price.slice(1) } : each).sort((a, b) => b.price - a.price)
        } else {
            this.newSortedData = []
        }
    }

    render() {
        return (
            <div>
                <Fragment>
                    <div className="image-each-section-container">
                        <div className="image-each-section" style={{ backgroundImage: `url("https://images.pexels.com/photos/601047/pexels-photo-601047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}>
                            <h2>Plants</h2>
                        </div>
                    </div>
                    <div className="products-container">
                        <div className="selected-options">
                            <div className="options">
                                <div className="department-options">
                                    <h3><Link to="/shop">All Products</Link></h3>
                                    <h3><Link to="/shop/fire-pits">Fire Pits</Link></h3>
                                    <h3><Link to="/shop/plants" style={{ color: "darkCyan" }}>Plants</Link></h3>
                                    <h3><Link to="/shop/sculptures">Garden Sculptures</Link></h3>
                                    <h3><Link to="/shop/lights">Outdoor Lights</Link></h3>
                                </div>
                                <select name="sortedPlants" className="selects-to-choose" onChange = {this.props.handleChange }>
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
                                        <HandleMouse otherImages={each.otherImages}
                                            render={(props) => <Products {...each} {...props} key={each._id} />} />)}
                                </Fragment>
                                :
                                <Fragment>
                                    {this.props.plants.map(each =>
                                        <HandleMouse otherImages={each.otherImages}
                                            render={(props) => <Products {...each} {...props} key={each._id} />} />)}
                                </Fragment>
                            }
                        </div>
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default withProduct(Plants)