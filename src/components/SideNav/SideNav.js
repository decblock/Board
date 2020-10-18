// SIDENAV

// REACT IMPORTS
import React, { Component } from 'react';
// ROUTER IMPORTS
import { Link } from 'react-router-dom';
// SIDEBAR IMPORTS
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// ICON iMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faChartPie, faLeaf, faBolt } from '@fortawesome/free-solid-svg-icons'

class SideNav extends Component {

    render() {
        return (
            <ProSidebar className='sideBar'>
                <Menu iconShape="square">
                    <MenuItem icon={<FontAwesomeIcon icon={faLightbulb} size='2x' />}>
                        <Link to='/dashboard/insights'>

                            Insights
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faChartPie} size='2x' />}>
                        <Link to='/dashboard/integrated'>

                            Integrated Dashboard
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faLeaf} size='2x' />}>
                        <Link to='/dashboard/renewable'>
                            Renewable Energy
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faBolt} size='2x' />}>
                        <Link to='/dashboard/emobility'>
                            E-Mobility
                        </Link>
                    </MenuItem>
                </Menu>
            </ProSidebar>
        );
    }

}

export default SideNav;