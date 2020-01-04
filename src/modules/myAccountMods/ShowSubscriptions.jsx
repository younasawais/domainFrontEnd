import React, { Component } from 'react';
import axios from 'axios';

class ShowSubscriptions extends Component {
    constructor(props){
        super(props);
        this.state = { 
            productData: {
                "domainName": "studiotoronto.com",
                "emailAddress": "info@studiotoronto.com",
                "domainPrice" : "25$ / year",
                "emailPrice" : "250 / year",
            },
            subscriptions : [],
            showYesNo : ""
         }
         this.handleCancel  = this.handleCancel.bind(this);
         this.handleNo      = this.handleNo.bind(this);
    }

    async componentDidMount(){  
        let token;
        try {
            token = sessionStorage.getItem("token");
            const {data : response} = await axios.post(process.env.backendAPI + '/getUserSubscriptions',{"token" : token}); 
            console.log(response);
            this.setState({
                subscriptions : [...response]
            });
        } catch (error) {
            
        }
    }

    handleCancel(index){
        console.log(index);
        this.setState({
            showYesNo    : index
        })
    }

    handleNo(){
        this.setState({
            showYesNo    : ""
        })
    }

    async handleYes(){
        const token = sessionStorage.getItem("token");
        let showSend = {
            "token"         : token,
            "deleteIndex"   : this.state.showYesNo,
            "subscriptionId": this.state.subscriptions[this.state.showYesNo].subscriptionId
        };
        console.log(showSend);
        const {data : response} = await axios.post(process.env.backendAPI + '/deleteSubscription',{
            "token"         : token,
            "deleteIndex"   : this.state.showYesNo,
            "subscriptionId": this.state.subscriptions[this.state.showYesNo].subscriptionId
        }); 
        console.log(response);
        let subscriptions = this.state.subscriptions;
        subscriptions.splice(this.state.showYesNo,1);
        console.log(subscriptions);
        this.setState({
            subscriptions    : subscriptions
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.state.subscriptions.map((subscription, index)=>{
                    return(
                    <React.Fragment key={index}>
                        <h5>Subsciprion {index}</h5>
                        <dl className="row">
                            <dt className="col-sm-3">Name: </dt>
                            <dd className="col-sm-9">{subscription.payments[0].comment}</dd>
                            <dt className="col-sm-3">Price:</dt>
                            <dd className="col-sm-9">  {subscription.payments[0].amount/100 + " " + 
                                                        subscription.payments[0].currency.toUpperCase() + " / " +  
                                                        subscription.recurringPeriod} </dd>
                            <dt className="col-sm-3">Registration Date: </dt>
                            <dd className="col-sm-9">{subscription.createdDate}</dd>
                        </dl>
                        <button 
                            className="btn btn-danger"
                            key={subscription+"_"+index} 
                            onClick={()=>{this.handleCancel(index)}}>
                                Cancel subscription</button>
                        {
                            this.state.showYesNo === index ?
                            <React.Fragment>
                                <p>Are you sure you want to cancel your subscription?</p>
                                <button style={{marginRight: "5px"}} className="btn btn-warning" onClick={()=>{this.handleYes()}}>Yes</button>
                                <button className="btn btn-info" onClick={()=>{this.handleNo()}}>No</button>
                            </React.Fragment>
                            :
                                ""
                        }
                        <hr/>
                    </React.Fragment>
                    )
                })} 
            </React.Fragment>
            );
    }
}
 
export default ShowSubscriptions;

    // async componentDidMount(){   TODO: show all subscriptions , with payment for every subsciption
    //     let token;
    //     try {
    //         token = sessionStorage.getItem("token");
    //         const {data : response} = await axios.post(process.env.backendAPI + '/getSubscriptions',{"token" : token}); 
    //         console.log(response);
    //         const {subscriptions} = response;
    //         this.setState({
    //             productData : {
    //                 //TODO
    //             }
    //         });
    //     } catch (error) {
            
    //     }
    // }

    /*
        - Show subscription names
        - show price
        - Show cancel button
        - yeh "are you sure? with yes & no button"
    */
   