import React from "react"
import axios from "axios"

const ProductProviderContext = React.createContext()

class ProductsProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            plants: [],
            sculptures: []
        }
    }

    getPlant = () => {
        axios.get("/plants").then(res => {
            this.setState({
                plants: res.data
            })
        })
    }
    getSculptures = () => {
        axios.get("/sculptures").then(res => {
            this.setState({
                sculptures: res.data
            })
        })
    }

    render() {
        return (
            <ProductProviderContext.Provider
                value={{
                    ...this.state,
                    getPlant: this.getPlant,
                    getSculptures: this.getSculptures
                }}>
                {this.props.children}
            </ProductProviderContext.Provider>
        )
    }
}

export const withProduct = (C) => props =>
    (
        <ProductProviderContext.Consumer>
            {
                value => <C {...value} {...props} />
            }
        </ProductProviderContext.Consumer>
    )

export default ProductsProvider