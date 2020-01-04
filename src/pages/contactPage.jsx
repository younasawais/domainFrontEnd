import React, { Component } from 'react';
import LabelAndInput from './../modules/elements/labelAndInput';
import TextareaAndLabel from './../modules/elements/textareaAndLabel';
import {verifyInputsContactPage} from './../modules/registerFormMods/registerFormFunctions';
import axios from 'axios';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name        : "",
            surname     : "",
            email       : "",
            phoneNumber : "",
            comment     : "",
            showButton  : false,
            sendStatus  : ""
        }
        this.handleInput            = this.handleInput.bind(this);
        this.inputHandleSubmit      = this.inputHandleSubmit.bind(this);
    }

    handleInput(e){
        const {name, value} = e.target;
        this.setState({
            [name] : value
        }, ()=>{if(verifyInputsContactPage(this.state).length === 0 ){
            this.setState({showButton : true});
        }else{
            this.setState({showButton : false});
        }});
        
    }

    async inputHandleSubmit(){
        const {name,surname,email,phoneNumber,comment} = this.state;
        this.setState({sendStatus : "processing"},async ()=>{
            const {data} = await axios.post(process.env.backendAPI+"/sendContactMessage",{
                name        : name,
                surname     : surname,
                email       : email,
                phoneNumber : phoneNumber,
                comment     : comment
              });
            this.setState({sendStatus : data})
            console.log(data);
        });

    }

    render() { 
        const {name, surname, email, phoneNumber, comment,sendStatus} = this.state;
        const {handleInput} = this;
        if(sendStatus === ""){
            return (
            <React.Fragment>
                <h3>Contact</h3>
                    <LabelAndInput 
                        labelName = "labelRegistrarname"
                        labelValue = "* Name"
                        inputId = "Regname"
                        inputValue = {name}
                        name = "name"
                        placeholder = "Name"
                        divClassname = "form-group"
                        onChangeFunc = {handleInput}
                    />
                    <LabelAndInput 
                        labelName = "labelRegistrarsurname"
                        labelValue = "Surname"
                        inputId = "RegsurName"
                        inputValue = {surname}
                        name = "surname"
                        placeholder = "Surname"
                        divClassname = "form-group"
                        onChangeFunc = {handleInput}
                    />
                    <LabelAndInput 
                        labelName = "labelRegistrarEmail"
                        labelValue = "* Email"
                        inputId = "Regemail"
                        inputType = "email"
                        inputValue = {email}
                        name = "email"
                        placeholder = "Email"
                        type="email"
                        divClassname = "form-group"
                        onChangeFunc = {handleInput}
                    />
                    <LabelAndInput 
                        labelName = "labelRegistrarNumber"
                        labelValue = "Phone Number"
                        inputId = "RegphoneNumber"
                        inputType="phoneNumber"
                        inputValue = {phoneNumber}
                        name = "phoneNumber"
                        divClassname = "form-group"
                        placeholder = "Phone Number"
                        onChangeFunc = {handleInput}
                    />
                    <TextareaAndLabel 
                        labelName = "labelMessage"
                        labelValue = "* Message"
                        inputId = "comment"
                        inputType="comment"
                        inputValue = {comment}
                        name = "comment"
                        divClassname = "form-group"
                        placeholder = "Please enter a message in the textarea."
                        onChangeFunc = {handleInput}
                    />
                    {
                        this.state.showButton ?
                        <button type="button" className="btn btn-primary" onClick={this.inputHandleSubmit}>Send</button> : ""
                    }
            </React.Fragment>    
            );
        }else if(sendStatus === "processing"){
            return(
                <h2>Sending..</h2>
            )
        }else if(sendStatus === "success"){
            return(
                <h5>Message has been send succesfully. We'll get back to you shortly.</h5>
            )
        }else{
            return(
                <h2>Error</h2>                
            )
        }
    }
}
 
export default ContactPage;