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
        this.props.getCollectionData(1)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.sortedData === "lowest") {
            this.newSortedData = nextProps.dataCollection.map(each => each.products.price[0] === "$" ? { ...each.products, price: each.products.price.slice(1) } : each.products).sort((a, b) => a.price - b.price)
        } else if (nextProps.sortedData === "highest") {
            this.newSortedData = nextProps.dataCollection.map(each => each.products.price[0] === "$" ? { ...each.products, price: each.products.price.slice(1) } : each.products).sort((a, b) => b.price - a.price)
        } else {
            this.newSortedData = []
        }
    }
    render() {
        const pageData = []
        for (let i = 1; i <= this.props.allProductPage; i++) {
            pageData.push(i)
        }
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
                                    <HandleMouse
                                        otherImages={each.otherImages}
                                        key={each._id}
                                        render={(props) => <Products {...each} {...props} key={each._id} />} />)}
                            </Fragment>

                            :
                            <Fragment>
                                {this.props.dataCollection.map(each =>
                                    <HandleMouse
                                        otherImages={each.products.otherImages}
                                        key={each._id}
                                        render={(props) => <Products {...each.products} {...props} key={each._id} />} />)}
                            </Fragment>
                        }
                        <div className = "all-product-page">
                            {pageData.map(each => <p 
                            onClick={() => this.props.getCollectionData(each)}
                            style ={{color: this.props.activeNumber === each && "darkCyan"}}
                            >{each}</p>)}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withProduct(Shop)
