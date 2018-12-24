import React from "react"

const EachBlog = (props) => {
    console.log(props)
    const generateAuthoImage = () =>{
        if(props.slot === 0){
            return "new-author-post"
        }
        else{
            return "old-author-post"
        }
    }
    return(
        <div>
            <div className = {generateAuthoImage()}>
                <div style = {{backgroundImage: `url(${props.featureImage})`}} className = "feature-author-image"></div>
                <h1>{props.title}</h1>
                <p>{props.firstContent}</p>
            </div>
        </div>
    )
}

export default EachBlog