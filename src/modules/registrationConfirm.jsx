import React, { Component } from 'react';
import MapConfirmObject from './registrationConfirmMod/mapConfirmObject';
import MapProductData from './registrationConfirmMod/mapProductData';
import axios from 'axios';
import {Link} from 'react-router-dom';

class RegistrationConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailExisting : false
        } 
        // this.sendToBackend  = this.sendToBackend.bind(this);
        // this.checkEmail     = this.checkEmail.bind(this);
    }

    async componentDidMount(){
        const {email} = this.props.userInfo;
        console.log("Email send: " + email);
        const {data} = await axios.post(process.env.backendAPI+"/emailexist",{
            email : email
        });
        console.log(data);
        if(data){
            setTimeout(()=>{window.location = '/login'},3000);
            this.setState({
                emailExisting : true
            })
            
        }
    }

    render() { 
        const {emailExisting} = this.state;   
        const {domainRegistrar, userInfo, productData, loggedin, currentUser} = this.props;
           
        return(
            <React.Fragment>
            { 
                emailExisting ?
                <React.Fragment>
                    <h3>{this.props.userInfo.email} already exists, Please login.</h3> 
                </React.Fragment>
                :
                <React.Fragment>
                    <MapProductData 
                        title  = "Services & Product"
                        productData = {productData}
                    />
                    {loggedin ? 
                        <p>Loggedin as {currentUser}</p> :
                        <MapConfirmObject 
                            ObjToMap = {userInfo}
                            title   = "User Details"/>
                    }
                    <MapConfirmObject 
                        ObjToMap = {domainRegistrar}
                        title   = "Registrar Details"/>
                    <Link 
                        type="button" 
                        to={'/payment'} 
                        className="btn btn-primary"
                    >Proceed to pay</Link> 
                </React.Fragment>
            }
            </React.Fragment>
        )
    }   
}
 
export default RegistrationConfirm;



