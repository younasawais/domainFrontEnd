import React, { Component } from 'react';

class TextareaAndLabel extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showSmallText : false,
            smallTextValue: ""
        };
        this.conditions     = this.conditions.bind(this);
        this.onlyComment    = this.onlyComment.bind(this);
        this.onlyText       = this.onlyText.bind(this);
    }

    conditions(e){
        let {value} = e.target;
        if      (this.props.inputType === "text"){this.onlyText(value);}
        else if (this.props.inputType === "comment"){this.onlyComment(value);}
    }

    render() { 
        let {inputClassName,labelName, labelValue,  inputId, inputValue,
            placeholder, divClassname, inputRows, 
            onChangeFunc, autocomplete, name} = this.props;
            if(typeof name === "undefined" ){
                name = inputId
            }
        return ( 
            <React.Fragment>
                <div className={divClassname}>
                    <label name={labelName}>{labelValue}</label>
                    <textarea 
                        className           = {inputClassName}
                        placeholder         = {placeholder}
                        id                  = {inputId}
                        name                = {name}
                        value               = {inputValue}
                        autoComplete        = {autocomplete}
                        rows                = {inputRows}
                        onChange            = {onChangeFunc}
                        onBlur              = {this.conditions}
                        >
                    </textarea>
                     {
                         this.state.showSmallText ?
                         <small className="form-text smallText">{this.state.smallTextValue}</small>
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
    
}

TextareaAndLabel.defaultProps = {
    inputValue      : "",
    inputType       : "text",
    inputId         : "exampleFormControlTextarea1",
    inputClassName  : "form-control",
    divClassname    : "form-group",
    autocomplete    : "",
    inputRows       : "3",
    onChangeFunc    : (()=>{})
}

export default TextareaAndLabel;
