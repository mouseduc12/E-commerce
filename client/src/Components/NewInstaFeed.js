import React from "react"
import InstaFeed from "react-instafeed"
import "../ComponentStyles/NewInstaFeed.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from "react-lazyload"

class NewInstaFeed extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.count > 0) {
            return false
        } else {
            return true
        }
    }
    render() {
        const display =
            `<div class ="image_general">
                <a href='{{link}}' target='_blank' class='instafeed__item'>
                <div class='instafeed__item__background' style="background-image: url('{{image}}')">
                    <div class='nothing'>
                        <p class='instafeed__item__caption'>{{model.short_caption}}</p>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>
                </a>
            </div>`
        const instafeedTarget = 'instafeed';
        return (
            <LazyLoad height={500} once throttle={500}>
                <div className="insta-holder">
                    <div id={instafeedTarget} className="new-insta">
                        <InstaFeed
                            className="block-image-overflow"
                            limit="5"
                            resolution='standard_resolution'
                            sortBy='most-recent'
                            target={instafeedTarget}
                            template={display}
                            userId={`${process.env.REACT_APP_USERID}`}
                            clientId={`${process.env.REACT_APP_INSTASECRET}`}
                            accessToken={`${process.env.REACT_APP_ACCESSTOKEN}`}
                        />
                    </div>
                    <div className="insta-brand">
                        <p><FontAwesomeIcon icon={['fab', 'instagram']} className="insta-font" /></p>
                        <h3>Garden_Decors</h3>
                    </div>
                </div>
            </LazyLoad>
        )

    }
}

export default NewInstaFeed
//{this.props.count === 0 ? "5" : "0"}