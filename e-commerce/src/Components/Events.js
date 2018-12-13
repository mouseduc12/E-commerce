import React from "react"
import LazyLoad from "react-lazyload";
import "../ComponentStyles/Events.css";
import Event from "./Event"
import "../ComponentStyles/Events.css"
import newImage1 from "../images/decoration-event.jpeg"
import newImage2 from "../images/fire-pit-event.jpg"
import newImage3 from "../images/light-bulb-event.jpeg"
import newImage4 from "../images/garden-event.jpeg"

class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [newImage1, newImage2, newImage3, newImage4],
            headLine: ["Garden Sculptures", "Fire Pits", "Outdoor Lights", "Plants"],
            text: ["Unique garden statuary and sculptures to accent the garden", "Buy a ready-to-use fire pit for your backyard", "Nice looking house into an extraordinary architectural work of art is through outdoor lighting.", "Count on our plants, garden flowers to be healthy and thriving"],
        }
    }
    render() {
        return (
            <LazyLoad once throttle={500}>
                <div className="events-promotions">
                    <div className="first-event">
                        <Event image= {this.state.images[0]} headLine= {this.state.headLine[0]} text = {this.state.text[0]}/>
                        <Event image= {this.state.images[1]} headLine= {this.state.headLine[1]} text = {this.state.text[1]}/>
                    </div>
                    <div className="promotion">
                        <div className ="promote-image"></div>
                        <div className="promote-text">
                            <h2>Hello</h2>
                            <p>Hello world</p>
                        </div>
                    </div>
                    <div className="first-event">
                        <Event image= {this.state.images[2]} headLine= {this.state.headLine[2]} text = {this.state.text[2]} number = {3}/>
                        <Event image= {this.state.images[3]} headLine= {this.state.headLine[3]} text = {this.state.text[3]} number = {4}/>
                    </div>
                </div>
            </LazyLoad>
        )
    }
}

export default Events