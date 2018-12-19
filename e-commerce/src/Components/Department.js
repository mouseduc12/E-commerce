import React from "react"

class Department extends React.Component {
    componentDidMount(){
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
export default Department