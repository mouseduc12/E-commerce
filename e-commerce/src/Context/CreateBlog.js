import React from "react"

const BlogProviderContext = React.createContext()

class CreateBlog extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <BlogProviderContext.Provider value ={{

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
            value => (<C {...props} {...value}/>)
        }
    </BlogProviderContext.Consumer>
)