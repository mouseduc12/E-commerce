import React, { Fragment } from "react"
import "../ComponentStyles/Event.css"
const Event = (props) => {
    return (
        <Fragment>
            <div className="events">
                <div className="event">
                    <div className="event-image" style = {{backgroundImage: `url(${props.image})`}}>
                    </div>
                    <div className="event-texts">
                        <h2>{props.headLine}</h2>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Event 