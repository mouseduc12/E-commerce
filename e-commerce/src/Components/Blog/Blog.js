import React from "react"
import { withBlog } from "../../Context/CreateBlog"
import EachBlog from "./EachBlog"

class Blog extends React.Component {
    componentDidMount(){
        this.props.getBlogData()
    }
    render() {
        return (
            <div className = "blog-container">
                {this.props.blogData.map((each, id) => <EachBlog key={each._id} {...each} slot={id} />)}
            </div>
        )
    }
}

export default withBlog(Blog) 