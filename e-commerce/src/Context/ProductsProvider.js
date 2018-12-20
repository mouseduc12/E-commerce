import React from "react"
import axios from "axios"

const ProductProviderContext = React.createContext()

class ProductsProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            plants: [],
            sculptures: [],
            lights: [],
            firePits: [],
            sortedPlant: "",
            sortedSculptures: "",
            sortedOutdoorLights: "",
            sortedFirePits: "",
            sortedData: ""
        }
    }
    handleChange = (e) =>{
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    getPlant = () => {
        axios.get("/plants").then(res => {
            this.setState(prevState => ({
                plants: res.data,
            })
            )
        })
    }
    getSculptures = () => {
        axios.get("/sculptures").then(res => {
            this.setState(prevState => ({
                sculptures: res.data,
            }))
        })
    }
    getOutDoorLights = () => {
        axios.get("/lights").then(res => {
            this.setState(prevState => ({
                lights: res.data,

            }))
        })
    }
    getFirePits = () => {
        axios.get("/firepits").then(res => {
            this.setState(prevState => ({
                firePits: res.data,

            }))
        })
    }

    render() {
        const data = [...this.state.plants, ...this.state.firePits, ...this.state.lights, ...this.state.sculptures]
        return (
            <ProductProviderContext.Provider
                value={{
                    ...this.state,
                    getPlant: this.getPlant,
                    getSculptures: this.getSculptures,
                    getFirePits: this.getFirePits,
                    getOutDoorLights: this.getOutDoorLights,
                    data: data,
                    handleChange: this.handleChange
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