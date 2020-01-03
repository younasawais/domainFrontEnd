import React from 'react';

const MenuButton = (props) =>{
    const {buttonNames, buttonText, onClickFunc} = props;
    var i = -1;

    const showResult = buttonNames.map(function(buttonName){
        i++;
        return(
            <li className="nav-item" key={buttonName + "_" + i}>
                <button onClick={onClickFunc} type="button" name={buttonName} className="btn btn-link">{buttonText[i]}</button>
            </li>
        )
    })

    return(
        <React.Fragment>
            {showResult}
        </React.Fragment>
    )
}
 
export default MenuButton;