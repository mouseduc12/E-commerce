import React from "react"
import "../../ComponentStyles/WriteArticle.css"
import { withBlog } from "../../Context/CreateBlog"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WriteArticle = (props) => {
    return (
        <div>
            <form onSubmit = {props.handleSubmitBlog} className = "admin-form">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={props.title}
                    onChange={props.handleBlogChange}
                    required />

                <textarea
                    type="text"
                    placeholder="First Text"
                    name="firstContent"
                    value={props.firstContent}
                    onChange={props.handleBlogChange}
                    required>
                </textarea>   

                <input
                    type="text"
                    placeholder="First Image (optional)"
                    name="firstContentImage"
                    value={props.firstContentImage}
                    onChange={props.handleBlogChange} />
                <textarea
                    type="text"
                    placeholder="Second Text"
                    name="secondContent"
                    value={props.secondContent}
                    onChange={props.handleBlogChange}
                    required>
                 </textarea>   

                <input
                    type="text"
                    placeholder="Second Image (optional)"
                    name="secondImageContent"
                    value={props.secondImageContent}
                    onChange={props.handleBlogChange} />

                <input
                    type="text"
                    placeholder="Feature Image"
                    name="featureImage"
                    value={props.featureImage}
                    onChange={props.handleBlogChange}
                    required />

                <button>Post</button>
            </form>
        </div>
    )
}

export default withBlog(WriteArticle);