import React from "react"
import { withBlog } from "../../Context/CreateBlog"
import EachBlog from "./EachBlog"
import "../../ComponentStyles/Blog.css"

class Blog extends React.Component {
    componentDidMount() {
        this.props.getBlogData()
    }

    render() {
        const data = []
        for (let i = 0; i < this.props.page; i++) {
            data.push(i + 1)
        }
        return (
            <div className="blogs-section">
                <h1>Blogs</h1>
                <div className="blog-container">
                    {this.props.blogData.reverse().map((each, id) => <EachBlog key={each._id} {...each} slot={id} />)}
                </div>
                <div className="page">
                    {
                        data.map(each => <p onClick={() => this.props.getBlogData(each)}>{each}</p>)
                    }
                </div>
            </div>
        )
    }
}

export default withBlog(Blog) 