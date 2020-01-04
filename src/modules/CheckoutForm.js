import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import LoadingSpin from './elements/loadingspin';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete  : false,
      name      : "",
      phone     : "",
      loading   : false
    };
    //this.preSubmit  = this.preSubmit.bind(this);
    this.submit     = this.submit.bind(this);
  }

  async componentDidMount(){
    if(this.props.currentUser !== ""){ // Loggedin
    const {data} = await axios.post(process.env.backendAPI+"/getUserData",{
      token : sessionStorage.getItem("token") //user token
    });
    console.log(data);
    this.setState({
      name : data.name,
      phone : data.phoneNumber
    });
    }else{

    }
  }
  
  // preSubmit(){
  //   this.setState({
  //     loading : true
  //   },this.submit)
  // }

  async submit() {
    this.setState({loading : true});
    let response; 
    let responseStripe;
    let token_id;
    /*********************** get token from struipe ***********************/
    try {
      const {productData, domainRegistrar, userInfo} = this.props;
      const {name, email, phone} = this.state;
      /*********************** create subscription through node ***********************/
      if(this.props.currentUser !== ""){ // Loggedin
        responseStripe = await this.props.stripe.createToken({
          email   : email,
          name    : name,
          phone   : phone
        });

        console.log(responseStripe);
        token_id = responseStripe.token.id;
        response = await axios.post(process.env.backendAPI+"/createSubscriptionOldUser", {
          token           : token_id,  
          userToken       : sessionStorage.getItem("token"),
          productData     : productData,
          domainRegistrar : domainRegistrar
        });
      }else{                             // new user
        responseStripe = await this.props.stripe.createToken({
          email   : userInfo.email,
          name    : userInfo.name,
          phone   : userInfo.phoneNr
        });
        token_id = responseStripe.token.id;
        console.log(responseStripe);
        response = await axios.post(process.env.backendAPI+"/createSubscriptionNewUser", {
          token           : token_id,  
          userInfo        : userInfo,
          productData     : productData,
          domainRegistrar : domainRegistrar
        });
        console.log(response);
    }} 
    catch (error) {
        console.log(error);
        this.setState({
          loading : false
        });
    }

    /****** Response ******/
    if (response.data === "active") { //TODO : get true or error from backend
      this.setState({
        complete : true
      })
      console.log("complete -> true");
      console.log(response);
    } else {
      this.setState({
        loading : false
      });
      console.log(response);
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <div className="card mb-4 shadow-sm payment-card">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Would you like to complete the purchase?</h4>
          </div>
          <div className="card-body payment-card-body">
            <CardElement />
         </div>
        </div>
        {
          this.state.loading ?
          <LoadingSpin/>
          :
          <button className="btn btn-primary" onClick={this.submit}>Purchase</button>
        }
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);