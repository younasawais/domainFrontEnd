import React, {Component} from "react";
import axios from 'axios';
import LabelAndInput from './elements/labelAndInput';

class ForgotPass extends Component {
    constructor(props) {
    super(props);
    this.state = { 
        email: "",
        send : false
        }
        this.sendmessage = this.sendmessage.bind(this);
        this.handelInput = this.handelInput.bind(this);
    }
    handelInput(e){
        const {value, name} = e.target;
        this.setState({[name] : value});
    }

    async sendmessage(e){
        e.preventDefault();
        const {email} = this.state;
        console.log("email : " + email);
        this.setState({send : true});
        axios.post('http://localhost:4000/forgotPass', {"email" : email});
    }

    render() { 
        return ( 
            <React.Fragment>
                <form>
                    <h3>Forgot Password</h3>
                    {
                        this.state.send?
                        <h5>If your email exist in our database, you'll receive an email to setup a new password</h5>
                        :
                    <React.Fragment>
                        <LabelAndInput 
                            labelName = "labelname"
                            labelValue = "Email"
                            inputValue = {this.state.email}
                            name = "email"
                            inputId = "email"
                            placeholder = "Email"
                            onChangeFunc = {this.handelInput}
                            //validated = "was-validated"
                        />
                    <button 
                        type="submit"
                        onClick = {this.sendmessage} 
                        style={{color:'white', marginLeft:12}}
                        className="btn btn-primary">Send Email</button>
                    </React.Fragment>
                    }
                    {/* <small 
                        id="emailHelp" 
                        class="form-text text-muted">Welcome back :)</small> */}
                </form>
            </React.Fragment>
         );
    }
}

 
ForgotPass.defaultProps = {
    //register: false
}
 
export default ForgotPass;