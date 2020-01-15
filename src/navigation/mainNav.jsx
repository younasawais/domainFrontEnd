import React, {Component} from 'react';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import ServicesPage             from "../pages/servicesPage.jsx";
import FrontPage                from "../pages/frontPage.jsx";
import LoginPage                from "../pages/loginPage.jsx";
import ContactPage              from "../pages/contactPage.jsx";
import RegisterPage             from "../pages/registerPage.jsx";
import RegistrationConfirmPage  from "../pages/registrationConfirmPage.jsx";
import GeneralMessagesPage      from "../pages/generalMessagesPage.jsx";
import MyAccountPage            from "../pages/myAccountPage.jsx";
import PaymentPage              from './../pages/paymentPage';
import ForgotPass               from './../modules/forgotPass';
import NewPass                  from '../pages/newPass';
import jwtDecode                from 'jwt-decode';
import AgreementDomain          from './../pages/agreementDomain';
import AgreementEmail           from './../pages/agreementEmail';
import QnA                      from './../pages/qnaPage';

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productData         : {},
            userInfo            : {},
            domainRegistrar     : {},
            currentUser         : "",
            loggedin            : false
         }
        this.saveObjectInState  = this.saveObjectInState.bind(this);
        this.saveToDB           = this.saveToDB.bind(this);
        this.getCurrentUser     = this.getCurrentUser.bind(this);
        this.handleLogout       = this.handleLogout.bind(this);
        this.handleLogin        = this.handleLogin.bind(this);
    }
    
    handleLogin(){
        console.log("main menu handlelogin");
        let token, user;
        try {
            token = sessionStorage.getItem("token");
            user = jwtDecode(token);
            this.setState({
                currentUser : user.email,
                loggedin : true
            });
        } catch (error) {
            this.setState({
                loggedin : false
            });
        }
    }

    saveToDB(objUserDetails){
        const {domainRegistrar, userInfo} = objUserDetails;
        let pass = {"domainRegistrar" : domainRegistrar, "userInfo" : userInfo};
        this.setState(pass);
    }
    saveObjectInState(productData){
        this.setState(productData);
    }

    getCurrentUser(user){
        this.setState({
            currentUser : user.email
        })
    }

    handleLogout(){
        sessionStorage.removeItem("token");
        this.setState({
            currentUser : "",
            loggedin    : false
        })
    }

    componentDidMount(){
        let token, user;
        try {
            token = sessionStorage.getItem("token");
            user = jwtDecode(token);
            this.setState({
                currentUser : user.email,
                loggedin : true
            });
        } catch (error) {
            this.setState({
                loggedin : false
            });
        }
        // console.log(token);
        // console.log(user);
    }

    render() {  
        //console.log(this.state.loggsedin);
        console.log(process.env);
        const {props} = this;
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark nav">
                <a className="navbar-brand" href="/">Qouh</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="btn btn-outline-primary toTheLeft a-link" to="/home">Home</NavLink>
                        <NavLink className="btn btn-outline-primary toTheLeft a-link" to="/services">Services</NavLink>
                        <NavLink className="btn btn-outline-primary toTheLeft a-link" to="/qna">Q&A</NavLink>
                        <NavLink className="btn btn-outline-primary toTheLeft a-link" to="/contact">Contact</NavLink>
                    {this.state.loggedin ?
                        <React.Fragment>
                            <NavLink className="btn btn-outline-primary toTheLeft a-link" to="/myAccountPage">My Account</NavLink>
                            <NavLink className="btn btn-outline-primary toTheLeft a-link" to="/home" onClick={this.handleLogout}>Logout</NavLink>
                        </React.Fragment> 
                        :
                        <NavLink className="btn  btn-outline-primary a-link toTheRight" to="/login">Login</NavLink>
                    } 
                    </div>
                </div>
                </nav>
                <div className="container div-scroll">
                    <Switch>
                        <Route
                            path="/services"
                            render={()=><ServicesPage {...props} />}
                        />
                        <Route
                            path="/contact"
                            render={()=><ContactPage {...props}/>}
                        />
                        <Route
                            path="/login"
                            render={()=><LoginPage {...props}
                            getCurrentUser={this.getCurrentUser}/>}
                        />
                        <Route
                            path="/registrationConfirmPage"
                            render={()=><RegistrationConfirmPage {...props}
                                domainRegistrar={this.state.domainRegistrar}
                                userInfo = {this.state.userInfo}
                                productData = {this.state.productData}
                                loggedin    = {this.state.loggedin}
                                currentUser = {this.state.currentUser} />}
                        />
                        <Route
                            path="/register"
                            render={()=><RegisterPage {...props} 
                                saveToDB    = {this.saveToDB}
                                loggedin    = {this.state.loggedin}
                                currentUser = {this.state.currentUser}
                                handleLogin = {this.handleLogin}
                                domainName  = {this.state.productData.domainName}
                                />}
                        />
                        <Route
                            path="/generalMessagesPage"
                            render={()=><GeneralMessagesPage {...props}/>}
                        />
                        <Route
                            path="/myAccountPage"
                            render={()=><MyAccountPage {...props}/>}
                        />
                        <Route
                            path="/payment"
                            render={()=><PaymentPage {...props}
                                domainRegistrar={this.state.domainRegistrar}
                                userInfo = {this.state.userInfo}
                                productData = {this.state.productData} 
                                currentUser = {this.state.currentUser}/>}
                        />
                        <Route
                            path="/forgotPass"
                            render={()=><ForgotPass {...props}/>}
                        />
                        <Route
                            path="/qna"
                            render={()=><QnA {...props}/>}
                        />
                        <Route
                            path="/agreementdomain"
                            render={()=><AgreementDomain/>}
                        />
                        <Route
                            path="/agreementemail"
                            render={()=><AgreementEmail/>}
                        />
                        <Route
                            path="/newpass/:token/"
                            render={({
                                location,
                                match
                            })=><NewPass {...props} match={match}/>}
                        />
                        <Route
                            path="/" exact
                            render={()=><FrontPage {...props} saveObjectInState={this.saveObjectInState}/>}
                        />
                        <Redirect from="/home" to="/" />
                    </Switch>
                </div>
            </React.Fragment>
         );
    }
}

export default MainNav;



// "awais": {
//     "heroku-postbuild": "npm run build",
//     "start2": "react-scripts start",
//     "start": "serve -s build"
//   },