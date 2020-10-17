// LOGIN

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Login.css'

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="LoginFULL">
                <form onSubmit={this.handleLogin}>
                    <center><h2>LOGIN</h2></center>
                    <table>
                        <tr>
                            <td>E-MAIL:</td>
                            <td>
                                <input type="text" name="email" id="email" />
                            </td>
                        </tr>
                        <tr>
                            <td>PASSWORD:</td>
                            <td>
                                <input type="password" name="password" id="password" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ "text-align": "center" }}>
                                <input type="submit" value="LOGIN" className="loginBttn" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }

}

export default Login;