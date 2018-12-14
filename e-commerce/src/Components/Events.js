import React from "react"
import LazyLoad from "react-lazyload";
import "../ComponentStyles/Events.css";
import Event from "./Event"
import "../ComponentStyles/Events.css"
import newImage1 from "../images/decoration-event.jpeg"
import newImage2 from "../images/fire-pit-event.jpg"
import newImage3 from "../images/light-bulb-event.jpeg"
import newImage4 from "../images/garden-event.jpeg"
import newImage5 from "../images/garden-promotion.jpeg"
import newImage6 from "../images/promotions.jpeg"

class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [newImage1, newImage2, newImage3, newImage4],
            headLine: ["Garden Sculptures", "Fire Pits", "Outdoor Lights", "Plants"],
            text: ["Unique garden statuary and sculptures to accent the garden", "Buy a ready-to-use fire pit for your backyard", "Nice looking house into an extraordinary architectural work of art is through outdoor lighting.", "Count on our plants, garden flowers to be healthy and thriving"],
            promotion: [
                {
                    promoteImage: newImage5,
                    headline: "Garden Day!",
                    text: "Check it out now and get up to 40% discount in plant section"
                },
                {
                    promoteImage: newImage6,
                    headline: "Outdoor Lights Sale Off!!",
                    text: "This Thursday we will give you guys discount up to 50% in Outdoor Lights section"
                }
            ],
            exchange: 0
        };
        this.setIntervalId = undefined
    }
    componentDidMount() {
        this.setIntervalId = setInterval(
            () => {
                if (this.state.exchange >= 1) {
                    this.setState({
                        exchange: 0
                    })
                } else {
                    this.setState({
                        exchange: this.state.exchange + 1,
                    })
                }
            }, 8000
        )
    }

    componentWillUnmount() {
        clearInterval(this.setIntervalId)
    }

    render() {
        return (
            <div className="events-promotions">
                <div className="first-event">
                    <Event image={this.state.images[0]} headLine={this.state.headLine[0]} text={this.state.text[0]} />
                    <Event image={this.state.images[1]} headLine={this.state.headLine[1]} text={this.state.text[1]} />
                </div>
                <div className="promotion">
                    <div
                        className="promote-image"
                        style={{ backgroundImage: this.state.exchange === 0 ? `url(${this.state.promotion[0].promoteImage})` : `url(${this.state.promotion[1].promoteImage})` }}>
                    </div>
                    <div className="promote-text">
                        <h2>{this.state.exchange === 0 ? this.state.promotion[0].headline : this.state.promotion[1].headline}</h2>
                        <p>{this.state.exchange === 0 ? this.state.promotion[0].text : this.state.promotion[1].text}</p>
                    </div>
                </div>
                <div className="first-event">
                    <Event image={this.state.images[2]} headLine={this.state.headLine[2]} text={this.state.text[2]} number={3} />
                    <Event image={this.state.images[3]} headLine={this.state.headLine[3]} text={this.state.text[3]} number={4} />
                </div>
            </div>
        )
    }
}

export default Events
{/* <LazyLoad height={850} once throttle={500} className="load-animated"> */ }
{/* </LazyLoad> */ }