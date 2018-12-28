import React from "react"
import { withProduct } from "../../Context/ProductsProvider"

class Item extends React.Component {
    constructor(){
        super()
        this.dataOfProduct = undefined
    }
    componentDidMount(){
      this.props.getCollectionData()
    }

    componentWillReceiveProps(nextProps){
       this.dataOfProduct = nextProps.dataCollection.filter(each => each.products._id === this.props.match.params.id) 
    }

    render() {
        console.log(this.props)
        console.log(this.dataOfProduct)
        return (
            <div>
                <h1>Hello There Welcome to the Item</h1>
            </div>
        )
    }
}

export default withProduct(Item);