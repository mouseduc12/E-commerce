import React, { Fragment } from "react"
import ShowOffProduct from "./ShowOffProduct";
import { withProduct } from "../Context/ProductsProvider"
import "../ComponentStyles/GeneralShop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class GeneralShop extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollX: false,
            scrollNewX: false,
            toggle: false
        }
        this.myRef = React.createRef();
        this.mySecondRef = React.createRef()
    }
    componentDidMount() {
        this.props.getPlant();
        this.props.getSculptures();
        this.props.getAllCollectionData();
    }


    handleScroll = () => {
        const manageShowOff = this.myRef.current
        const manageNewShowOff = this.mySecondRef.current
        if (manageShowOff.scrollLeft > 100 && !this.state.scrollX) {
            this.setState({
                scrollX: true,
                scrollNewX: true
            })
        } else if (manageShowOff.scrollLeft < 100 && this.state.scrollX) {
            this.setState({
                scrollX: false
            })
        }

        if (manageNewShowOff.scrollLeft > 100 && !this.state.scrollNewX) {
            this.setState({
                scrollNewX: true
            })
        } else if (manageNewShowOff.scrollLeft < 100 && this.state.scrollNewX) {
            this.setState({
                scrollNewX: false
            })
        }
    }
    render() {
        return (
            <div>
                <Fragment>
                    <div className="manage-showoff" onScroll={this.handleScroll} ref={this.myRef}>
                        <div className="manage-store-teller">
                            <div className="visit-store-teller" style={{
                                position: this.state.scrollX && "absolute",
                                backgroundColor: this.state.scrollX && "#41474d",
                                color: this.state.scrollX && "white",
                                opacity: this.state.scrollX && 1
                            }}>
                                <p>VISIT OUR</p>
                                <h2>PLANTS</h2>
                                {!this.state.scrollX &&
                                    <div className="scroll-arrow-container">
                                        <FontAwesomeIcon icon="long-arrow-alt-right" className="scroll-arrow" />
                                        <p>Scroll right</p>
                                    </div>
                                }
                            </div>
                        </div>
                        {this.props.plants.slice().splice(0, 6).map(each => <ShowOffProduct
                            {...each}
                            key={each._id}
                            handleNoUserCart={this.props.handleNoUserCart}
                        />)}
                    </div>
                    <div className="manage-showoff" onScroll={this.handleScroll} ref={this.mySecondRef} >
                        <div className="manage-store-teller">
                            <div className="visit-store-teller" style={{
                                position: this.state.scrollNewX && "absolute",
                                backgroundColor: this.state.scrollNewX && "#41474d",
                                color: this.state.scrollNewX && "white",
                                opacity: this.state.scrollNewX && 1
                            }}>
                                <p>VISIT OUR</p>
                                <h2>Garden Sculptures</h2>
                                {!this.state.scrollNewX &&
                                    <div className="scroll-arrow-container">
                                        <FontAwesomeIcon icon="long-arrow-alt-right" className="scroll-arrow" />
                                        <p>Scroll right</p>
                                    </div>
                                }
                            </div>
                        </div>
                        {this.props.sculptures.slice().splice(0, 6).map(each => <ShowOffProduct
                            {...each}
                            key={each._id}
                            handleNoUserCart={this.props.handleNoUserCart}
                        />)}
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default withProduct(GeneralShop);
