import React, { Fragment } from "react"
import "../ComponentStyles/Event.css"
import LazyLoad from "react-lazyload"

const Event = (props) => {
    return (
        <Fragment>
            <LazyLoad height= {400} once throttle = {500} >
                <div className="events">
                    <div className="event">
                        <div className="event-image" style={{ backgroundImage: `url(${props.image})` }}>
                        </div>
                        <div className="event-texts">
                            <h2>{props.headLine}</h2>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        </Fragment>
    )
}

export default Event 