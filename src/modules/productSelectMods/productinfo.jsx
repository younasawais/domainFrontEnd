import React from 'react';


const ProductInfo = (props) =>{
    //const {} = props;

    return(
        <React.Fragment>
        <div className="card mb-4 shadow-sm transparant">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Plan Details</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$8.99 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>- Free Domain Name</li>
              <li>- Free SSL security</li>
              <li>- Domain forwarding (linkedin or other)</li>
              <li>- Show custom PDF on your Domain</li>
              <li>- 10 GB of storage</li>
              <li>- Email support</li>
              <li>- Access webmail through web browser</li>
              <li>- Configure Email on Android / Iphone device</li>
              <li>- Configure Email on MS-Outlook, Mac-Mail, etc..</li>
            </ul>
         </div>
        </div>
        </React.Fragment>
    )

}

export default ProductInfo;

 