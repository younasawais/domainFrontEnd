import React, { Component } from 'react';
import MapConfirmObject from './../registrationConfirmMod/mapConfirmObject';
import axios from 'axios';
import RegistrarForm from './../registerFormMods/registrarForm';
import {handelInputRegistrarDataEx} from '../registerFormMods/registerFormFunctions';

class ShowDomainDetails extends Component {
    constructor(props){
        super(props);
        this.state = { 
            domainRegistrar : [{}],
            domainModify : ""
         }
         this.changeRegistrarDetails    = this.changeRegistrarDetails.bind(this);
         this.handelInputRegistrarData  = this.handelInputRegistrarData.bind(this);
         this.handleCancelBtn           = this.handleCancelBtn.bind(this);
    }

    changeRegistrarDetails(index){
        console.log(index);
        this.setState({
            domainModify : index
        })
    }

    async handleConfirmBtn(){
        const {domainModify, domainRegistrar} = this.state;
        console.log(domainRegistrar[domainModify]);
        console.log("Sending above to backend");
        try {
            const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/updateDomainRegistrar',{
                "token" : sessionStorage.getItem("token"),
                "domainRegistrar" : domainRegistrar[domainModify]
            }); 
            console.log("Underneath response from backend");
            console.log(response);
            console.log(this.state.domainRegistrar);
            this.setState({
                domainModify : ""
            });
        } catch (error) {
            console.log(error);
        }
    }

    
    async handleCancelBtn(){
        try {
            const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/showDomainNames',{
                "token" : sessionStorage.getItem("token")
            }); 
            console.log(response);
            this.setState({
                domainRegistrar : response,
                domainModify    : ""
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    handelInputRegistrarData(e){
        let {domainModify, domainRegistrar} = this.state;
        let domainRegistrarOne = {...handelInputRegistrarDataEx(e, domainRegistrar[domainModify])};
        console.log(domainRegistrarOne);
        let domainRegistrarAll = [...this.state.domainRegistrar];
        domainRegistrarAll[domainModify] = domainRegistrarOne;
        this.setState({domainRegistrar : domainRegistrarAll});
    }

    async componentDidMount(){
        //this.handleCancelBtn();
        try {
            const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/showDomainNames',{
                "token" : sessionStorage.getItem("token")
            }); 
            console.log(response);
            this.setState({
                domainRegistrar : response,
                //domainModify    : false
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() { 
        console.log(this.state);
        if(this.state.domainModify !== ""){
            const {domainModify, domainRegistrar} = this.state;
            const {name, surname, email, phoneNumber, address, address2, city, 
                   state, country, zip} = domainRegistrar[domainModify];
            return(
                <React.Fragment>
                    <RegistrarForm
                        handelInputRegistrarData  = {this.handelInputRegistrarData}
                        name            = {name}
                        surname         = {surname}
                        email           = {email}
                        phoneNumber     = {phoneNumber}
                        address         = {address}
                        address2        = {address2}
                        city            = {city}
                        state           = {state}
                        country         = {country}
                        zip             = {zip}
                    />
                    <button className="btn-danger" onClick={()=>{this.handleConfirmBtn()}}>Confirm Changes</button>
                    <button className="btn-warning" onClick={()=>{this.handleCancelBtn()}}>Cancel</button>
                </React.Fragment>
            )
        }
            return ( 
                <React.Fragment>
                    {this.state.domainRegistrar.map((domain, index)=>(
                        <React.Fragment key={index}>
                            <MapConfirmObject
                                title  = {domain.domainName}
                                ObjToMap = {domain}/>
                            <button className="btn-danger" onClick={()=>{
                                this.changeRegistrarDetails(index)
                                }
                            } >Modify Details</button>
                            <hr/>
                        </React.Fragment>
                        )
                    )}
                </React.Fragment>
            );
    }
}
 
export default ShowDomainDetails;
