// INSIGHTS

// REACT IMPORTS
import React, { Component } from 'react';
// MAPBOX IMPORTS
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// STYLESHEET
import './Insights.css'
// IMAGE IMPORTS
import solar from '../../../assets/images/map/solar.png'
import wind from '../../../assets/images/map/wind.png'
import smarthub from '../../../assets/images/map/smart_hub.png'
import smartshelter from '../../../assets/images/map/smart_shelter.png'
import windsolar from '../../../assets/images/map/wind_solar.png'
import drt from '../../../assets/images/map/drt.png'

const icons = {
    'solar': solar,
    'wind': wind,
    'smart_hub': smarthub,
    'smart_shelter': smartshelter,
    'wind_solar': windsolar,
    'drt': drt
}

class Insights extends Component {

    state = {
        hoveritem: null,
        viewport: {
            width: '80vw',
            height: '80vh',
            latitude: 33.379657,
            longitude: 126.549879,
            zoom: 10
        },
        data: [
            {
                title: 'Smart Hub GS Jungmun Intersection',
                type: 'smart_hub',
                lat: 33.251292,
                lng: 126.431457,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
            {
                title: 'Sinchang Wind Power Complex',
                type: 'wind',
                lat: 33.343849,
                lng: 126.185533,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
            {
                title: 'Smart Hub GS Seogwi Terminal',
                type: 'smart_hub',
                lat: 33.254219,
                lng: 126.560119,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
            {
                title: 'Gashiri wind power and Gyotaeri solar power generation complex',
                type: 'wind_solar',
                lat: 33.421396,
                lng: 126.685626,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
            {
                title: 'Haengwon wind and solar power generation complex',
                type: 'wind_solar',
                lat: 33.529681,
                lng: 126.789599,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
            {
                title: 'Renewable Energy Promotion Center Smart Shelter',
                type: 'smart_shelter',
                lat: 33.465554,
                lng: 126.933859,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
            {
                title: 'Solar power generation complex utilizing public facilities',
                type: 'solar',
                lat: 33.447039,
                lng: 126.508976,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
            {
                title: 'Demand Response Shuttle Bus (DRT)',
                type: 'drt',
                lat: 33.408321,
                lng: 126.266246,
                details: ['Detail-1', 'Detail-2', 'Detail-3']
            },
        ]
    };

    render() {
        return (
            <div className="InsightsMain">
                <div className='map'>
                    <ReactMapGL
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                        mapStyle="mapbox://styles/akashsingh3/ckgg9xwo0e3hu1as44hohx983"
                        {...this.state.viewport}
                        onViewportChange={(viewport) => this.setState({ viewport })}
                    >
                        {/* MARKERS */}
                        {this.state.data.map((item) => {
                            return (
                                <div>
                                    <Marker
                                        latitude={item.lat}
                                        longitude={item.lng}>
                                        <img
                                            src={icons[item.type]}
                                            onMouseOver={() => { this.setState({ hoveritem: item }) }}
                                            onMouseLeave={() => { this.setState({ hover: false }) }} />
                                    </Marker>
                                </div>
                            );
                        })}

                        {this.state.hoveritem
                            ? <Popup
                                className='popup'
                                closeButton={false}
                                offsetLeft={60}
                                latitude={this.state.hoveritem.lat}
                                longitude={this.state.hoveritem.lng}>
                                <div className='popupMain'>
                                    <div className='title'>
                                        {this.state.hoveritem.title}
                                    </div>
                                    <div className='details'>
                                        <ul>
                                            {this.state.hoveritem.details.map((detail) => {
                                                return (
                                                    <li>
                                                        {detail}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </Popup>
                            : null}
                        {/* POPUP BOXES */}
                        {/* {this.state.data.map((item) => {
                            return (
                                <Popup
                                    className='popup'
                                    closeButton={false}
                                    offsetLeft={60}
                                    latitude={item.lat}
                                    longitude={item.lng}>
                                    <div className='popupMain'>
                                        <div className='title'>
                                            {item.title}
                                        </div>
                                        <div className='details'>
                                            <ul>
                                                {item.details.map((detail) => {
                                                    return (
                                                        <li>
                                                            {detail}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Popup>
                            );
                        })} */}
                    </ReactMapGL>
                </div>
            </div>
        );
    }
}

export default Insights;