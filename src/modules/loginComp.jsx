import React, {Component} from "react";
import axios from 'axios';
import LabelAndInput from './elements/labelAndInput';
import {Link} from 'react-router-dom';
import LoadingSpin from './elements/loadingspin';

class LoginComp extends Component {
    constructor(props) {
    super(props);
    this.state = { 
        email       : "",
        password    : "",
        loggedin    : false,
        loading     : false,
        wrongDetails: false,
        showTimer   : false,
        timerVal    : 5000,
        timeLeft    : 5
        }
        this.sendmessage = this.sendmessage.bind(this);
        this.handelInput = this.handelInput.bind(this);
        this.delay       = this.delay.bind(this);
    }
    handelInput(e){
        const {value, name} = e.target;
        this.setState({[name] : value});
    }

    async sendmessage(e){
        e.preventDefault();
        this.setState({loading : true});
        const {email, password} = this.state;
        console.log("email : " + email + ", Password : " + password); 
        const response = await axios.post(process.env.backendAPI + '/login',
                                          {"email" : email, "password" : password});
        console.log(response);
        if(this.props.register && response.headers["x-auth-token"] !== "false"){ //TODO: after registration, reset vars
            sessionStorage.setItem("token", response.headers["x-auth-token"]);
            this.props.handleLogin();
            this.setState({ loggedin : true});
        }else if(response.headers["x-auth-token"] === "false"){
            this.setState({ wrongDetails : true, showTimer:true, loading: false}, this.delay);
        }else if(response.headers["x-auth-token"]){
            sessionStorage.setItem("token", response.headers["x-auth-token"]);
            this.setState({ loggedin : true, loading : false, wrongDetails : false});
            window.location = '/home'; 
        }
    }

    delay(){
        let interval = setInterval(()=>{this.setState({timeLeft : this.state.timeLeft - 1})}, 1000);
        setTimeout(()=>{
            clearInterval(interval);
            this.setState({
                showTimer:false, 
                password: "", 
                timeLeft : 5})}, 
                this.state.timerVal);
    }

    render() { 
        return (
            <React.Fragment>
                    <h3>Login</h3>
                    {this.state.showTimer?
                    <p>Please wait {this.state.timeLeft} seconds..</p>
                    :
                    <React.Fragment>
                        <LabelAndInput 
                            labelName = "labelname"
                            labelValue = "Email"
                            inputValue = {this.state.email}
                            name = "email"
                            inputId = "email"
                            inputType = "email"
                            placeholder = "Email"
                            onChangeFunc = {this.handelInput}
                            //validated = "was-validated"
                        />
                        <LabelAndInput 
                            labelName = "labelname"
                            labelValue = "password"
                            inputValue = {this.state.password}
                            inputId = "password"
                            name = "password"
                            inputType = "password"
                            placeholder = "Password"
                            onChangeFunc = {this.handelInput}
                            //validated = "was-validated"
                        />
                    </React.Fragment>
                    }
                    {   this.state.wrongDetails ?
                        <React.Fragment>
                           <small style={{marginLeft: 12}}className="smallText">Incorrect Email or password.</small> <br/>
                        </React.Fragment>
                        : ""}
                    {
                        this.state.loading ?
                        <LoadingSpin /> :
                        <button 
                            type="submit"
                            onClick = {this.sendmessage} 
                            style={{color:'white', marginLeft:12}}
                            className="btn btn-primary">Submit</button>
                    }
                <Link
                    to="/forgotPass" 
                    style={{color:'white', marginLeft:12}}
                    className="form-text text">Forgot password?</Link>
            </React.Fragment>
         );
    }
}

 
LoginComp.defaultProps = {
    register: false
}
 
export default LoginComp;