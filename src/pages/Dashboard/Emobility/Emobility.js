// EMOBILITY

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Emobility.css';
// RECHART IMPORTS
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
// AXIOS IMPORTS
import axios from 'axios';

const COLORS = ['white', 'grey']

class Emobility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cumulative_ride: 0,
            electric_vehical_shared: 0,
            parking_are_reduction: 0,
            renewable_energy_consumption: 0,
            traffic_sharing_rate: 0,
            greego: 0,
            drt: 0,
            twizy: 0,
            un1: 0,
            un2: 0,
            un3: 0
        }
    }

    async componentDidMount() {
        await axios.get('/emobility/')
            .then((res) => {
                this.setState({
                    ...res.data
                })
            })
            .catch((err) => {

            })
    }

    getTSData = () => {
        let temp = 100 - this.state.traffic_sharing_rate
        let data = [
            {
                name: 'E-Mobility',
                value: this.state.traffic_sharing_rate
            },
            {
                name: 'Total Traffic',
                value: temp
            },
        ]
        return data;
    }

    getMData = () => {
        let data = [
            {
                name: 'Twizy',
                members: this.state.twizy
            },
            {
                name: 'Greego',
                members: this.state.greego
            },
            {
                name: 'DRT',
                members: this.state.drt
            },
            {
                name: 'Macaron',
                members: this.state.un1
            },
            {
                name: 'EVPass',
                members: this.state.un2
            },
            {
                name: 'Green Car',
                members: this.state.un3
            },
        ]
        return data;
    }


    render() {
        return (
            <div className="emobMain">
                <center>
                    <h1>
                        E-Mobility Dashboard
                    </h1>
                </center>
                <table className='chartTable'>
                    <tr>
                        <th>
                            Toll Share Rate
                        </th>
                        <th>
                            Weekly Power Generation (kwh)
                        </th>
                        <th>
                            Other Details
                        </th>
                    </tr>
                    <tr>
                        <td rowSpan='9'>
                            <PieChart width={200} height={250} onMouseEnter={this.onPieEnter}>
                                <Pie
                                    data={this.getTSData()}
                                    cx={100}
                                    cy={100}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                >
                                    {
                                        this.getTSData().map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <text x={100} y={100} dy={10} textAnchor="middle" fill='white'>{this.state.traffic_sharing_rate}%</text>
                                <Legend />
                            </PieChart>
                        </td>
                        <td rowSpan='9'>
                            <BarChart width={500} height={300} data={this.getMData()}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={10}
                                style={{ 'fontSize': '10px' }}>
                                <XAxis dataKey="name" stroke='white' />
                                <YAxis stroke='white' />
                                <Tooltip
                                    labelStyle={{ 'color': 'black' }}
                                    itemStyle={{ 'color': 'black' }}
                                    contentStyle={{ 'opacity': '0.8' }} />
                                <Bar dataKey="members" fill="white" animationDuration={1500} />
                            </BarChart>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Cummulative Number of Rides
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.cumulative_ride}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            EV Shared Number
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.electric_vehical_shared}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Parking Area Reduction
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.parking_are_reduction}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Renewable Energy Consumption
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.renewable_energy_consumption}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default Emobility;