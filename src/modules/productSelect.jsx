import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LabelAndInput from './elements/labelAndInput';
import InputSelection from './elements/inputSelection';
import PriceCalc from './priceCalc';
import axios from 'axios';
import DomainSearchBar from './productSelectMods/domainSearchBar';
import CheckBoxesDomain from './productSelectMods/checkBoxesDomain';
import ProductInfo from './productSelectMods/productinfo';
import {domainVerify, onlyEmailElias} from './registerFormMods/registerFormFunctions';
import PdfUpload from './productSelectMods/pdfupload';

class ProductSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBoxNewDomain   : "",
            checkBoxOwnedDomain : "",
            domainNameInput     : "",
            domainNameAvailable : "",
            customEmail         : "",
            domainForward       : "",
            btnCheck            : false,
            showProceedBtn      : false,
            checkBoxEmailSetup  : true,
            errorMessageUpload  : false,
            homePage            : false,    //if true, hide other products,
            domainName          : "Press CHECK",
            domainExt           : ".com",
            domainOptions       : "blanc",
            price               : {"registerDomain" : 0, "yearlyPrice" : 220},
            tax                 : 0.13,
            fileToUpload        : null,
            fileName            : "",
            loading             : false
        }
         this.handleShowProceedBtn  = this.handleShowProceedBtn.bind(this);
         this.checkBoxOwnedDomain   = this.checkBoxOwnedDomain.bind(this);
         this.inputDomainForward    = this.inputDomainForward.bind(this);
         this.checkBoxNewDomain     = this.checkBoxNewDomain.bind(this);
         this.pdfUploadOnChange     = this.pdfUploadOnChange.bind(this);
         this.pdfUploadOnChange     = this.pdfUploadOnChange.bind(this);
         this.saveObjectInState     = this.saveObjectInState.bind(this);
         this.calculatePrice        = this.calculatePrice.bind(this);
         this.inputEmailVal         = this.inputEmailVal.bind(this);
         this.inputDomain           = this.inputDomain.bind(this);
         this.checkDomain           = this.checkDomain.bind(this);
         this.handleEnter           = this.handleEnter.bind(this);
    }

    async pdfUploadOnChange(event){
        const selectedFile = event.target.files[0];
        let regex = /.((pdf)|(doc)|(docx)|(jpg))$/;
        if(selectedFile.size < 5000000 && regex.test(selectedFile.name)){
            const data = new FormData() ;
            data.append('file', selectedFile, selectedFile.name);
            await axios.post(process.env.backendAPI+"/uploadpdf",data);
            this.setState({
                errorMessageUpload : false,
                fileName    : selectedFile.name
            }, this.handleShowProceedBtn({fileName : selectedFile.name}));
        }else{
            this.setState({
                errorMessageUpload : true
            })
        }
    }

    calculatePrice(statePass){
        let products = {"number":[],"name": [],"price": [], "tax": [], "total": []}
        let {checkBoxNewDomain, checkBoxEmailSetup, domainName, customEmail, price} = this.state;
        
        if(statePass.hasOwnProperty('checkBoxEmailSetup')){checkBoxEmailSetup = statePass.checkBoxEmailSetup;}
        if(statePass.hasOwnProperty('customEmail')){customEmail = statePass.customEmail;}
        if(statePass.hasOwnProperty('checkBoxNewDomain')){checkBoxNewDomain = statePass.checkBoxNewDomain;}

        if(checkBoxNewDomain){
            products["number"][0]   = 0;
            products["name"][0]     = "Registration "+ domainName +" yearly";
            products["price"][0]    = price.registerDomain;
            products["tax"][0]      = price.registerDomain*this.state.tax; 
            products["total"][0]    = price.registerDomain * this.state.tax + price.registerDomain;
        }else{
            products["number"][0]   = 0;
            products["name"][0]     = "No Domain name selected";
            products["price"][0]    = 0;
            products["tax"][0]      = 0;
            products["total"][0]    = 0;
        }
    
        if(checkBoxEmailSetup){
            products["number"][1]   = 1;
            products["name"][1]     = "Email Setup & maintenance " + customEmail + "@" +domainName + " yearly";
            products["price"][1]    = price.yearlyPrice;
            products["tax"][1]      = price.yearlyPrice * this.state.tax;
            products["total"][1]    = price.yearlyPrice * this.state.tax + price.yearlyPrice;
        }
        return products;
    }

    handleEnter(e){if (e.key === 'Enter') {this.checkDomain()}}

    async checkDomain(){
        this.setState({
            loading : true
        });
        let domain = this.state.domainNameInput + this.state.domainExt;
        domain = domain.replace('www.','');
        domain = domain.replace('http://','');
        domain = domain.replace('https://','');
        let valid = domainVerify(domain);
        console.log("Valid? :" + valid);
        if(valid){
            console.log("Domainstructure is valid : " + domain);
            const {data} = await axios.post(process.env.backendAPI+"/checkdomain",{"domainName" : domain});
            this.setState({
                domainNameAvailable : data.domainNameAvailable, 
                domainName : domain,
                btnCheck : true,
                loading : false
            });
        }else{
            console.log("Domainstructure has some issues : " + domain);
            this.setState({
                loading : false
            })
        }
    }

    inputEmailSetup(e){
        let statePass = {};
        if(e.target.checked){
            statePass= {checkBoxEmailSetup : true};
        }else{
            statePass = {checkBoxEmailSetup : false};
        }
        this.handleShowProceedBtn(statePass);
    }

    inputEmailVal(e){
        let statePass = {"customEmail" : e.target.value}
        this.handleShowProceedBtn(statePass);
        this.setState(statePass);
    }

    inputDomainForward(e){
        let statePass = {"domainForward" : e.target.value}
        this.handleShowProceedBtn(statePass);
    }

    inputDomain(e){
        const name          = e.target.name;
        const value         = e.target.value;
        let originalState   = this.state;
        originalState[name] = value;
        this.setState({
            originalState
        });
    } 

    checkBoxNewDomain(e){
        let checkBoxNewDomain = e.target.checked;
        let checkBoxOwnedDomain = this.state.checkBoxOwnedDomain;
        let statePass = {};
        if (checkBoxOwnedDomain && checkBoxNewDomain) {
            statePass = {
                checkBoxNewDomain   : checkBoxNewDomain,
                checkBoxOwnedDomain : ""
            };
        }else{
            statePass = {
                checkBoxNewDomain   : checkBoxNewDomain
            };
        }
        this.handleShowProceedBtn(statePass);
    }

    checkBoxOwnedDomain(e){
        let checkBoxOwnedDomain = e.target.checked;
        let checkBoxNewDomain = this.state.checkBoxNewDomain;
        let statePass = {};
        if (checkBoxOwnedDomain && checkBoxNewDomain) {
            statePass = {
                checkBoxOwnedDomain   : checkBoxOwnedDomain,
                checkBoxNewDomain : ""
            };
        }else{
            statePass = {
                checkBoxOwnedDomain   : checkBoxOwnedDomain,
            };
        }
        this.handleShowProceedBtn(statePass);
    }

    handleShowProceedBtn(statePass){
        let {showProceedBtn, checkBoxNewDomain, checkBoxOwnedDomain, 
             checkBoxEmailSetup, customEmail} = this.state;

        /**** Check if state need to be update ****/
        if(statePass.hasOwnProperty('checkBoxEmailSetup')){checkBoxEmailSetup = statePass.checkBoxEmailSetup;}
        if(statePass.hasOwnProperty('customEmail')){customEmail = statePass.customEmail;}
        if(statePass.hasOwnProperty('checkBoxNewDomain')){checkBoxNewDomain = statePass.checkBoxNewDomain;}
        if(statePass.hasOwnProperty('checkBoxOwnedDomain')){checkBoxOwnedDomain = statePass.checkBoxOwnedDomain;}

        /**** Show/Hide Proceed Button ****/
        if ((checkBoxNewDomain || checkBoxOwnedDomain) && checkBoxEmailSetup && onlyEmailElias(customEmail)) {
            showProceedBtn = true;
        } else if ((checkBoxNewDomain || checkBoxOwnedDomain) && checkBoxEmailSetup && (customEmail !== "") && onlyEmailElias(customEmail)) {
            showProceedBtn = true;
        } else {
            showProceedBtn = false;
        }

        statePass.showProceedBtn = showProceedBtn;
        this.saveObjectInState(statePass);
        this.setState(statePass);
    }

    render() { 
        return ( 
            <React.Fragment>
                <DomainSearchBar 
                    inputSelectExt          = {this.inputSelectExt}
                    checkDomain             = {this.checkDomain}
                    inputDomain             = {this.inputDomain}
                    domainName              = {this.state.domainName}
                    domainNameAvailable     = {this.state.domainNameAvailable}
                    btnCheck                = {this.state.btnCheck}
                    handleEnter             = {this.handleEnter}
                    loading                 = {this.state.loading}
                    />
                {
                    this.state.btnCheck ? 
                    <CheckBoxesDomain 
                        checkBoxEmailSetup      = {this.state.checkBoxEmailSetup}
                        inputEmailSetup         = {this.inputEmailSetup}
                        checkBoxOwnedDomainfunc = {this.checkBoxOwnedDomain}
                        checkBoxOwnedDomain     = {this.state.checkBoxOwnedDomain}
                        domainName              = {this.state.domainName}
                        checkBoxNewDomain       = {this.state.checkBoxNewDomain}
                        checkBoxNewDomainFunc   = {this.checkBoxNewDomain}
                        domainNameAvailable     = {this.state.domainNameAvailable}
                    /> : ""
                }
                {this.state.checkBoxEmailSetup && this.state.btnCheck ? 
                <LabelAndInput 
                    labelName = "customEmail1"
                    labelValue = "Custom Email"
                    inputId = "inputCustomEmail1" 
                    inputType = "emailElias"
                    inputValue   = {this.state.customEmail}
                    placeholder = "Custom Email"
                    divClassname = "form-group mb-3"
                    staticText = {this.state.checkBoxEmailSetup}
                    staticTextVal = {"@"+this.state.domainName}
                    onChangeFunc = {this.inputEmailVal}
                />

                : ""}
                {
                this.state.checkBoxNewDomain ||  this.state.checkBoxOwnedDomain ?

                <InputSelection
                    labelName = "domainjob"
                    labelValue = {"What would you like to show on "+ this.state.domainName +"?"} 
                    inputId   = "inputDomainJob"
                    onChangeFunc = {this.inputDomain}
                    selectName = 'domainOptions'
                    divClassname = "form-group mb-3"
                    inputClassName = "form-control custom-select"
                    optionsKeys   = {[["Leave blanc",'blanc'], 
                                      ['Show PDF resume/document', 'pdf'], 
                                      ['Forward to my linkedin profile', 'linkedin']]}
                /> : ""}
                {this.state.domainOptions === "linkedin" &&
                <LabelAndInput 
                    labelName = "labelLinkedinLink"
                    labelValue = "Linked profile link"
                    inputId = "domainForward"
                    inputValue   = {this.state.domainForward}
                    inputType   = "link"
                    placeholder = "Linked profile link"
                    divClassname = "form-group mb-3"
                    smallText = "(Or any other link)"
                    smallId = "domainAvailable"
                    onChangeFunc = {this.inputDomainForward}
                />}
                {this.state.domainOptions === "pdf" ?
                <React.Fragment>
                    <PdfUpload 
                        pdfUploadOnChange = {this.pdfUploadOnChange}
                        errorMessage = {this.state.errorMessageUpload}
                    />
                </React.Fragment> :
                ""
                }
                {
                this.state.checkBoxNewDomain ||  this.state.checkBoxOwnedDomain ?
                <PriceCalc 
                    newDomain = {this.state.checkBoxNewDomain}
                    ownDomain = {this.state.checkBoxOwnedDomain}
                    checkBoxEmailSetup = {this.state.checkBoxEmailSetup}
                    domainName = {this.state.domainName}
                    customEmail = {this.state.customEmail}
                    total   = {this.state.total}
                    price   = {this.state.price}
                    calculatePrice = {this.calculatePrice}
                /> : ""}

                {  this.state.showProceedBtn ?
                    <Link 
                        type="button" 
                        to={'/register'} 
                        className="btn btn-primary"
                    >Proceed</Link> : ""
                }
                {
                    this.state.btnCheck ?
                    "":
                    <ProductInfo />
                }
            </React.Fragment>
        );
    }

    saveObjectInState(statePass){
        let {domainName, checkBoxNewDomain, customEmail, domainForward, domainOptions, fileName} = this.state;
        if(statePass.hasOwnProperty('customEmail')){customEmail = statePass.customEmail;}
        if(statePass.hasOwnProperty('checkBoxNewDomain')){checkBoxNewDomain = statePass.checkBoxNewDomain;}
        let products = this.calculatePrice(statePass);
        let domainRegistration = (checkBoxNewDomain === "true" );
        let pdfTitle;
        if(typeof statePass.fileName === "undefined"){
            pdfTitle = fileName
        }else{
            pdfTitle = statePass.fileName
        }
        
        const emailAddress = customEmail + "@" + domainName;
        const productData = {
            domainName              : domainName,
            emailAddress            : emailAddress,
            domainRegistration      : domainRegistration,
            totalPrice              : products,
            domainForward           : domainForward,
            domainOptions           : domainOptions,
            fileName                : pdfTitle
        }
        
        this.props.saveObjectInState({
            productData : productData
        });
        
    }
}
 
export default ProductSelect;