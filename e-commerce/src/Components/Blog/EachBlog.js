import React, { Fragment } from "react"
import "../../ComponentStyles/EachBlog.css"
import moment from "moment"
import { Link } from 'react-router-dom'

const EachBlog = (props) => {
    const generateAuthorContainer = () => {
        if (props.slot === 0) {
            return "new-author-post"
        }
        else if (props.slot % 2 === 0) {
            return "older-author-post"
        }
        else if (props.slot % 2 === 1) {
            return "old-author-post"
        }
    }

    const generateAuthorImage = () => {
        if (props.slot === 0) {
            return "new-author-image"
        }
        else {
            return "old-author-image"
        }
    }
    return (
        <Fragment>
            <div className={generateAuthorContainer()}>
                <div style={{ backgroundImage: `url(${props.featureImage})` }} className={`feature-author-image ${generateAuthorImage()}`}></div>
                <div className="content-of-image">
                    <div className="info-of-the-post">
                        <h4>{moment(props.Date).format('llll')}</h4>
                        <h1>{props.title}</h1>
                        {
                            props.firstContent.length > 50 ? <p>{props.firstContent.slice(0, 50) + "[...]"}</p> : <p>{props.firstContent}</p>
                        }
                        <div className="button-of-blog">
                            <Link to = {`/blog/${props.user._id}/${props._id}`}>
                                <button>READ MORE</button>
                            </Link>
                        </div>
                    </div>
                    <div className="author-of-the-blog">
                        <div style={{ backgroundImage: `url(${props.user.faceImage})` }} className="author-of-the-image"></div>
                        <h3>{props.user.firstName}</h3>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EachBlog