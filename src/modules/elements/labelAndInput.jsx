import React, { Component } from 'react';

class LabelAndInput extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showSmallText : false,
            smallTextValue: ""
        };
        this.onlyText       = this.onlyText.bind(this);
        this.onlyEmail      = this.onlyEmail.bind(this);
        this.conditions     = this.conditions.bind(this);
        this.onlyComment    = this.onlyComment.bind(this);
        this.onlyPassword   = this.onlyPassword.bind(this);
        this.onlyEmailElias = this.onlyEmailElias.bind(this);
        this.onlyPhoneNumber= this.onlyPhoneNumber.bind(this);
    }

    conditions(e){
        let {value} = e.target;
        if      (this.props.inputType === "text"){this.onlyText(value);}
        else if (this.props.inputType === "link"){this.onlyLink(value);}
        else if (this.props.inputType === "email"){this.onlyEmail(value);}
        else if (this.props.inputType === "comment"){this.onlyComment(value);}
        else if (this.props.inputType === "password"){this.onlyPassword(value);}
        else if (this.props.inputType === "emailElias"){this.onlyEmailElias(value);}
        else if (this.props.inputType === "phoneNumber"){this.onlyPhoneNumber(value);}
    }

    render() { 
        let {inputClassName,labelName, labelValue, inputType, inputId, inputValue,
            placeholder, divClassname, smallText, smallId, staticText, 
            onChangeFunc, staticTextVal, autocomplete, name} = this.props;
            if(typeof name === "undefined" ){
                name = inputId
            }
        return ( 
            <React.Fragment>
                <div className={divClassname}>
                    <label name={labelName}>{labelValue}</label>
                    <div className="input-group mb-3">
                        <input 
                            onChange            = {onChangeFunc}
                            onBlur              = {this.conditions}
                            type                = {inputType}
                            className           = {inputClassName}
                            placeholder         = {placeholder}
                            aria-label          = {placeholder}
                            value               = {inputValue}
                            id                  = {inputId}
                            name                = {name}
                            aria-describedby    = "basic-addon2" 
                            autoComplete        = {autocomplete}
                            />
                        {
                            staticText ? 
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">{staticTextVal}</span>
                            </div> : ""
                        }
                    </div>

                    <small  id={smallId} 
                            className="form-text text-muted">{smallText}</small>
                     {
                         this.state.showSmallText?
                         <small  id={smallId} 
                         className="form-text smallText">{this.state.smallTextValue}</small>
                            :
                        ""
                     }
                </div>
            </React.Fragment>
         );
    }

    onlyComment(value){
        let regex = /[^a-zA-Z0-9.,()'"?!\s]/;
        let result = regex.test(value);
        if(result && value !== ""){
            this.setState({
                showSmallText : true,
                smallTextValue: "Please don't use any special characters!"
            })
        }else{
            this.setState({
                showSmallText : false,
                smallTextValue: ""
            })
        }
    }
    
    onlyLink(value){
        let regex = /^((http:[/][/])|(https:[/][/]))?(www[.])?[a-zA-Z0-9]+[.][a-zA-Z0-9-_=+&/?.]+$/;
        let result = regex.test(value);
        if(!result && value !== ""){
            this.setState({
                showSmallText : true,
                smallTextValue: "Please check link address!"
            })
        }else{
            this.setState({
                showSmallText : false,
                smallTextValue: ""
            })
        }
    }

    onlyEmailElias(value){
        let regex = /^[a-zA-Z0-9-_.]+$/;
        let result = regex.test(value);
        if(!result && value !== ""){
            this.setState({
                showSmallText : true,
                smallTextValue: "Your email has invalid characters, please correct."
            })
        }else{
            this.setState({
                showSmallText : false,
                smallTextValue: ""
            })
        }
    }

    onlyText(value){
        let regex = /[^\s\w]/;
        let result = regex.test(value);
        if(result && value !== ""){
            this.setState({
                showSmallText : true,
                smallTextValue: "Only alphabetic & numberic characters are allowed!"
            })
        }else{
            this.setState({
                showSmallText : false,
                smallTextValue: ""
            })
        }
    }
    
    onlyEmail(value){
        let regex = /[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}/;
        let result = regex.test(value);
        if(!result && value !== ""){
            this.setState({
                showSmallText : true,
                smallTextValue: "Email address seems to be invalid, Please check!"
            })
        }else{
            this.setState({
                showSmallText : false,
                smallTextValue: ""
            })
        }
    }
    
    onlyPassword(value){
        let regex = /.{8,}/;
        let result = regex.test(value);
        if(!result && value !== ""){
            this.setState({
                showSmallText : true,
                smallTextValue: "Password should have minimum 8 charachters!"
            })
        }else{
            this.setState({
                showSmallText : false,
                smallTextValue: ""
            })
        }
    }

    onlyPhoneNumber(value){
        let regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        let result = regex.test(value);
        if(!result && value !== ""){
            this.setState({
                showSmallText : true,
                smallTextValue: "Please check your phone nr, don't forget area code!"
            })
        }else{
            this.setState({
                showSmallText : false,
                smallTextValue: ""
            })
        }
    }
}

LabelAndInput.defaultProps = {
    inputValue : "",
    inputType: "text",
    inputClassName: "form-control",
    divClassname : "form-group col-lg-4",
    staticText : false,
    staticTextVal : "",
    autocomplete : "",
    onChangeFunc : (()=>{})
}

export default LabelAndInput;
