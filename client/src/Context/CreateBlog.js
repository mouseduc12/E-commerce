import React from "react"
import axios from "axios"

const BlogProviderContext = React.createContext()

class CreateBlog extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            firstContentImage: "",
            firstContent: "",
            secondImageContent: "",
            secondContent: "",
            featureImage: "",
            blogData: [],
            page: 0,
            active: 0,
            dataForSpecificalBlog: {},
            previousData: {},
            nextData: {},
            aboutAuthorData: [],
            postSuccessfully: false
        }
    }

    handleBlogChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSpecificalBlog = (value) => {
        axios.get(`/articles/${value}`).then(res => {
            this.setState({
                dataForSpecificalBlog: res.data
            })
            return axios.get(`/articles/${value}/next`)
        }).then(res => {
            this.setState({
                nextData: res.data
            })
            return axios.get(`/articles/${value}/previous`)
        }).then(res => {
            this.setState({
                previousData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }


    getBlogData = (value, e) => {
        axios.get(`/articles?page=${value}`).then(res => {
            this.setState({
                blogData: res.data.docs,
                page: res.data.pages,
                active: e ? e : 0
            })
        })
    }


    handleAuthorInfos = (userId) =>{
        axios.get(`/articles/${userId}`).then(res => {
            this.setState({
                aboutAuthorData: res.data
            })
        })
    }

    handleSubmitBlog = (e) => {
        const userId = JSON.parse(localStorage.getItem("user"))
        e.preventDefault()
        const postBlog = {
            title: this.state.title,
            firstContentImage: this.state.firstContentImage,
            firstContent: this.state.firstContent,
            secondImageContent: this.state.secondImageContent,
            secondContent: this.state.secondContent,
            featureImage: this.state.featureImage,
        }
        axios.post(`/articles/${userId._id}`, postBlog).then(res => {
            this.setState(prevState => ({
                // blogData: [...prevState.blogData, res.data]
            }))
        })
    }
    render() {
        return (
            <BlogProviderContext.Provider value={{
                ...this.state,
                handleBlogChange: this.handleBlogChange,
                handleSubmitBlog: this.handleSubmitBlog,
                getBlogData: this.getBlogData,
                handleSpecificalBlog: this.handleSpecificalBlog,
                handleAuthorInfos: this.handleAuthorInfos
            }}>
                {this.props.children}
            </BlogProviderContext.Provider>
        )
    }
}


export default CreateBlog

export const withBlog = (C) => props => (
    <BlogProviderContext.Consumer>
        {
            value => (<C {...props} {...value} />)
        }
    </BlogProviderContext.Consumer>
)