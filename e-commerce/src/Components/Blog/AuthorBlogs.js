import React from "react"
import { withBlog } from "../../Context/CreateBlog"
import AuthorBlog from "./AuthorBlog"
import "../../ComponentStyles/AuthorBlogs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AuthorBlogs extends React.Component {
    componentDidMount() {
        this.props.handleAuthorInfos(this.props.match.params.userId)
    }

    render() {
        return (
            <div className="about-blog-of-author-big-container">
                <div className="about-blog-of-author-container">
                    {this.props.aboutAuthorData.length >= 1 &&
                        <div className="small-container-of-author">
                            <div className="author-of-these-blogs"
                                style={{ backgroundImage: `url(${this.props.aboutAuthorData[0].user.faceImage})` }}>
                            </div>
                            <h2>{this.props.aboutAuthorData[0].user.firstName}</h2>
                            <div className = "icon-for-posts">
                                <p><FontAwesomeIcon icon="signal" /></p>
                                <p>{this.props.aboutAuthorData.length} posts</p>
                            </div>
                            <hr />
                        </div>
                    }
                    <div className="feature-of-author-each-blog-container">
                        {
                            this.props.aboutAuthorData.reverse().map(each => <AuthorBlog {...each} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withBlog(AuthorBlogs)