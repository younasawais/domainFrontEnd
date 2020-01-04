import React, { Component } from 'react';
import MapConfirmObject from './../registrationConfirmMod/mapConfirmObject';
import NewUserFrom from './../registerFormMods/newUserForm';
import axios from 'axios';
//import {handelInputUserDataEx} from '../registerFormMods/registerFormFunctions';

class ShowUserDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            "userInfo": {
                "name"          : "",
                "surname"       : "",
                "email"         : "",
                "phoneNumber"   : "",
                "address"       : "",
                "address2"      : "",
                "city"          : "",
                "state"         : "",
                "zip"           : ""
            },
            "modifyUserInfo": {
                "name"          : "",
                "surname"       : "",
                "email"         : "",
                "phoneNumber"   : "",
                "address"       : "",
                "address2"      : "",
                "city"          : "",
                "state"         : "",
                "zip"           : ""
            },
            modify : false
         }
         this.handleModify          = this.handleModify.bind(this);
         this.handleConfirmChanges  = this.handleConfirmChanges.bind(this);
         this.handelInputUserInfo   = this.handelInputUserInfo.bind(this);
         this.receiveUserData       = this.receiveUserData.bind(this);
         this.handleCancel          = this.handleCancel.bind(this);
    }

    handelInputUserInfo(e){
        console.log("Function : handelInputUserInfo");

        const name  = e.target.name;
        const value = e.target.value;
        let oldInfo = {...this.state.modifyUserInfo};
        oldInfo[name]= value;

        this.setState({
            modifyUserInfo : oldInfo
        });
    }

    async receiveUserData(){
        let token;
        try {
            token = sessionStorage.getItem("token");
            const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/getUserData',{"token" : token}); 
            console.log(response);
            const {name, surname, email, phoneNumber, address, address2, city, state, country, zip} = response;
            this.setState({
                modify : false,
                userInfo : {
                    "name"          : name,
                    "surname"       : surname,
                    "email"         : email,
                    "phoneNumber"   : phoneNumber,
                    "address"       : address,
                    "address2"      : address2,
                    "city"          : city,
                    "state"         : state,
                    "country"       : country,
                    "zip"           : zip
                }
            });
        } catch (error) {
            console.log(error);
            this.setState({
                userInfo : {
                    "name"          : "error",
                    "surname"       : "error",
                    "email"         : "error",
                    "phoneNumber"   : "error",
                    "address"       : "error",
                    "address2"      : "error",
                    "city"          : "error",
                    "state"         : "error",
                    "country"       : "error",
                    "zip"           : "error"
                }
            });
        }
    }
    async componentDidMount(){
        console.log("Component Did mount");
        this.receiveUserData();
    }

    handleModify(){
        this.setState({
            modify          : true,
            modifyUserInfo  : this.state.userInfo
        })
    }

    handleCancel(){
        this.receiveUserData();
    }

    async handleConfirmChanges(){
        try {
            const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/updateUserInfo',{
                "token" : sessionStorage.getItem("token"),
                "userInfo" : this.state.modifyUserInfo
            }); 
            console.log(response);
            this.setState({
                userInfo        : this.state.modifyUserInfo,
                modify          : false
            })
        } catch (error) {
            console.log(error);
        }
    }


    render() { 
        return ( 
            <React.Fragment>
                {this.state.modify ?
                <React.Fragment>
                    <NewUserFrom 
                    userInfo                        = {this.state.modifyUserInfo}
                    handelInputUserData             = {this.handelInputUserInfo}
                    showCheckBoxCopy                = {false}/>
                    <button className="btn-danger" onClick={this.handleConfirmChanges}>Confirm Changes</button>
                    <button className="btn-warning" onClick={this.handleCancel}>Cancel</button>
                </React.Fragment>
                :
                <React.Fragment>
                    <MapConfirmObject 
                        title       = "My Personal details"
                        ObjToMap    = {this.state.userInfo}/>
                    <button className="btn-danger" onClick = {this.handleModify}>Modify Details</button>
                    <hr/>
                </React.Fragment>
                }
            </React.Fragment>
            );
    }
}
 
export default ShowUserDetails;
