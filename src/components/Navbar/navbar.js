// THE NAVIGATION BAR COMPONENT

// REACT IMPORTS
import React, { Component } from 'react';
// ROUTER IMPORTS
import { Link } from 'react-router-dom';
// REDUX IMPORTS
// import { connect } from 'react-redux';
// STYLESHEET
import './navbar.css'
// BANNER IMPORT
import logo from '../../assets/images/JejuBanner.png'

class Navbar extends Component {
    render() {
        return (
            <nav className="nav" variant="tabs">
                <h1>
                    <Link to="/" className="linkElement">
                        <img src={logo} style={{'height': '5vh'}} />
                    </Link>
                </h1>
                <div className="navDiv">
                    <ul className="ulElement">
                        <Link to="/" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    Home
                                </div>
                            </li>
                        </Link>
                        <Link to="/" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    Introduction
                                </div>
                            </li>
                        </Link>
                        <Link to="/" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    Dashboard
                                </div>
                            </li>
                        </Link>
                        <Link to="/auth" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    Login/Register
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

// function mapStateToProps(state) {
//     return ({
//         isAuthenticated: state.auth.isAuthenticated,
//     })
// }

// export default connect(mapStateToProps)(Navbar);

export default Navbar;