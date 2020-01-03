import React, { Component } from 'react';
import MenuButton from './menuButton';

class MenuButtons extends Component {
    constructor(props){
        super(props);
        this.state = { 
            buttons : {
                name : ["userDetails", "domainDetails","subscriptions"],
                text : ["User Details", "Domain Details","Subscriptions"],
            }
         }
    }

    render() { 
        return ( 
            <React.Fragment>
                <ul className="nav nav-tabs">
                    <MenuButton 
                        buttonNames = {this.state.buttons.name}
                        buttonText  = {this.state.buttons.text}
                        onClickFunc = {this.props.onClickFunc}
                    />
                </ul>
            </React.Fragment>
            );
    }
}
 
export default MenuButtons;
