import React, { Fragment } from "react"
import { withProduct } from "../../Context/ProductsProvider"
import "../../ComponentStyles/Item.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouMightLike from "./YouMightLike"

class Item extends React.Component {
    constructor() {
        super()
        this.state = {
            isCheckingReview: false,
            isReviewing: false,
            watchingImage: "",
            activeImage: 1,
        }
        this.myNewRef = React.createRef()
    }
    componentDidMount() {
        this.props.getAllCollectionData(this.props.match.params.id)
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.match.params.id !== this.props.match.params.id ){
            this.props.getAllCollectionData(nextProps.match.params.id)
            return true
        } else if (nextProps.match.params.id === this.props.match.params.id){
            return true
        } else{
            return false
        }
    }

    handleReview = () => {
        if (this.state.isCheckingReview) {
            this.setState(prevState => ({
                isReviewing: !prevState.isReviewing
            }))
        }
    }

    handleCheckingReview = () => {
        this.setState(prevState => ({
            isCheckingReview: !prevState.isCheckingReview
        }))
    }

    handleChangeImage = (image, id) => {
        this.setState({
            watchingImage: image,
            activeImage: id
        })
    }

    render() {
        console.log("AM I RUNNING")
        console.log(this.props.dataOfProduct)
        const firstId = 1
        return (
            <div className="product-itself-container">
                <Fragment>
                    {this.props.dataOfProduct.length >= 1 &&
                        <div className="product-itself">
                            <div className="specific-product-image-container">
                                <div className="specific-product-other-image-container">
                                    <div className="specific-product-other-image"
                                        onClick={() => this.handleChangeImage(this.props.dataOfProduct[0].products.image, firstId)}
                                        style={{
                                            backgroundImage: `url(${this.props.dataOfProduct[0].products.image})`,
                                            border: this.state.activeImage === firstId && "2px solid darkCyan"
                                        }}>
                                    </div>
                                    {this.props.dataOfProduct[0].products.otherImages.map((each, id) =>
                                        <Fragment>
                                            <div className="specific-product-other-image"
                                                id={id + 2}
                                                onClick={() => this.handleChangeImage(each, id + 2)}
                                                style={{
                                                    backgroundImage: `url(${each})`,
                                                    border: this.state.activeImage === id + 2 && "2px solid darkCyan"
                                                }}>
                                            </div>
                                        </Fragment>
                                    )}
                                </div>
                                <div className="specific-product-image"
                                    style={{ backgroundImage: !this.state.watchingImage ? `url(${this.props.dataOfProduct[0].products.image})` : `url(${this.state.watchingImage})` }}>
                                </div>
                            </div>

                            <div className="specific-product-text-container">
                                <h1>{this.props.dataOfProduct[0].products.headline}</h1>
                                {this.props.dataOfProduct[0].products.price.charAt(0) === "$" ? <h3 className="specific-product-price">{this.props.dataOfProduct[0].products.price}</h3> : <h3 className="specific-product-price">${this.props.dataOfProduct[0].products.price}</h3>}
                                <form className="quantity">
                                    <input type="number" defaultValue={1} />
                                    <button>Add To Cart</button>
                                </form>
                                <div className="specific-product-descriptions">
                                    {this.props.dataOfProduct[0].products.description.map(each => <p><FontAwesomeIcon icon="circle" className="circle-icons" />{each}</p>)}
                                </div>
                            </div>
                        </div>
                    }
                </Fragment>
                <div className="specific-customer-reviews-container">
                    <div className="check-customer-is-review" onClick={this.handleCheckingReview}>
                        <p>Customer Review: 5 stars</p>
                        <FontAwesomeIcon className="customer-arrows" icon={!this.state.isCheckingReview ? "arrow-down" : "arrow-up"} />
                    </div>
                    <div className="write-a-review">
                        {
                            this.state.isCheckingReview && <button className="write-a-review-button" onClick={this.handleReview}>Write A Review</button>
                        }
                        {this.state.isReviewing && this.state.isCheckingReview &&
                            <form className="customer-is-reviewing-section">
                                <input placeholder="Name" type="text" />
                                <input placeholder="Email" type="email" />
                                <textarea placeholder="Review" type="text"></textarea>
                                <div>
                                    <button>Submit</button>
                                </div>
                            </form>
                        }
                    </div>
                    <div>
                        {this.state.isCheckingReview && <p>I Love It, Over Quality</p>}
                    </div>
                </div>
                <div className = "you-might-also-like-container">
                    {this.props.randomData.map(each => <YouMightLike {...each}/> )}
                </div>
            </div>
        )
    }
}

export default withProduct(Item);
