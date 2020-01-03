import React, { Component } from 'react';
import ProductSelection from "../modules/productSelect";

class FrontPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="page-content">
                <h3>Home</h3>
                <ProductSelection {...this.props} compType="basic"  />
            </div>
         );
    }
}
 
export default FrontPage;