import React from "react"
import { withBlog } from "../../Context/CreateBlog"
import AuthorBlog from "./AuthorBlog"

class AuthorBlogs extends React.Component{
    componentDidMount(){
        this.props.handleAuthorInfos(this.props.match.params.userId)
    }

    render(){
        return(
            <div>
                {
                    this.props.aboutAuthorData.map(each => <AuthorBlog {...each}/>)
                }
            </div>
        )
    }
}

export default withBlog(AuthorBlogs)