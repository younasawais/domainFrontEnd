import React, { Component } from 'react';
import LoginComp from './../modules/loginComp';

class LoginPage extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <LoginComp getCurrentUser={this.props.getCurrentUser}/>
            </React.Fragment>
         );
    }
}
 
export default LoginPage;