// Renewable

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Renewable.css'
// RECHART IMPORTS
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const COLORS = ['grey', 'white']

class Renewable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cumulative_power_generation: 21587,
            facility_capacity: 18.57,
            co2_reduction: 10587,
            drinking_water_effect: 1610587,
            current_output: 15.57,
            weekly_power_generation: {
                1: 270,
                2: 240,
                3: 245,
                4: 255,
                5: 260,
                6: 265,
                7: 150
            },
            monthly_power_generation: {
                1: 4158978,
                2: 4452549,
                3: 5092485,
                4: 5324586,
                5: 6029583,
                6: 6585995,
                7: 7053417,
                8: 7565421,
                9: 6835835,
                10: 5953224,
                11: 5023148,
                12: 4268755
            }

        }
    }

    getCOData = () => {
        let temp = this.state.facility_capacity - this.state.current_output
        let data = [
            {
                name: 'Facility Capacity',
                value: temp
            },
            {
                name: 'Current Output',
                value: this.state.current_output
            },
        ]
        return data;
    }

    getWPGData = () => {
        let data = [
            {
                name: '1',
                power: this.state.weekly_power_generation[1]
            },
            {
                name: '2',
                power: this.state.weekly_power_generation[2]
            },
            {
                name: '3',
                power: this.state.weekly_power_generation[3]
            },
            {
                name: '4',
                power: this.state.weekly_power_generation[4]
            },
            {
                name: '5',
                power: this.state.weekly_power_generation[5]
            },
            {
                name: '6',
                power: this.state.weekly_power_generation[6]
            },
            {
                name: '7',
                power: this.state.weekly_power_generation[7]
            },
        ]
        return data;
    }


    getMPGData = () => {
        let data = [
            {
                name: '1',
                power: this.state.monthly_power_generation[1]
            },
            {
                name: '2',
                power: this.state.monthly_power_generation[2]
            },
            {
                name: '3',
                power: this.state.monthly_power_generation[3]
            },
            {
                name: '4',
                power: this.state.monthly_power_generation[4]
            },
            {
                name: '5',
                power: this.state.monthly_power_generation[5]
            },
            {
                name: '6',
                power: this.state.monthly_power_generation[6]
            },
            {
                name: '7',
                power: this.state.monthly_power_generation[7]
            },
            {
                name: '8',
                power: this.state.monthly_power_generation[8]
            },
            {
                name: '9',
                power: this.state.monthly_power_generation[9]
            },
            {
                name: '10',
                power: this.state.monthly_power_generation[10]
            },
            {
                name: '11',
                power: this.state.monthly_power_generation[11]
            },
            {
                name: '12',
                power: this.state.monthly_power_generation[12]
            },
        ]
        return data;
    }

    render() {
        return (
            <div className="renewableMain">
                <center>
                    <h1>
                        Renewable Energy Dashboard
                    </h1>
                </center>
                <table className='detailsTable'>
                    <tr>
                        <th>
                            Cumulative Power <br /> generation
                        </th>
                        <th>
                            Facility Capacity
                        </th>
                        <th>
                            CO2 Reduction
                        </th>
                        <th>
                            Drinking Water Effect
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.cumulative_power_generation} MWh
                        </td>
                        <td>
                            {this.state.facility_capacity} MW
                        </td>
                        <td>
                            {this.state.co2_reduction} tCO2
                        </td>
                        <td>
                            {this.state.drinking_water_effect} trees
                        </td>
                    </tr>
                </table>
                <table className='chartTable'>
                    <tr>
                        <th>
                            Current Output (MW)
                        </th>
                        <th>
                            Weekly Power Generation (kwh)
                        </th>
                        <th>
                            Monthly Power generation (kwh)
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <PieChart width={200} height={250} onMouseEnter={this.onPieEnter}>
                                <Pie
                                    data={this.getCOData()}
                                    cx={100}
                                    cy={100}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                >
                                    {
                                        this.getCOData().map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <text x={100} y={100} dy={10} textAnchor="middle" fill='white'>{this.state.current_output}</text>
                                <Legend />
                            </PieChart>
                        </td>
                        <td>
                            <BarChart width={400} height={300} data={this.getWPGData()}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={10} >
                                <XAxis dataKey="name" stroke='white' />
                                <YAxis stroke='white' />
                                <Tooltip
                                    labelStyle={{ 'color': 'black' }}
                                    itemStyle={{ 'color': 'black' }}
                                    contentStyle={{ 'opacity': '0.8' }} />
                                <Bar dataKey="power" fill="white" animationDuration={1500} />
                            </BarChart>
                        </td>
                        <td>
                            <BarChart width={450} height={300} data={this.getMPGData()}
                                margin={{ top: 5, right: 30, left: 30, bottom: 5 }} barSize={10}  >
                                <XAxis dataKey="name" stroke='white' />
                                <YAxis stroke='white' />
                                <Tooltip
                                    labelStyle={{ 'color': 'black' }}
                                    itemStyle={{ 'color': 'black' }}
                                    contentStyle={{ 'opacity': '0.8' }} />
                                <Bar dataKey="power" fill="white" animationDuration={1500} />
                            </BarChart>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default Renewable;