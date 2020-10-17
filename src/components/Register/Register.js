// REGISTER

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Register.css'

class Register extends Component {

    handleLogin = (e) => {
        e.preventDefault();
    }

    render() {
        return (
          <div className="RegisterFULL">
            <form onSubmit={this.handleSubmit}>
              <center><h2>REGISTER</h2></center>
              <table>
                <tr>
                  <td>NAME:</td>
                  <td>
                    <input type="text" name="name" id="name" />
                  </td>
                </tr>
                <tr>
                  <td>EMAIL:</td>
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
                  <td>SSN:</td>
                  <td>
                    <input type="number" name="SSN" id="SSN" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{"text-align":"center"}}>
                    <input type="submit" value="REGISTER" className="registerBttn"/>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        );
      }
}

export default Register;