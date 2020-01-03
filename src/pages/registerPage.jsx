import React, { Component } from 'react';
import RegisterForm from './../modules/registerForm';
//import PriceCalc from './../modules/priceCalc';

class RegisterPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* <PriceCalc /> */}
                <RegisterForm
                    saveToDB    = {this.props.saveToDB}
                    loggedin    = {this.props.loggedin}
                    currentUser = {this.props.currentUser}
                    handleLogin = {this.props.handleLogin}
                    domainName  = {this.props.domainName}
                />
            </React.Fragment>
            );
    }
}
 
export default RegisterPage;