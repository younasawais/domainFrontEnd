import React, { Component } from 'react';
import MenuButtons from './myAccountMods/menuButtons';
import ShowUserDetails from './myAccountMods/ShowUserDetails';
import ShowDomainDetails from './myAccountMods/ShowDomainDetails';
import ShowSubscriptions from './myAccountMods/ShowSubscriptions';

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showModule : "userDetails"
         }
        this.handleBtnShowMod = this.handleBtnShowMod.bind(this);
    }
    
    handleBtnShowMod(e){
        const {name} = e.target;
        this.setState({showModule : name});
    }


    render() { 
        return ( 
            <React.Fragment>
                <MenuButtons onClickFunc = {this.handleBtnShowMod} />
                <div className="div-scroll">
                {
                    this.state.showModule === "userDetails" ?
                    <ShowUserDetails />
                    :this.state.showModule === "domainDetails" ?
                    <ShowDomainDetails />
                    :this.state.showModule === "subscriptions" ?
                    <ShowSubscriptions /> : ""
                }
                </div>
            </React.Fragment>
            );
    }
}
 
export default MyAccount;