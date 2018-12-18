import React from "react"
import "../ComponentStyles/GoogleMap.css"
import GoogleMapReact from 'google-map-react';
import GoogleMark from "./GoogleMark";
import LazyLoad from "react-lazyload"

class GoogleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 38.81350339999999,
            lng: -104.8379567
        },
        zoom: 17
    };

    render() {
        return (
            <LazyLoad once height={500}>
                <div className="map">
                    <div className="google-map-container">
                        <GoogleMapReact
                            className="google-map"
                            bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE}` }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}>
                            <GoogleMark
                                lat={38.81350339999999}
                                lng={-104.8379567} />
                        </GoogleMapReact>
                    </div>
                    <div className="operation-city">
                        <h2>Where are we operating?</h2>
                        <p>9330 W. Hilltop Avenue
                    Colorado Springs, CO 80911</p>
                        <div className="operation-hours">
                            <p>Monday - Wednesday: 10am-8pm</p>
                            <p>Thursday - Friday: 10am-5pm</p>
                            <p>Saturday - Sunday: 11am - 3pm</p>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        )
    }
}
export default GoogleMap