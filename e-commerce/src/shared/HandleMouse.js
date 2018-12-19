import React from "react"

class HandleMouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mouseEnter: false,
            mouseLeave: true,
            slideOver: 0,
            getIcon: false
        }
        this.intervalId = undefined
    }

    handleOver = () => {
        this.intervalId = setInterval(
            () => {
                if (this.state.slideOver >= this.props.otherImages.length - 1) {
                    this.setState({
                        slideOver: 0
                    })
                }
                else {
                    this.setState(prevState => ({
                        slideOver: prevState.slideOver + 1,
                        mouseEnter: true,
                        mouseLeave: false
                    }))
                }
            }, 2000)
    }

    handleLeave = () => {
        clearInterval(this.intervalId)
        this.setState({
            mouseLeave: true,
            mouseEnter: false
        })
    }

    handleIcon = () => {
        this.setState({
            getIcon: true
        })
    }
    handleIconLeave = () => {
        this.setState({
            getIcon: false
        })
    }
    render() {
        return (
            this.props.render({
                handleIconLeave: this.handleIconLeave,
                handleIcon: this.handleIcon,
                handleOver: this.handleOver,
                handleLeave: this.handleLeave,
                ...this.state
            })
        )
    }
}

export default HandleMouse