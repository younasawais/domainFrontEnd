import React, { Component } from 'react';

class ServicesPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null
          }
    }


    render() { 
        return (
            <React.Fragment>
                <div className="form-group files">
                    <h1>Our Services</h1>
                    <p>Who’s email would you consider more credible and trustworthy, nicktaylor@hotmail.com or info@nicktaylor.com? Exactly, 
                        having a custom email address provides value to your email and your brand.
                        A professional email address will help you win trust when dealing with other businesses and customers.</p>

                    <p>Each email account has 10GB of storage. Easily share, create, and collaborate with your family, friends and colleagues.</p>

                    <p>Read and send emails from your web browser, Android/IOS device, or access your inbox via Mac Mail, Outlook, or Mozilla Thunderbird.</p>

                    <h4>Following is included in your plan</h4>
                    <ul>
                        <li>Free domain name</li>
                        <li>10 GB Mailbox</li>
                        <li>99.9% uptime</li>
                        <li>Unlimited bandwidth</li>
                        <li>Free SSL certificate</li>
                        <li>Show PDF on your domain name</li>
                        <li>Access email through a web browser or mobile device</li>
                        <li>Configure your email in MS-Outlook, Mozilla or Mac Mail</li>
                        <li>Forward your domain name to Linkedin profile or other links.</li>
                    </ul>

                    <h4>Addons</h4>
                    <ul>
                        <li>+5GB, +10 GB, + 20GB</li>
                        <li>Custom page/website on your domain</li>
                        <li>Hide your public data from domain lookup</li>
                        <li>Visitors tracker on your domain name</li>
                    </ul>

                    <h5>NOTE: Qouh.com Email is billed annually.</h5>
                </div>
            </React.Fragment>
         );
    }
}

export default ServicesPage;