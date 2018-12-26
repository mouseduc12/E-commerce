import React, { Fragment } from "react"
import "../../ComponentStyles/DisplayEachBlog.css"
import { withBlog } from "../../Context/CreateBlog"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import moment from "moment"
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share"

class DisplayEachBlog extends React.Component {
    componentDidMount() {
        this.props.handleSpecificalBlog(this.props.match.params.userId + "/" + this.props.match.params.id)
        console.log(this.props.match.params.userId)
        console.log(this.props.match.params.id)
    }

    // shouldComponentUpdate(nextProps) {
    //     if(nextProps.match.params.userId !== this.props.match.params.userId){
    //         console.log("Im running")
    //         this.props.handleSpecificalBlog(nextProps.match.params.userId + "/" + nextProps.match.params.id)
    //         return true
    //     }
    //     else{
    //         return false;
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            console.log("Im running")
            this.props.handleSpecificalBlog(nextProps.match.params.userId + "/" + nextProps.match.params.id)
        }
    }
    render() {
        return (
            <div>
                <div className="feature-image-of-one-blog" style={{ backgroundImage: `url(${this.props.dataForSpecificalBlog.featureImage})` }}>
                </div>
                <div className="blog-contents-container">
                    <div className="blog-contents-small-container">
                        <div className="title-of-blog">
                            <h2>{this.props.dataForSpecificalBlog.title}</h2>
                            <h4 style={{ textAlign: "center" }}>{moment(this.props.dataForSpecificalBlog.Date).format("llll")}</h4>
                        </div>
                        <div className="contents-of-blog" >
                            {
                                this.props.dataForSpecificalBlog.firstContentImage &&
                                <div className="content-images" style={{ backgroundImage: `url(${this.props.dataForSpecificalBlog.firstContentImage})` }} >
                                </div>
                            }
                            <p>{this.props.dataForSpecificalBlog.firstContent}</p>
                        </div>
                        <div className="contents-of-blog">
                            {
                                this.props.dataForSpecificalBlog.secondImageContent &&
                                <div className="content-images" style={{ backgroundImage: `url(${this.props.dataForSpecificalBlog.secondImageContent})` }}></div>
                            }
                            <p>{this.props.dataForSpecificalBlog.secondContent}</p>
                        </div>
                        <hr />
                        {this.props.dataForSpecificalBlog.user &&
                            <Fragment>
                                <div className="the-author-of-the-blog">
                                    <Link to={`/author/${this.props.dataForSpecificalBlog.user._id}`}>
                                        <div style={{ backgroundImage: `url(${this.props.dataForSpecificalBlog.user.faceImage})` }} className="the-author-image-of-the-blog"></div>
                                    </Link>
                                    <h3>{this.props.dataForSpecificalBlog.user.firstName}</h3>
                                </div>
                                <div className = "sharing-icons">
                                    <FacebookShareButton
                                        url={`http://localhost:3000/blog/${this.props.dataForSpecificalBlog.user._id}/${this.props.dataForSpecificalBlog._id}`}
                                        quote={this.props.dataForSpecificalBlog.title}
                                        className = "sharing-icon"
                                    >
                                        <FacebookIcon size={32} 
                                        round={true} />
                                    </FacebookShareButton>
                                    <TwitterShareButton
                                        url={`http://localhost:3000/blog/${this.props.dataForSpecificalBlog.user._id}/${this.props.dataForSpecificalBlog._id}`}
                                        title={this.props.dataForSpecificalBlog.title}
                                        className = "sharing-icon"
                                    >
                                        <TwitterIcon size={32}
                                         round={true} 
                                         />
                                    </TwitterShareButton>
                                    <LinkedinShareButton
                                        url={`http://localhost:3000/blog/${this.props.dataForSpecificalBlog.user._id}/${this.props.dataForSpecificalBlog._id}`}
                                        title={this.props.dataForSpecificalBlog.title}
                                        className = "sharing-icon"
                                    >
                                        <LinkedinIcon size={32} 
                                        round={true}
                                        />
                                    </LinkedinShareButton>
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="show-related-data">
                        {this.props.nextData &&
                            <div className="post__post grid-column-1">
                                <h2>Next Post</h2>
                                <Link to={`/blog/${this.props.nextData.user}/${this.props.nextData._id}`}>
                                    <div
                                        className="image-of-the-next-post"
                                        style={{ backgroundImage: `url(${this.props.nextData.featureImage})` }}>
                                        <h1>{this.props.nextData.title}</h1>
                                        <p><FontAwesomeIcon icon="long-arrow-alt-left" /></p>
                                    </div>
                                </Link>
                            </div>
                        }
                        {this.props.previousData &&
                            <div className="post__post grid-column-2">
                                <h2>Previous Post</h2>
                                <Link to={`/blog/${this.props.previousData.user}/${this.props.previousData._id}`}>
                                    <div
                                        className="image-of-the-next-post"
                                        style={{ backgroundImage: `url(${this.props.previousData.featureImage})` }}>
                                        <h1>{this.props.previousData.title}</h1>
                                        <p><FontAwesomeIcon icon="long-arrow-alt-right" /></p>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withBlog(DisplayEachBlog)