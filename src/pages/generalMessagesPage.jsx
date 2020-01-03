import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class GeneralMessagesPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               <h3>Thank You </h3>
               <p>A confirmation email has been send, domain name will be setup within 24 hours.</p>
               <Link type="button" to={'/myAccount'} className="btn btn-primary">Go to My account</Link>
            </React.Fragment>
            );
    }
}
 
export default GeneralMessagesPage;