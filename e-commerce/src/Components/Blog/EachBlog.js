import React from "react"

const EachBlog = (props) => {
    console.log(props)
    return(
        <div>
            <div>
                <div style = {{backgroundImage: `url(${props.image})`}}></div>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default EachBlog