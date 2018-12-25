import React from "react"
import { withBlog } from "../../Context/CreateBlog"

class DisplayEachBlog extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.handleSpecificalBlog(this.props.match.params.userId + "/" + this.props.match.params.id)
    }

    render(){
        console.log(this.props)
        return(
            <div>Welcome To My Blog</div>
        )
    }
}

export default withBlog(DisplayEachBlog)