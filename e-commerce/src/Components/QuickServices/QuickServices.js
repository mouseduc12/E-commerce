import React, { Fragment } from "react"
import Privacy from "./Privacy"
import Return from "./Return"
import Shipping from "./Shipping"
import Faq from "./Faq"
import "../../ComponentStyles/QuickServices.css"

class QuickServices extends React.Component {
    constructor() {
        super()
        this.state = {
            notFound: false,
            faq: false,
            return: false,
            shipping: false,
            privacy: false
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.match.params.name === "faq" || nextProps.match.params.name === "return" || nextProps.match.params.name === "shipping" || nextProps.match.params.name === "privacy") {
            this.setState({
                notFound: false,
            })
            nextProps.match.params.name === "faq" ? this.setState({ faq: true }) : this.setState({ faq: false })
            nextProps.match.params.name === "return" ? this.setState({ return: true }) : this.setState({ return: false })
            nextProps.match.params.name === "shipping" ? this.setState({ shipping: true }) : this.setState({ shipping: false })
            nextProps.match.params.name === "privacy" ? this.setState({ privacy: true }) : this.setState({ privacy: false })
        } else {
            this.setState({
                notFound: true
            })
        }
    }
    componentDidMount() {
        if (this.props.match.params.name === "faq" || this.props.match.params.name === "return" || this.props.match.params.name === "shipping" || this.props.match.params.name === "privacy") {
            this.setState({
                notFound: false
            })
            this.props.match.params.name === "faq" ? this.setState({ faq: true }) : this.setState({ faq: false })
            this.props.match.params.name === "return" ? this.setState({ return: true }) : this.setState({ return: false })
            this.props.match.params.name === "shipping" ? this.setState({ shipping: true }) : this.setState({ shipping: false })
            this.props.match.params.name === "privacy" ? this.setState({ privacy: true }) : this.setState({ privacy: false })
        } else {
            this.setState({
                notFound: true
            })
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.notFound ?
                    <h1>404 NOT FOUND!!</h1>
                    :
                    <div>
                        {
                            this.state.faq && <Faq />
                        }
                        {
                            this.state.return && <Return />
                        }
                        {
                            this.state.shipping && <Shipping />
                        }
                        {
                            this.state.privacy && <Privacy />
                        }
                    </div>
                }
            </Fragment>
        )
    }
}

export default QuickServices