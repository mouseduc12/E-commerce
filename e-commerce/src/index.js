import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./ComponentStyles/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch,faShoppingCart, faTimes, faCircle, faHeart, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'
// import { BrowserRouter } from "react-router-dom";
library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faHeart)
library.add(fab)
library.add(faSearch)
library.add(faShoppingCart)
library.add(faBars)
library.add(faTimes)
library.add(faCircle)
ReactDOM.render(

    <App />
    , document.getElementById("root"))