// Integrated

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Integrated.css'
// AXIOS IMPORTS
import axios from 'axios'

class Integrated extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renewable: {
                cumulative_power_generation: 0,
                total_facility_capacity: 0,
                co2_reduction: 0,
                drinking_water_effect: 0,
                number_of_chargers_installed: 0,
                electricity_extraction_volume: 0
            },
            emobility: {
                members: 0,
                cumulative_ride: 0,
                electric_vehical_shared: 0,
                ecar_available: 0,
                ecar_unusable: 0,
                ecar_charging: 0,
                ecar_total: 0,
                ekickboard_available: 0,
                ekickboard_unusable: 0,
                ekickboard_charging: 0,
                ekickboard_total: 0
            }
        }
    }

    async componentDidMount() {
        await axios.get('/renewable/integrated')
            .then((res) => {
                console.log("RENEWABLE: " + JSON.stringify(res.data))
                this.setState({ renewable: res.data });
            })
            .catch((err) => {
                alert(err);
            })
        await axios.get('/emobility/integrated')
            .then((res) => {
                console.log("EMOBILITY: " + JSON.stringify(res.data))
                this.setState({ emobility: res.data });
            })
            .catch((err) => {
                alert(err);
            })
    }

    render() {
        return (
            <div className='integratedMain'>
                <center>
                    <h1>
                        e-3DA Integrated Dashboard
                    </h1>
                </center>
                <div className='dataTables'>
                    <table className='renewableTable'>
                        <tr>
                            <th colSpan='2'>Renewable Energy</th>
                        </tr>
                        {/* 1st SECTION */}
                        <tr>
                            <th>
                                Cummulative Power Generation
                            </th>
                            <th>
                                Total Facility Capacity
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {this.state.renewable.cumulative_power_generation} MWh
                            </td>
                            <td>
                                {this.state.renewable.total_facility_capacity} MW
                            </td>
                        </tr>
                        {/* 2nd SECTION */}
                        <tr>
                            <th>
                                CO2 Reduction<br />(Wind and Solar)
                            </th>
                            <th>
                                Drinking Water Effect<br />(Wind and Solar)
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {this.state.renewable.co2_reduction} tCO2
                            </td>
                            <td>
                                {this.state.renewable.drinking_water_effect} trees
                            </td>
                        </tr>
                        {/* 3rd SECTION */}
                        <tr>
                            <th>
                                Number of chargers installed <br /> (EV charger)
                            </th>
                            <th>
                                Electricity Storage System<br />(ESS)
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {this.state.renewable.number_of_chargers_installed}
                            </td>
                            <td>
                                {this.state.renewable.electricity_extraction_volume} KW
                            </td>
                        </tr>
                    </table>
                    <div style={{ 'width': '3px', 'backgroundColor': 'white', 'height': '100%' }} />
                    <div className='emobilityTables'>
                        <table className='summaryTable'>
                            <tr>
                                <th colSpan='3'>
                                    Summary
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Members
                                </th>
                                <th>
                                    Commulative number <br /> of boarding
                                </th>
                                <th>
                                    Number of shared EV's
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.emobility.members} people
                                </td>
                                <td>
                                    {this.state.emobility.cumulative_ride} times
                                </td>
                                <td>
                                    {this.state.emobility.electric_vehical_shared} units
                                </td>

                            </tr>
                        </table>
                        <table className='availabilityTable'>
                            <tr>
                                <th colSpan='3'>
                                    Availability
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>
                                    Electric Car
                                </th>
                                <th>
                                    Electric Kickboard
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    Available
                                </td>
                                <td>
                                    {this.state.emobility.ecar_available}
                                </td>
                                <td>
                                    {this.state.emobility.ekickboard_available}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Unusable
                                </td>
                                <td>
                                    {this.state.emobility.ecar_unusable}
                                </td>
                                <td>
                                    {this.state.emobility.ekickboard_unusable}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Charging
                                </td>
                                <td>
                                    {this.state.emobility.ecar_charging}
                                </td>
                                <td>
                                    {this.state.emobility.ekickboard_charging}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Total
                                </td>
                                <td>
                                    {this.state.emobility.ecar_total}
                                </td>
                                <td>
                                    {this.state.emobility.ekickboard_total}
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        );
    }

}

export default Integrated;