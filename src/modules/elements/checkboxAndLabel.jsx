import React, { Component } from 'react';

class CheckboxAndLabel extends Component {
    state = {  }
    render() { 
        let {labelName, labelValue, inputId, divClassname, onChangeFunc, 
                inputName, hrefVal, hrefVal2, target,hrefText,hrefText2, checkboxStatus} = this.props;
        if(typeof inputName === 'undefined'){inputName = inputId};
        
        return ( 
            <React.Fragment>
                <div className={divClassname}>
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name={inputName}
                        onChange={onChangeFunc}
                        id={inputId} 
                        // defaultChecked={checkboxStatus}
                        checked={checkboxStatus}
                        />
                    {
                        hrefVal?
                            hrefVal2?
                            <label 
                                className="form-check-label" 
                                name={labelName}
                                >{labelValue}
                                    <a href={hrefVal} target={target}>{hrefText}</a> & <a href={hrefVal2} target={target}>{hrefText2}</a>
                            </label>
                            :

                            <label 
                                className="form-check-label" 
                                name={labelName}
                                ><a href={hrefVal} target={target}>{labelValue}</a>
                            </label>
                        :
                        <label
                        className="form-check-label" 
                        name={labelName}>
                            {labelValue}
                        </label>
                    }
                </div>
            </React.Fragment>
         );
    }
}
 
CheckboxAndLabel.defaultProps = {
    divClassname: "form-check",
    onChangeFunc: (()=>{}),
    hrefVal : false,
    hrefVal2 : false,
    labelValue2: false,
    target:"",
    hrefText: false,
    hrefText2: false,
    checkboxStatus : false
}

export default CheckboxAndLabel;