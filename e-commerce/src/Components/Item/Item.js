import React, { Fragment } from "react"
import { withProduct } from "../../Context/ProductsProvider"
import "../../ComponentStyles/Item.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Item extends React.Component {
    constructor() {
        super()
        this.dataOfProduct = undefined
    }
    componentDidMount() {
        this.props.getAllCollectionData()
    }

    componentWillReceiveProps(nextProps) {
        this.dataOfProduct = nextProps.dataCollection.filter(each => each.products._id === this.props.match.params.id)
    }

    render() {
        console.log(this.props)
        console.log(this.dataOfProduct)
        return (
            <div className = "product-itself-container">
                <Fragment>
                    {this.dataOfProduct &&
                        <div className="product-itself">
                            <div className="specific-product-image-container">
                                <div className="specific-product-other-image-container">
                                    {this.dataOfProduct[0].products.otherImages.map(each =>
                                        <Fragment>
                                            <div className="specific-product-other-image"
                                                style={{ backgroundImage: `url(${this.dataOfProduct[0].products.image})` }}>
                                            </div>
                                            <div className="specific-product-other-image"
                                                style={{ backgroundImage: `url(${each})` }}>
                                            </div>
                                        </Fragment>
                                    )}
                                </div>
                                <div className="specific-product-image"
                                    style={{ backgroundImage: `url(${this.dataOfProduct[0].products.image})` }}>
                                </div>
                            </div>

                            <div className="specific-product-text-container">
                                <h1>{this.dataOfProduct[0].products.headline}</h1>
                                {this.dataOfProduct[0].products.price.charAt(0) === "$" ? <h3 className ="specific-product-price">{this.dataOfProduct[0].products.price}</h3> : <h3 className="specific-product-price">${this.dataOfProduct[0].products.price}</h3>}
                                <form className="quantity">
                                    <input type="number" />
                                    <button>Add To Cart</button>
                                </form>
                                <div className="specific-product-descriptions">
                                    {this.dataOfProduct[0].products.description.map(each => <p><FontAwesomeIcon icon="circle" className="circle-icons"/>{each}</p>)}
                                </div>
                            </div>
                        </div>
                    }
                </Fragment>
            </div>
        )
    }
}

export default withProduct(Item);
