import React from "react"
import moment from "moment"
import "../../ComponentStyles/AuthorBlog.css"
import { Link } from "react-router-dom"

const AuthorBlog = (props) => {
    return (
        <Link to = {`/blog/${props.user._id}/${props._id}`} style ={{color: "black"}}>
            <div className="feature-of-author-each-blog">
                <div className="feature-image-of-each-blog" style={{ backgroundImage: `url(${props.featureImage})` }}>
                </div>
                <div className="feature-content-of-author-blog">
                    <h2>{props.title}</h2>
                    {props.firstContent.length > 50 ? <p>{props.firstContent.slice(0, 50) + "[...]"}</p> : <p>{props.firstContent}</p>}
                    <p>{moment(props.Date).format("llll")}</p>
                </div>
            </div>
        </Link>
    )
}

export default AuthorBlog