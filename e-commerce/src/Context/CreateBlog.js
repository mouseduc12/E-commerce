import React from "react"
import axios from "axios"

// const articleAxios = axios.create()
// articleAxios.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token")
//     config.headers.Authorization = `Bearer ${token}`
//     return config
// })


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
            page: 0
        }
    }

    handleBlogChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    getBlogData = (value) => {
        axios.get(`/articles?page=${value}`).then(res =>{
            console.log(res);
            console.log(res.docs)
            this.setState({
                blogData: res.data.docs,
                page: res.data.pages
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
                blogData: [...prevState.blogData, res.data]
            }))
        })
    }
    render() {
        console.log(this.state.blogData)
        return (
            <BlogProviderContext.Provider value={{
                ...this.state,
                handleBlogChange: this.handleBlogChange,
                handleSubmitBlog: this.handleSubmitBlog,
                getBlogData: this.getBlogData
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