import React from "react"
import moment from "moment"

const AuthorBlog = (props) => {
    return (
        <div className="feature-of-author-each-blog">
            <div className="feature-image-of-each-blog" style={{ backgroundImage: props.featureImage }}>
            </div>
            <div className = "feature-content-of-author-blog">
                <h2>{props.title}</h2>
                {props.firstContent.length > 50 ? <p>{props.firstContent.slice(0, 50) + "[...]"}</p> : <p>{props.firstContent}</p>}
                <p>{moment(props.Date).format("llll")}</p>
            </div>
        </div>
    )
}

export default AuthorBlog