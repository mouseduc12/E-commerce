import React from "react"
import "../../ComponentStyles/DisplayEachBlog.css"
import { withBlog } from "../../Context/CreateBlog"

class DisplayEachBlog extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.handleSpecificalBlog(this.props.match.params.userId + "/" + this.props.match.params.id)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="feature-image-of-one-blog" style={{ backgroundImage: `url(${this.props.dataForSpecificalBlog.featureImage})` }}>
                </div>
                <div className="blog-contents-container">
                    <div className="blog-contents-small-container">
                        <div className="title-of-blog">
                            <h2>{this.props.dataForSpecificalBlog.title}</h2>
                        </div>
                        <div className= "contents-of-blog" >
                            {
                                this.props.dataForSpecificalBlog.firstContentImage &&
                                <div className="content-images" style={{ backgroundImage: `url(${this.props.dataForSpecificalBlog.firstContentImage})` }} >
                                </div>
                            }
                            <p>{this.props.dataForSpecificalBlog.firstContent}</p>
                        </div>
                        <div className = "contents-of-blog">
                            {
                                this.props.dataForSpecificalBlog.secondImageContent &&
                                <div className="content-images" style={{ backgroundImage: `url(${this.props.dataForSpecificalBlog.secondImageContent})` }}></div>
                            }
                            <p>{this.props.dataForSpecificalBlog.secondContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withBlog(DisplayEachBlog)