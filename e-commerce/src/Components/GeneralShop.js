import React from "react"
import Events from "./Events"
import ShowOffProduct from "./ShowOffProduct";
import { withProduct } from "../Context/ProductsProvider"
import "../ComponentStyles/GeneralShop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GeneralShop extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollX: false
        }
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.props.getPlant();
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }
    handleScroll = () => {
        const manageShowOff = this.myRef.current
        if (manageShowOff.scrollLeft > 100) {
            this.setState({
                scrollX: true
            })
        } else {
            this.setState({
                scrollX: false
            })
        }
    }
    render() {
        return (
            <div>
                <Events />
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
                                <div className = "scroll-arrow-container">
                                    <FontAwesomeIcon icon="long-arrow-alt-right" className="scroll-arrow" />
                                    <p>Scroll right</p>
                                </div>
                            }
                        </div>
                    </div>
                    {this.props.plants.map(each => <ShowOffProduct {...each} key={each._id} />)}
                </div>
            </div>
        )
    }
}

export default withProduct(GeneralShop);