import React, { Component } from 'react';
import RegistrationConfirm from './../modules/registrationConfirm';

class RegistrationConfirmPage extends Component {

    render() { 
        const {domainRegistrar, productData, userInfo, loggedin, currentUser} = this.props

        return (
            <RegistrationConfirm 
                domainRegistrar = {domainRegistrar}
                userInfo        = {userInfo}
                productData     = {productData}
                loggedin        = {loggedin}
                currentUser     = {currentUser} 
            />
         );
    }
}
 
export default RegistrationConfirmPage;