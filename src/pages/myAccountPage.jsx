import React, { Component } from 'react';
import MyAccount from './../modules/myAccount';

class MyAccountPage extends Component {

    render() { 
        return ( 
            <React.Fragment>
               <h2>My Account </h2>
                <MyAccount/>
            </React.Fragment>
        );
    }
}
 
export default MyAccountPage;