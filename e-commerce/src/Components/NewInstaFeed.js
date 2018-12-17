import React from "react"
import InstaFeed from "react-instafeed"
import "../ComponentStyles/NewInstaFeed.css"


class NewInstaFeed extends React.Component {
    constructor(){
        super()
        this.state = {
            isHovered: false
        }
        this.myRef = React.createRef()
    }
    componentDidMount(){
        console.log(this.myRef.current)
        console.log(this.myRef.onClick)
    }

    onMouseOver = () =>{
        console.log("true")
        this.setState({
            isHovered: true
        })
    }
    handleClick = () =>{
        console.log("I just clicked")
    }

    render() {
        const display = 
            `<div class ="image_general">
                <a href='{{link}}' target='_blank' class='instafeed__item'>
                <div class='instafeed__item__background' style="background-image: url('{{image}}')">
                    <div class='nothing'>
                        <p class='instafeed__item__caption'>{{model.short_caption}}</p>
                        <p class='instafeed__item__location'>{{location}}</p>
                        <p class='instafeed__item__location'>{{likes}}</p>
                    </div>
                </div>
                </a>
            </div>`
        const instafeedTarget = 'instafeed';
        return (
               <div id={instafeedTarget} className = "new-insta">
                <InstaFeed
                    onClick = {this.handleClick}
                    onMouseOver = {this.onMouseOver}
                    limit= '5'
                    ref = {this.myRef}
                    resolution='standard_resolution'
                    sortBy='most-recent'
                    target={instafeedTarget}
                    template = {display}
                    userId={`${process.env.REACT_APP_USERID}`}
                    clientId={`${process.env.REACT_APP_INSTASECRET}`}
                    accessToken={`${process.env.REACT_APP_ACCESSTOKEN}`}
                />
            </div> 
        )
    }
}

export default NewInstaFeed
 