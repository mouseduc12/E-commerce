import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./ComponentStyles/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faShoppingCart, faTimes, faCircle, faHeart, faArrowRight, faArrowLeft, faTruck, faPlaneDeparture, faGift, faPhone, faLongArrowAltRight, faLongArrowAltLeft, faQuoteLeft, faMapMarkerAlt, faEnvelope, faArrowDown, faArrowUp, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ProductsProvider from "./Context/ProductsProvider";
import AuthContext from "./Context/AuthContext"
import { BrowserRouter } from "react-router-dom";
library.add(faArrowLeft, faTruck, faPlaneDeparture, faGift, faPhone, faLongArrowAltRight, faLongArrowAltLeft, faQuoteLeft, faMapMarkerAlt, faEnvelope, faArrowDown, faArrowUp, faUser, faSignOutAlt)
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
            <AuthContext>
                <App />
            </AuthContext>
        </ProductsProvider>
    </BrowserRouter>
    , document.getElementById("root"))