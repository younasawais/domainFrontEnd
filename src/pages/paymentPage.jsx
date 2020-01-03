import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckOutForm from '../modules/CheckoutForm';


class PaymentPage extends Component {
    state = {  }
    render() { 
        return ( 
            <StripeProvider apiKey='pk_test_QxkaoHFPn5VVJdgkzXUG8VDq00GF2cNEHp'>
                <Elements>
                    <CheckOutForm
                        domainRegistrar = {this.props.domainRegistrar}
                        userInfo        = {this.props.userInfo}
                        productData     = {this.props.productData}
                        currentUser     = {this.props.currentUser}
                    />
                </Elements>
            </StripeProvider>
        );
    }
}
 
export default PaymentPage;