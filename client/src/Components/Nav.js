import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../ComponentStyles/Nav.css"
import { Link } from "react-router-dom"
import { withAuth } from "../Context/AuthContext";
import { withProduct } from "../Context/ProductsProvider"
import { withRouter } from "react-router-dom";
import { withWishList } from "../Context/WishListProvider"
import axios from "axios"


class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            isScroll: false,
            openNav: true,
            openShop: false,
            checkLogOut: false,
            articleData: [],
            productData: [],
            search: "",
            isSearching: false,
            output: [],
            articleOutput: [],
            innerWidth: window.innerWidth,
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        window.addEventListener("resize", this.checkInnerWidth)
        this.props.getAllWishList(this.props.user._id)
        this.props.handleNotNotifyingWish(this.props.user._id)
        axios.get("/articles/all").then(res => {
            this.setState({
                articleData: res.data
            })
            return axios.get("/productCollections")
        }).then(res => {
            this.setState({
                productData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
        window.removeEventListener("resize", this.checkInnerWidth)
    }

    checkInnerWidth = () => {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    handleSearchBar = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        }, () => {
            if (this.state.search === "" && this.state.isSearching) {
                this.setState({
                    isSearching: false
                })
            } else if (this.state.search.length >= 0) {
                this.setState({
                    isSearching: true
                })
                this.handleFilter(this.state.search.toLowerCase())
            }
        })
    }

    handleFilter = (value) => {
        let output = this.state.productData.filter(each => each.products.headline.toLowerCase().indexOf(value) > -1)
        let articleOutput = this.state.articleData.filter(each => each.title.toLowerCase().indexOf(value) > -1)

        this.setState({
            output,
            articleOutput
        })
    }

    handleScroll = () => {
        if (window.scrollY > 100 && !this.state.isScroll) {
            this.setState({
                isScroll: true,
                openNav: false
            })
        }
        else if (window.scrollY < 30 && this.state.isScroll) {
            this.setState({
                isScroll: false,
                openNav: true
            })
        }
    }

    checkNav = () => {
        this.setState(prevState => {
            return {
                openNav: !prevState.openNav
            }
        })
    }

    handleOnMouseOver = () => {
        this.setState({
            openShop: true
        })
    }

    handleReset = () => {
        this.setState({
            search: "",
            isSearching: false
        })
    }


    handleOnMouseLeave = () => {
        this.setState({
            openShop: false
        })
    }

    handleCheckLogOut = () => {
        this.setState(prevState => ({
            checkLogOut: !prevState.checkLogOut
        }))
    }

    render() {
        return (
            <div style={{ position: this.state.isScroll ? "fixed" : "", gridTemplateRows: this.state.openNav ? "1fr 60px" : "1fr 30px" }} className="nav">
                <div className="first-nav-row">
                    <div className="brand">
                        <div className="bars">
                            {this.state.isScroll &&
                                this.state.openNav === false ?
                                <button onClick={this.checkNav}><FontAwesomeIcon icon="bars" className="icon" /></button>
                                : <button onClick={this.checkNav} style={{ display: window.scrollY < 100 && "none" }}><FontAwesomeIcon icon="times" className="icon" /></button>
                            }
                        </div>
                        <h1><Link to="/" style={{ color: "yellow" }}>DECOR<i>'s</i></Link></h1>
                    </div>
                    <form className="search-shop">
                        <div
                            className="search-shop-div"
                            style={{
                                marginTop: this.state.isSearching && 20,
                                borderBottom: this.state.isSearching && "1px solid black"
                            }}>
                            <input
                                type="text"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleSearchBar}
                                style={{
                                    borderBottomLeftRadius: this.state.isSearching && 0,
                                }} />
                            <button style={{ borderBottomRightRadius: this.state.isSearching && 0, }}><FontAwesomeIcon icon="search" /></button>
                        </div>
                        {this.state.isSearching &&
                            <div className="search-blog-item-container">
                                <div className="searh-items-container">
                                    {this.state.output.length >= 1 ?
                                        this.state.output.slice().splice(0, 5).map(each => {
                                            return (
                                                <Link to={`/item/${each.products._id}`} onClick={this.handleReset}>
                                                    <div className="search-items-small-container">
                                                        <div
                                                            className="search-item-image"
                                                            style={{ backgroundImage: `url(${each.products.image})` }}>
                                                        </div>
                                                        <div className="search-item-infos">
                                                            <h3>{each.products.headline}</h3>
                                                            <p>{each.products.price}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                        :
                                        <div>
                                            <h4 style={{ color: "black", textAlign: "center" }}>No Results Found</h4>
                                        </div>
                                    }
                                </div>

                                <div className="search-article-container">
                                    <h3>Blogs:</h3>
                                    {this.state.articleOutput.length >= 1 ?
                                        this.state.articleOutput.map(each => {
                                            return (
                                                <Link to={`/blog/${each.user}/${each._id}`} onClick={this.handleReset}>
                                                    <p>{each.title}</p>
                                                </Link>
                                            )
                                        })
                                        :
                                        <div>
                                            <h4>No results found</h4>
                                        </div>}
                                </div>
                            </div>
                        }
                    </form>
                    <div className="cart">
                        <Link to="/wishlist">
                            <button>
                                <FontAwesomeIcon icon="heart" className={this.props.wishList.length >= 1 ? "active-heart" : ""} />
                                {this.props.wishList.length >= 1 && <FontAwesomeIcon icon="exclamation" className="exclamation-mark" />}
                            </button>
                        </Link>
                        <Link to="/mycart">
                            {typeof this.props.totalQuantity === "object" ?
                                <button>
                                    <FontAwesomeIcon icon="shopping-cart" style={{ color: this.props.totalQuantity.quantity && this.props.totalQuantity.quantity ? "darkCyan" : "white" }} />
                                    {this.props.totalQuantity.quantity > 0 && <p className={`${this.props.totalQuantity.quantity && "total-quantity"}`}> {this.props.totalQuantity.quantity}</p>}
                                </button>
                                :
                                <button>
                                    <FontAwesomeIcon icon="shopping-cart" style={{ color: this.props.totalQuantity && this.props.totalQuantity ? "darkCyan" : "white" }} />
                                    {this.props.totalQuantity > 0 && <p className={`${this.props.totalQuantity && "total-quantity"}`}> {this.props.totalQuantity}</p>}
                                </button>
                            }
                        </Link>
                    </div>
                </div>
                {this.state.openNav &&
                    <ul className="second-nav-row">
                        <li onMouseOver={this.handleOnMouseOver}><Link to="/shop">Shop <FontAwesomeIcon className="nav-arrows" icon={!this.state.openShop ? "arrow-down" : "arrow-up"} /></Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {this.props.user.email ?
                            <Link to="/user">
                                <li className="userName-logged-in">
                                    <FontAwesomeIcon icon="user" />
                                    <p>{this.props.user.firstName}</p>
                                </li>
                            </Link>
                            :
                            <li><Link to="/login">Login</Link></li>
                        }
                    </ul>
                }
                {this.state.openShop &&
                    <div className="department-container" onMouseLeave={this.handleOnMouseLeave}>
                        <ul className="department">
                            <li><Link to="/shop/sculptures">Sculptures</Link></li>
                            <li><Link to="/shop/plants">Plants</Link></li>
                            <li><Link to="/shop/lights">Outdoor Lights</Link></li>
                            <li><Link to="/shop/fire-pits">Fire Pits</Link></li>
                        </ul>
                    </div>
                }
                {this.props.isNotifying &&
                    <div className="add-to-cart-container">
                        <p className="check-item-container"><FontAwesomeIcon icon="check" className="check-item" /></p>
                        <h3>Add to cart successfully</h3>
                    </div>
                }
                {this.props.isNotifyingWishList &&
                    <div className="add-to-cart-container">
                        <p className="check-item-container"><FontAwesomeIcon icon="check" className="check-item" /></p>
                        <h3>Add to wish list successfully</h3>
                    </div>
                }
            </div>
        )
    }
}
export default withRouter(withWishList(withAuth(withProduct(Nav))))