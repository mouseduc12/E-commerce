import React, { Fragment } from "react"
import Events from "./Events"
import ShowOffProduct from "./ShowOffProduct";
import { withProduct } from "../Context/ProductsProvider"
import "../ComponentStyles/GeneralShop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GeneralShop extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollX: false,
            scrollNewX: false
        }
        this.myRef = React.createRef();
        this.mySecondRef = React.createRef()
    }
    componentDidMount() {
        this.props.getPlant();
        this.props.getSculptures();
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = () => {
        const manageShowOff = this.myRef.current
        const manageNewShowOff = this.mySecondRef.current
        if (manageShowOff.scrollLeft > 100) {
            this.setState({
                scrollX: true,
                scrollNewX: true
            })
        } else {
            this.setState({
                scrollX: false
            })
        }
        if (manageNewShowOff.scrollLeft > 100) {
            this.setState({
                scrollNewX: true
            })
        } else {
            this.setState({
                scrollNewX: false
            })
        }
    }
    render() {
        return (
            <div>
                <Events />
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
                        {this.props.plants.map(each => <ShowOffProduct {...each} key={each._id} />)}
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
                        {this.props.sculptures.map(each => <ShowOffProduct {...each} key={each._id} />)}
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default withProduct(GeneralShop);
//style={{ flexDirection: "row-reverse" }}