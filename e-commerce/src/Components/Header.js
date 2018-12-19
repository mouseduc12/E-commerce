import React from "react"
import "../ComponentStyles/Header.css"
import Slider from "./Slider"
import img1 from '../images/decors.jpeg'
import img3 from "../images/firePits.jpeg"
import img2 from "../images/outdoorLignting.jpeg"
import img4 from "../images/Plants.jpeg"
import Benefits from "./Benefits"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            slide: 0,
            sliderImages: [img1, img2, img3, img4],
            count: 1
        };
        this.setIntervalId = undefined;
    }

    componentDidMount() {
        this.setIntervalId = setInterval(
            () => {
                if (this.state.slide >= 3) {
                    this.setState({
                        slide: 0,
                        count: this.state.count +1
                    })
                } else {
                    this.setState({
                        slide: this.state.slide + 1,
                    })
                }
            }, 10000
        )
    }
    componentWillUnmount() {
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
                <div className="container-sliders">
                    <Slider
                        image={this.state.sliderImages[0]}
                        slide={0}
                        count = {this.state.count}
                        sliderCount={this.state.slide}
                        handleSlideRight={this.handleSlideRight}
                        handleSlideLeft={this.hanldeSlideLeft} />
                    <Slider
                        image={this.state.sliderImages[1]}
                        slide={1}
                        sliderCount={this.state.slide}
                        handleSlideRight={this.handleSlideRight}
                        handleSlideLeft={this.hanldeSlideLeft} />
                    <Slider
                        image={this.state.sliderImages[2]}
                        slide={2}
                        sliderCount={this.state.slide}
                        handleSlideRight={this.handleSlideRight}
                        handleSlideLeft={this.hanldeSlideLeft} />
                    <Slider
                        image={this.state.sliderImages[3]}
                        slide={3}
                        sliderCount={this.state.slide}
                        handleSlideRight={this.handleSlideRight}
                        handleSlideLeft={this.hanldeSlideLeft} />
                </div>
                <Benefits />
            </div>
        )
    }
}
export default Header