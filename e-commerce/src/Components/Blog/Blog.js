import React from "react"
import { withBlog } from "../../Context/CreateBlog"
import EachBlog from "./EachBlog"

class Blog extends React.Component {
    componentDidMount(){
        this.props.getBlogData()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.blogData.map((each, id) => <EachBlog key={each._id} {...each} slot={id} />)}
            </div>
        )
    }
}

export default withBlog(Blog) 