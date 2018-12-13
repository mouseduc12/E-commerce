import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "../ComponentStyles/Header.css"
import Slider from "./Slider"
import img1 from '../images/decors.jpeg'
import img2 from "../images/firePits.jpeg"
import img3 from "../images/outdoorLignting.jpeg"
import img4 from "../images/Plants.jpeg"
import Benefits from "./Benefits"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            slide: 0,
            bool: false,
            sliderImages: [img1, img2, img3, img4],
        };
        this.setIntervalId = undefined
    }

    componentDidMount() {
        this.setIntervalId = setInterval(
            () => {
                if (this.state.slide >= 3) {
                    this.setState({
                        slide: 0
                    })
                } else {
                    this.setState({
                        slide: this.state.slide + 1,
                    })
                }
            }, 10000
        )
    }
    componentWillUnmount(){
        clearInterval(this.setIntervalId)
    }

    handleSlideRight = () => {
        if (this.state.slide >= 3) {
            this.setState({
                slide: 0
            })
        } else {
            this.setState({
                slide: this.state.slide + 1
            })
        }
    }

    hanldeSlideLeft = () => {
        if (this.state.slide <= 0) {
            this.setState({
                slide: 3
            })
        } else {
            this.setState({
                slide: this.state.slide - 1
            })
        }
    }

    render() {
        return (
            <div>
                <TransitionGroup>
                    <CSSTransition
                        in={true}
                        appear={true}
                        key={this.state.slide}
                        timeout={300}
                        classNames="slide"
                    >
                        <Slider
                            image={this.state.sliderImages[this.state.slide]}
                            slide={this.state.slide}
                            handleSlideRight={this.handleSlideRight}
                            handleSlideLeft={this.hanldeSlideLeft} />
                    </CSSTransition>
                </TransitionGroup>
                <Benefits />
            </div>
        )
    }
}
export default Header