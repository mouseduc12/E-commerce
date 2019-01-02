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
            sortedPlants: "",
            sortedSculptures: "",
            sortedOutdoorLights: "",
            sortedFirePits: "",
            sortedData: "",
            dataCollection: [],
            allProductPage: "",
            activeNumber: 1,
            randomData: [],
            dataOfProduct: [],
            newRandon: [],
            cartData: JSON.parse(localStorage.getItem("myCart")) || [],
            totalPriceOfProducts: JSON.parse(localStorage.getItem("totalPrice")) || 0,
            totalQuantity: JSON.parse(localStorage.getItem("quantity")) || 0
        };
        this.newRandom = [];
        this.cartRemoveDuplicateData = []
    }
    handleChange = (e) => {
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
                firePits: res.data.docs,
            }))
        })
    }

    getCollectionData = (e) => {
        axios.get(`/productCollections/pag?page=${e}`).then(res => {
            this.setState({
                dataCollection: res.data.docs,
                allProductPage: res.data.pages,
                activeNumber: e
            })
        })
    }

    handleNoUserCart = (id) => {
        let newData = this.state.dataCollection.find(each => each._id === id)
        if (newData.quantity) {
            console.log("Already existed!")
        } else {
            newData.quantity = 1;
            newData.total = parseFloat(newData.products.price.slice(1))
        }

        if (this.state.cartData.some(each => each._id === newData._id)) {
            this.setState(prevState => ({
                cartData: this.state.cartData.map(each => each._id === newData._id ? { ...each, quantity: each.quantity + 1, total: each.products.price.charAt(0) === "$" ? parseFloat(each.products.price.slice(1)) + parseFloat(each.products.price.slice(1)) * each.quantity : parseFloat(each.products.price.slice(0)) + parseFloat(each.products.price.slice(0)) * each.quantity } : each)
            }), () => {
                let totalPriceOfProducts = this.state.cartData.reduce((accumulator, currentIndex) => {
                    return {total: parseFloat(accumulator.total) + parseFloat(currentIndex.total)}
                },{total: 0})
                let totalQuantity = this.state.cartData.reduce((accumulator, currentValue) => {
                    return {quantity: parseInt(accumulator.quantity) + parseInt(currentValue.quantity)}
                }, {quantity: 0})

                this.setState({
                    totalPriceOfProducts,
                    totalQuantity
                }, () => {
                    localStorage.setItem("quantity", JSON.stringify(this.state.totalQuantity))
                    localStorage.setItem("totalPrice", JSON.stringify(this.state.totalPriceOfProducts))
                    localStorage.setItem("myCart", JSON.stringify(this.state.cartData))
                })
            })
        }
        else {
            this.setState(prevState => ({
                cartData: [...prevState.cartData, newData]
            }), () => {
                let totalPriceOfProducts = this.state.cartData.reduce((accumulator, currentIndex) => {
                    return {total: parseFloat(accumulator.total) + parseFloat(currentIndex.total)}
                }, {total: 0})
                let totalQuantity = this.state.cartData.reduce((accumulator, currentValue) => {
                    return {quantity: parseInt(accumulator.quantity) + parseInt(currentValue.quantity)
                }
                }, {quantity: 0})
            this.setState({
                totalPriceOfProducts,
                totalQuantity
            }, () => {
                localStorage.setItem("quantity", JSON.stringify(this.state.totalQuantity))
                localStorage.setItem("totalPrice", JSON.stringify(this.state.totalPriceOfProducts))
                localStorage.setItem("myCart", JSON.stringify(this.state.cartData))
            })
        })
    }
}

getAllCollectionData = (id) => {
    axios.get("/productCollections").then(res => {
        this.setState({
            dataCollection: res.data
        }, () => this.setState({
            dataOfProduct: this.state.dataCollection.filter(each => each.products._id === id),
            randomData: this.state.dataCollection.filter(each => each.products._id !== id)
        }, () => {
            for (let i = 0; i < 4; i++) {
                let randomNumber = Math.floor(Math.random() * this.state.randomData.length)
                this.newRandom.push(...this.state.randomData.splice([randomNumber], 1))
            }
            this.setState({
                newRandom: this.newRandom
            }, () => {
                this.newRandom = []
            })
        }))
    }).catch(err => {
        console.log(err)
    })
}



render() {
    console.log(this.state.totalQuantity)
    console.log(this.state.cartData)
    console.log(this.state.totalPriceOfProducts)
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
                handleChange: this.handleChange,
                getCollectionData: this.getCollectionData,
                getAllCollectionData: this.getAllCollectionData,
                getRandomCollection: this.getRandomCollection,
                handleNoUserCart: this.handleNoUserCart
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
