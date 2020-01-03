import React, { Component } from 'react';

class InputSelection extends Component {
    state = {  }
    render() { 
        let {inputClassName,labelName, labelValue, 
               inputId, optionsKeys, onChangeFunc, selectName} = this.props;
               if(typeof selectName === "undefined"){
                   selectName = inputId};
        return ( 
            <React.Fragment>
                <div className="form-group mb-3">
                    <label name={labelName}>{labelValue}</label>
                    <select name={selectName} id={inputId} className={inputClassName} onChange={onChangeFunc}>

                        {optionsKeys.map(option =>(
                            <option key={option[1]} value={option[1]}>{option[0]}</option>
                        ))}
                    </select>
                </div>
            </React.Fragment>
         );
    }
}
 
InputSelection.defaultProps = {
    inputType: "text",
    inputClassName: "form-control"
}

export default InputSelection;