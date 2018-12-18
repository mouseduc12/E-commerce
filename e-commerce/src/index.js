import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./ComponentStyles/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faShoppingCart, faTimes, faCircle, faHeart, faArrowRight, faArrowLeft, faTruck, faPlaneDeparture, faGift, faPhone, faLongArrowAltRight, faLongArrowAltLeft, faQuoteLeft, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ProductsProvider from "./Context/ProductsProvider"
import { BrowserRouter } from "react-router-dom";
library.add(faArrowLeft, faTruck, faPlaneDeparture, faGift, faPhone, faLongArrowAltRight, faLongArrowAltLeft, faQuoteLeft, faMapMarkerAlt, faEnvelope)
library.add(faArrowRight)
library.add(faHeart)
library.add(fab)
library.add(faSearch)
library.add(faShoppingCart)
library.add(faBars)
library.add(faTimes)
library.add(faCircle)

ReactDOM.render(
    <BrowserRouter>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </BrowserRouter>
    , document.getElementById("root"))