import React from "react"
import "../ComponentStyles/Slider.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LazyLoad from "react-lazyload"
import { Link } from "react-router-dom"

class Slider extends React.Component {
    generatorClass = () => {
        if (this.props.count) {
            if (this.props.count <= 1) {
                return "is-selected-but-no-animation"
            } else {
                return "is-selected"
            }
        }
        else {
            if (this.props.slide === this.props.sliderCount) {
                return "is-selected"
            }
            else {
                return "not-selected"
            }
        }
    }
    render() {
        return (
            <LazyLoad height={600} once>
                <div className={`slider-container ${this.generatorClass()}`}>
                    <div className="image" style={{ backgroundImage: `url(${this.props.image}` }}>
                        <div className="check-out">
                            <FontAwesomeIcon icon="arrow-left" className="arrow" onClick={this.props.handleSlideLeft} />
                            <div className="button-directive">
                                <div className="advertise-texts">
                                    {this.props.slide === 0 &&
                                        <div className="text-sub">
                                            <h2>Garden On Point</h2>
                                            <p>Discover unique art for your garden and yard. Garden statues, wind spinners, obelisks, solar lights, and more!</p>
                                        </div>
                                    }
                                    {this.props.slide === 1 &&
                                        <div className="text-sub">
                                            <h2>Fun All Night</h2>
                                            <p>Shop our spectacular selection of outdoor lighting, including wall and ceiling lights as well as patio lights, outdoor solar lights, and LED floodlights.</p>
                                        </div>
                                    }
                                    {this.props.slide === 2 &&
                                        <div className="text-sub">
                                            <h2>Excited In Cold Time</h2>
                                            <p>We have a wide selection of fire pits and accessories, outdoor fireplaces.</p>
                                        </div>
                                    }
                                    {this.props.slide === 3 &&
                                        <div className="text-sub">
                                            <h2>Extraordinary Plants</h2>
                                            <p>Your destination for perfectly potted plants! We ship nationwide</p>
                                        </div>
                                    }
                                </div>
                                <div className="shop-button">
                                    {this.props.slide === 0 && <Link to = "/shop/sculptures" ><button style ={{cursor: "pointer"}}>Shop Garden Decoration</button></Link>}
                                    {this.props.slide === 1 && <Link to = "/shop/fire-pits" ><button style ={{cursor: "pointer"}}>Shop Fire Pits</button></Link>}
                                    {this.props.slide === 2 && <Link to = "/shop/lights" ><button style ={{cursor: "pointer"}}>Shop Outdoor Light</button></Link>}
                                    {this.props.slide === 3 && <Link to = "/shop/plants" ><button style ={{cursor: "pointer"}}>Shop Plants</button></Link>}
                                </div>
                            </div>
                            <FontAwesomeIcon icon="arrow-right" className="arrow" onClick={this.props.handleSlideRight} />
                        </div>
                        <div className="where-you-at-parent">
                            <div className="where-you-at">
                                <FontAwesomeIcon icon="circle" style={{ color: this.props.slide === 0 ? "darkCyan" : "white" }} />
                                <FontAwesomeIcon icon="circle" style={{ color: this.props.slide === 1 ? "darkCyan" : "white" }} />
                                <FontAwesomeIcon icon="circle" style={{ color: this.props.slide === 2 ? "darkCyan" : "white" }} />
                                <FontAwesomeIcon icon="circle" style={{ color: this.props.slide === 3 ? "darkCyan" : "white" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        )
    }
}

export default Slider