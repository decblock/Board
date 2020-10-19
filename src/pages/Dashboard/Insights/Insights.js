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
// RECHART IMPORTS
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

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
        keyinsights: {
            total_power_generation: 53897,
            co2_reduction: 25054,
            reduction_power_rate_previous_year: 52,
            power_surplus_2019: 3678,
            power_surplus_2020: 1754,
            emobility_user: 143317,
            renewable_enery_consuption: 1924,
            monthly: [25, 32, 37, 45, 54, 62, 75, 80, 85, 86, 87, 88]
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

    getMData = () => {
        let data;
        data = [
            {
                name: '1',
                power: this.state.keyinsights.monthly[0]
            },
            {
                name: '2',
                power: this.state.keyinsights.monthly[1]
            },
            {
                name: '3',
                power: this.state.keyinsights.monthly[2]
            },
            {
                name: '4',
                power: this.state.keyinsights.monthly[3]
            },
            {
                name: '5',
                power: this.state.keyinsights.monthly[4]
            },
            {
                name: '6',
                power: this.state.keyinsights.monthly[5]
            },
            {
                name: '7',
                power: this.state.keyinsights.monthly[6]
            },
            {
                name: '8',
                power: this.state.keyinsights.monthly[7]
            },
            {
                name: '9',
                power: this.state.keyinsights.monthly[8]
            },
            {
                name: '10',
                power: this.state.keyinsights.monthly[9]
            },
            {
                name: '11',
                power: this.state.keyinsights.monthly[10]
            },
            {
                name: '12',
                power: this.state.keyinsights.monthly[11]
            },
        ]
        return data;
    }

    render() {
        return (
            <div className="InsightsMain">
                <div className='map'>
                    <div className='keyInsights'>
                        <table>
                            <tr>
                                <th>Monthly surplus power reduction rate</th>
                            </tr>
                            <tr>
                                <td>
                                    <BarChart width={300} height={100} data={this.getMData()}
                                        margin={{ top: 5, right: 0, left: -35, bottom: -10 }}
                                        barSize={10} >
                                        <XAxis dataKey="name" stroke='grey' />
                                        <YAxis stroke='grey' />
                                        <Tooltip
                                            labelStyle={{ 'color': 'black' }}
                                            itemStyle={{ 'color': 'black' }}
                                            contentStyle={{ 'opacity': '0.8' }} />
                                        <Bar dataKey="power" fill="grey" animationDuration={1500} />
                                    </BarChart>
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Total Power generation: </th>
                                <td>{this.state.keyinsights.total_power_generation}</td>
                            </tr>
                            <tr>
                                <th>CO2 Reduction: </th>
                                <td>{this.state.keyinsights.co2_reduction}</td>
                            </tr>
                            <tr>
                                <th>Reduction rate from previous year: </th>
                                <td>{this.state.keyinsights.reduction_power_rate_previous_year}</td>
                            </tr>
                            <tr>
                                <th>2019 surplus: </th>
                                <td>{this.state.keyinsights.power_surplus_2019}</td>
                            </tr>
                            <tr>
                                <th>2020 surplus: </th>
                                <td>{this.state.keyinsights.power_surplus_2020}</td>
                            </tr>
                            <tr>
                                <th>E-Mobility Users: </th>
                                <td>{this.state.keyinsights.emobility_user}</td>
                            </tr>
                            <tr>
                                <th>Renewable Energy Consumption: </th>
                                <td>{this.state.keyinsights.renewable_enery_consuption}</td>
                            </tr>
                        </table>
                    </div>
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
                    <div className='legendMain'>
                        <table>
                            <tr>
                                <th colSpan='4'> <center>LEGEND</center></th>
                            </tr>
                            <tr>
                                <td>
                                    <img src={solar} height="50px"/>
                                </td>
                                <td>
                                    Solar Power Complex
                                </td>
                                <td>
                                    <img src={smarthub} height="50px"/>
                                </td>
                                <td>
                                    Smart Hub
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={wind} height="50px"/>
                                </td>
                                <td>
                                    Wind Farm
                                </td>
                                <td>
                                    <img src={smartshelter} height="50px"/>
                                </td>
                                <td>
                                    Smart Shelter
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={drt} height="50px"/>
                                </td>
                                <td>
                                    Demand Responsive <br/> Shuttle Bus
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Insights;