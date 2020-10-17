// REGISTRATION PAGE

// REACT IMPORTS
import React, { Component } from 'react';
// CUSTOM COMPONENT IMPORTS
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register'
// STYLESHEET
import './AuthenticationPage.css';

class RegistrationPage extends Component {

    render() {
        return (
            <div className='authMain'>
                <Login />
                <Register />
            </div>
        );
    }

}

export default RegistrationPage;