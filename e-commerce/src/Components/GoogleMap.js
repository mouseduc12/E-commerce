import React from "react"
import GoogleMapReact from 'google-map-react';
import GoogleMark from "./GoogleMark"

const GoogleMap = () => {
    return (
        <div className="map">
            <div style={{ height: '40vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE}` }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    <GoogleMark
                        lat={40.6447239}
                        lng={-73.7283829} />
                </GoogleMapReact>
            </div>
            <div className="operation-hours">
                <h1>12 hours a day</h1>
                <p>9330 W. Hilltop Avenue
                    Colorado Springs, CO 80911</p>
            </div>
        </div>
    )
}

export default GoogleMap