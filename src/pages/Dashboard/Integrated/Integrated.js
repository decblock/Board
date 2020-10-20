// Integrated

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Integrated.css'
// AXIOS IMPORTS
import axios from 'axios'

import { Card, Button, Grid } from "tabler-react";

import "tabler-react/dist/Tabler.css";

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
                        e-3DA 통합 대시보드
                    </h1>
                </center>
                <div className='dataTables'>
                    <table className='renewableTable'>
                    
                        <tr>
                            <th colSpan='2'>신재생에너지</th>
                        </tr>
                        {/* 1st SECTION */}
                        <tr>
                            <th>
                            <Card statusColor="orange">
                                <Card.Header>
                                    <Card.Title>
                                        누적 발전량(풍력/태양광)
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                 {this.state.renewable.cumulative_power_generation} MWh
                                </Card.Body>
                            </Card>
                            </th>
                            <th>
                            <Card statusColor="orange">
                                <Card.Header>
                                    <Card.Title>총 설비 용량(풍량/태양광)</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    {this.state.renewable.total_facility_capacity} MW
                                </Card.Body>
                            </Card>
                            </th>
                        </tr>
                
                        <tr>
                            <th>
                                <Card statusColor="orange">
                                    <Card.Header>
                                        <Card.Title>CO2 저감량<br />(풍량/태양광)</Card.Title>
                                </Card.Header>
                                    <Card.Body>
                                     {this.state.renewable.co2_reduction} tCO2
                                    </Card.Body>
                                </Card>
                            </th>
                            <th>
                                <Card statusColor="orange">
                                    <Card.Header>
                                        <Card.Title>식수효과<br />(풍량/태양광)</Card.Title>
                                </Card.Header>
                                    <Card.Body>
                                    {this.state.renewable.drinking_water_effect} trees
                                    </Card.Body>
                                </Card>
                            </th>
                        </tr>
                        
                        {/* 3rd SECTION */}
                        <tr>
                            <th>
                                <Card statusColor="orange">
                                    <Card.Header>
                                        <Card.Title>충전기 설치 수 <br /> (EV 충전기)</Card.Title>
                                </Card.Header>
                                    <Card.Body>
                                    {this.state.renewable.number_of_chargers_installed}
                                    </Card.Body>
                                </Card>
                            </th>
                            <th>
                                <Card statusColor="orange">
                                    <Card.Header>
                                        <Card.Title>전기 추출량<br />(ESS)</Card.Title>
                                </Card.Header>
                                    <Card.Body>
                                    {this.state.renewable.electricity_extraction_volume} KW
                                    </Card.Body>
                                </Card>
                            </th>
                        </tr>
                    </table>
                    <div style={{ 'width': '3px', 'backgroundColor': 'white', 'height': '100%' }} />
                    <div className='emobilityTables'>
                        <table className='summaryTable'>
                            <tr>
                                <th colSpan='3'>
                                    요약현향
                                </th>
                            </tr>
                            <tr>
                                <th>
                                <Card statusColor="orange">
                                    <Card.Header>
                                        <Card.Title>회원수</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                    {this.state.emobility.members} 명
                                    </Card.Body>
                                </Card>
                                    
                                </th>
                                <th>
                                <Card statusColor="orange">
                                    <Card.Header>
                                        <Card.Title>누적 탑승 횟수</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                    {this.state.emobility.cumulative_ride} 회
                                    </Card.Body>
                                </Card>
                                </th>
                                <th>
                                <Card statusColor="orange">
                                    <Card.Header>
                                        <Card.Title>전기차 공유 대수</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                    {this.state.emobility.electric_vehical_shared} 대
                                    </Card.Body>
                                </Card>
                                    
                                </th>
                            </tr>
                            {/* <tr>
                                <td>
                                    {this.state.emobility.members} 명
                                </td>
                                <td>
                                    {this.state.emobility.cumulative_ride} 회
                                </td>
                                <td>
                                    {this.state.emobility.electric_vehical_shared} 대
                                </td>

                            </tr> */}
                        </table>
                        <table className='availabilityTable'>
                            <tr>
                                <th colSpan='3'>
                                    가용현황
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>
                                    전기차
                                </th>
                                <th>
                                    전동킥보드
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    가용
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
                                    비가용
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
                                    충전중
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
                                    전체
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