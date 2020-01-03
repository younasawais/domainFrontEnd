import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {handleCheckBoxEx, handelInputUserDataEx, handelInputRegistrarDataEx,
        handleCheckBoxCopyToRegistrarEx, verifyInputs} from './registerFormMods/registerFormFunctions';
import NewUserFrom from './registerFormMods/newUserForm';
import RegistrarForm from './registerFormMods/registrarForm';
import LoginComp from './loginComp';
import InputSelection from './elements/inputSelection';
import CheckboxAndLabel from './elements/checkboxAndLabel';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo : {
                name        : "",
                surname     : "",
                email       : "",
                password    : "",
                password2   : "",
                phoneNumber : "",
                address     : "",
                address2    : "",
                city        : "",
                state       : "",
                country     : "",
                zip         : "",
                comment    : ""
            },
            domainRegistrar : {
                name        : "",
                surname     : "",
                email       : "",
                phoneNumber : "",
                address     : "",
                address2    : "",
                city        : "",
                state       : "",
                country     : "",
                zip         : "",
                domainName  : "",
            },
            checkBoxAgreement       : false,
            checkBoxCopyToRegistrar : false,
            checkBoxLoggin          : false,
            selectNewuser           : true,
            showProceedBtn          : false,
            loggedin                : false,
            problems                : [],
            checkboxStatus          : false
         }
         this.handleCheckBoxCopyToRegistrar = this.handleCheckBoxCopyToRegistrar.bind(this);
         this.handelInputRegistrarData      = this.handelInputRegistrarData.bind(this);
         this.handelInputUserData           = this.handelInputUserData.bind(this);
         this.runAfterEveryEvent            = this.runAfterEveryEvent.bind(this);
         this.handleCheckBox                = this.handleCheckBox.bind(this);
         this.handleSelect                  = this.handleSelect.bind(this);
    }

    handleCheckBoxCopyToRegistrar(e){
        let pass = handleCheckBoxCopyToRegistrarEx(e, this.state.userInfo, this.state.domainRegistrar);
        this.setState(pass,this.runAfterEveryEvent());
    }

    handleCheckBox(e){
        //e.persist()
        const {userInfo, domainRegistrar} = this.state;
        const problems = verifyInputs(userInfo, domainRegistrar, this.props.loggedin);
            if (e.target.checked) {
                if(problems.length === 0){
                    console.log(this.state.checkboxStatus);
                    let stateVal = handleCheckBoxEx(e, this.props.saveToDB, userInfo, domainRegistrar);
                    this.setState(stateVal,()=>{
                        this.runAfterEveryEvent(); 
                        this.setState({
                            problems: [],
                            showProceedBtn  : true,
                            checkboxStatus  : true
                        })});
                }else if(problems.length !== 0){
                    console.log(this.state.checkboxStatus);
                    this.setState({
                        problems        : problems,
                        showProceedBtn  : false,
                        checkboxStatus  : ""
                    })
                    console.log(problems);
                }
            }else{
                console.log(this.state.checkboxStatus);
                this.setState({
                    problems        : problems,
                    showProceedBtn  : false,
                    checkboxStatus  : ""
                })
            }
    }

    handelInputUserData(e){
        let originalUserInfo = handelInputUserDataEx(e, this.state.userInfo);
        this.setState({userInfo : originalUserInfo});
    }

    handelInputRegistrarData(e){
        let domainRegistrar = handelInputRegistrarDataEx(e, this.state.domainRegistrar);
        this.setState({domainRegistrar : domainRegistrar},()=>{
            this.runAfterEveryEvent({"domainRegistrar" : domainRegistrar});
        });
    }

    runAfterEveryEvent(){
        let {checkBoxAgreement/*, userInfo, domainRegistrar*/} = this.state;    //TODO: verify form
        if (checkBoxAgreement){ 
            //console.log(this.state.checkboxStatus);
            this.setState({
                showProceedBtn  : true,
                checkboxStatus  : true
            }) 
        }
    }

    handleSelect(e){
        const name  = e.target.name;
        const value = e.target.value;
        let pass = {};
        pass[name] = value;
        if (value === "Create account" && name === "loginOrCreateUser") {
            this.setState({selectNewuser : true});
        } else if(value === "Login" && name === "loginOrCreateUser") {
            this.setState({selectNewuser : false});
        }
        //console.log(pass);
    }

    componentDidMount(){
        let temp = this.props.loggedin;
        let domainRegistrar;
        
        if(this.props.loggedin){
            domainRegistrar = {
                name        : "",
                surname     : "",
                email       : "",
                phoneNumber : "",
                address     : "",
                address2    : "",
                city        : "",
                state       : "",
                country     : "",
                zip         : "",
                domainName  : this.props.domainName}
        }else{
            domainRegistrar = {
                name        : "",
                surname     : "",
                email       : "",
                phoneNumber : "",
                address     : "",
                address2    : "",
                city        : "",
                state       : "",
                country     : "",
                zip         : "",
                domainName  : this.props.domainName}
        }
        this.setState({
            loggedin        : temp,
            domainRegistrar : domainRegistrar
        });
    }

    render() { 
        const {name, surname, email, phoneNumber, address, 
                address2, city, state, country, zip} = this.state.domainRegistrar;
       
        if(this.props.loggedin){
            return (
                <div className="div-scroll">
                    <p>Logged in as {this.props.currentUser}</p><hr/>
                    <RegistrarForm
                        handelInputRegistrarData        = {this.handelInputRegistrarData}
                        name                            = {name}
                        surname                         = {surname}
                        email                           = {email}
                        phoneNumber                     = {phoneNumber}
                        address                         = {address}
                        address2                        = {address2}
                        city                            = {city}
                        state                           = {state}
                        country                         = {country}
                        zip                             = {zip}
                    />
                    {
                        this.state.problems.length > 0 ?
                            <React.Fragment>
                                {this.state.problems.map((val, index) =>(
                                    <small key={val+index} className="form-text smallText">{val}</small>
                                ))}
                            </React.Fragment>
                        :
                            ""
                    }
                    <CheckboxAndLabel
                        labelName   = "agreementLabel"
                        labelValue  = "Agree and consent to the User agreement and its policies found in following links: "
                        labelValue2 = "Agreement Email"
                        inputValue  = {name}
                        inputId     = "regridCheck"
                        hrefText    = " Domain Agreement"
                        hrefText2   = " Email Agreement"
                        hrefVal     = "/agreementdomain"
                        hrefVal2    = "/agreementemail"
                        target      = "_blank"
                        inputName   = "checkBoxAgreement"
                        checkboxStatus = {this.state.showProceedBtn}
                        onChangeFunc= {this.handleCheckBox}
                    />
                    {this.state.showProceedBtn ?
                    <Link 
                        type="button" 
                        to={'/registrationConfirmPage'} 
                        className="btn btn-primary">Proceed
                    </Link>
                    : ""}

                <hr/><br/>
                </div>
            )
        }else{
        return ( 
            <div className="div-scroll">
                <InputSelection 
                    labelName = "loginOrcreateAccount"
                    labelValue = "Login Or Create new account"
                    inputId = "loginOrCreateUser"
                    optionsKeys = {[['Create account','Create account'], ['Login','Login']]}
                    onChangeFunc = {this.handleSelect}
                    inputClassName = "form-control custom-select col-md-11 col-sm-11 col-lg-11"/>

                {!this.state.selectNewuser ? 
                        <LoginComp
                            register    = {true}
                            handleLogin = {this.props.handleLogin}
                        />
                    :
                <NewUserFrom 
                    userInfo                        = {this.state.userInfo}
                    handelInputUserData             = {this.handelInputUserData}
                    handleCheckBoxCopyToRegistrar   = {this.handleCheckBoxCopyToRegistrar}
                    checkBoxCopyToRegistrar         = {this.state.checkBoxCopyToRegistrar}/> }

                <RegistrarForm
                    handelInputRegistrarData        = {this.handelInputRegistrarData}
                    name                            = {name}
                    surname                         = {surname}
                    email                           = {email}
                    phoneNumber                     = {phoneNumber}
                    address                         = {address}
                    address2                        = {address2}
                    city                            = {city}
                    state                           = {state}
                    country                         = {country}
                    zip                             = {zip}
                />
                {
                    this.state.problems.length > 0 ?
                        <React.Fragment>
                            {this.state.problems.map((val, index) =>(
                                <small key={val+"_"+index} className="form-text smallText">{val}</small>
                            ))}
                        </React.Fragment>
                    :
                        ""
                }
                <CheckboxAndLabel
                    labelName   = "agreementLabel"
                    labelValue  = "Agree and consent to the User agreement and its policies found in following links: "
                    labelValue2 = "Agreement Email"
                    inputValue  = {name}
                    inputId     = "regridCheck"
                    hrefText    = " Domain Agreement"
                    hrefText2   = " Email Agreement"
                    hrefVal     = "/agreementdomain"
                    hrefVal2    = "/agreementemail"
                    target      = "_blank"
                    inputName   = "checkBoxAgreement"
                    checkboxStatus = {this.state.showProceedBtn}
                    onChangeFunc= {this.handleCheckBox}
                />
                {this.state.showProceedBtn ?
                    <Link 
                    type = "button" 
                    to = {'/registrationConfirmPage'} 
                    className = "btn btn-primary">Proceed</Link>
                    : ""}

                <hr/><br/>
            </div> );
        }
    }
}
 
export default RegisterForm;

//'<a href="/agreementemail" target="_blank">Agreement</a>'