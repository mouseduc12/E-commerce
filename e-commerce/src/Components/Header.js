import React from "react"
import Nav from "./Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../ComponentStyles/Header.css"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            slide: 0,
            addMargin: false
        }
    }
    componentDidMount() {
        setInterval(
            () => {
                if (this.state.slide >= 3) {
                    this.setState({
                        slide: 0
                    })
                } else {
                    this.setState({
                        slide: this.state.slide + 1
                    })
                }
            }, 3000
        )
    }


    render() {
        return (
            <div>
                <Nav addMargin={this.state.addMargin} />
                {this.state.slide === 0 &&
                    <div className="image" id="first-slider">
                        <div>
                            <button>Hello World</button>
                            <button>Nothing Left</button>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="arrow-left" />
                            <FontAwesomeIcon icon="arrow-right" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon="circle" style={{ color: "darkCyan" }} />
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" />
                        </div>
                    </div>
                }
                {this.state.slide === 1 &&
                    <div className="image" id="second-slider">
                        <div>
                            <button>Hello World</button>
                            <button>Nothing Left</button>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="arrow-left" />
                            <FontAwesomeIcon icon="arrow-right" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" style={{ color: "darkCyan" }} />
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" />
                        </div>
                    </div>
                }
                {this.state.slide === 2 &&
                    <div className="image" id="third-slider">
                        <div>
                            <button>Hello World</button>
                            <button>Nothing Left</button>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="arrow-left" />
                            <FontAwesomeIcon icon="arrow-right" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" style={{ color: "darkCyan" }} />
                            <FontAwesomeIcon icon="circle" />
                        </div>
                    </div>
                }
                {this.state.slide === 3 &&
                    <div className="image" id="fourth-slider">
                        <div>
                            <button>Hello World</button>
                            <button>Nothing Left</button>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="arrow-left" />
                            <FontAwesomeIcon icon="arrow-right" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" />
                            <FontAwesomeIcon icon="circle" style={{ color: "darkCyan" }} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Header