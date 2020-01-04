import React, { Component } from 'react';
import LabelAndInput from './../modules/elements/labelAndInput';
import axios from 'axios';


class NewPass extends Component {    
    constructor(props) {
    super(props);
    this.state = { 
        password1   : "",
        password2   : "",
        error       : false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(e){
        const {value, name} = e.target;
        console.log(name, value);
        this.setState({[name] : value});
    }

    async handleSubmit(){
        const {data : response} = await axios.post(process.env.REACT_APP_backendAPI + '/resetPassword',{
            "token"         : this.props.match.params.token,
            "password"      : this.state.password1
        }); 
        console.log(response);
        if(response === "updated"){
            console.log("password has been updated. please Login");
            window.location = '/login';
        }else{
            this.setState({
                error: true
            })
        }
    }

    render() {         
        let showSubmit = true;
        let {password1, password2} = this.state;
        if((password1 === password2) && password1.length>7){
            showSubmit = true;
        }else{
            showSubmit = false;
        }
        
        return ( 
            <React.Fragment>
               <h2>Reset Password</h2>
               <LabelAndInput 
                    labelName = "labelnewPass1"
                    labelValue = "New password"
                    inputType = "password"
                    inputId = "password1"
                    inputValue = {this.state.password1}
                    placeholder = "New password"
                    onChangeFunc =  {this.handleInput}
                    name = "password1"
               />
               <LabelAndInput 
                    labelName = "labelnewPass2"
                    labelValue = "Retype password"
                    inputType = "password"
                    inputId = "password2"
                    inputValue =  {this.state.password2}
                    placeholder = "password"
                    onChangeFunc =  {this.handleInput}
                    name = "password2"
               />
               {   showSubmit?
                   <button type="button" className="btn btn-primary" onClick={()=>{this.handleSubmit()}}>Submit</button>
                   :
                   ""
               }
               {
                   this.state.error?
                   <p>Password wasn't updated, 
                   either because link is expired or invalid. 
                   Please reset your password again or contact us if this problem reoccurs</p>:
                   ""
               }
            </React.Fragment>
        );
    }
}
 
export default NewPass;