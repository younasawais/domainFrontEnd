import React from 'react';
import CheckboxAndLabel from '../elements/checkboxAndLabel';
import LabelAndInput from '../elements/labelAndInput';


const NewUserFrom = (props) =>{
    const { handelInputUserData, userInfo, handleCheckBoxCopyToRegistrar, 
        checkBoxCopyToRegistrar, showCheckBoxCopy} = props
    return(
        <React.Fragment>

                <h3>User registration details</h3>
                <div className="form-row">
                    <LabelAndInput 
                        labelName = "labelname"
                        labelValue = "* Name"
                        inputValue = {userInfo.name}
                        inputId = "name"
                        placeholder = "Name"
                        divClassname = "form-group col-lg-3 col-md-6 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                        //validated = "was-validated"
                    />
                    <LabelAndInput 
                        labelName = "labelsurname"
                        labelValue = "* Surname"
                        inputId = "surname" 
                        inputValue = {userInfo.surname}
                        placeholder = "Surname"
                        divClassname = "form-group col-lg-2 col-md-5 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "Email"
                        labelValue = "* Email"
                        inputId = "email"
                        inputType = "email"
                        inputValue = {userInfo.email}
                        placeholder = "Email"
                        divClassname = "form-group col-lg-4 col-md-7 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelPassword"
                        labelValue = "* Password"
                        inputId = "password"
                        inputType = "password"
                        inputValue = {userInfo.password}
                        placeholder = "Password"
                        autocomplete="user-password"
                        divClassname = "form-group col-lg-2 col-md-4 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelPassword"
                        labelValue = "* Retype password"
                        inputId = "password2"
                        inputValue = {userInfo.password2}
                        placeholder = "Password"
                        inputType="password"
                        autocomplete="user-password"
                        divClassname = "form-group col-lg-2 col-md-4 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelphoneNumber"
                        labelValue = "* Phone Number"
                        inputValue = {userInfo.phoneNumber}
                        inputId = "phoneNumber"
                        inputType="phoneNumber"
                        placeholder = "Phone Number"
                        divClassname = "form-group col-lg-3 col-md-4 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelAddress"
                        labelValue = "Address 1"
                        inputId = "address"
                        inputValue = {userInfo.address}
                        placeholder = "NR & Streetname"
                        divClassname = "form-group col-lg-6 col-md-11 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelAddress2"
                        labelValue = "Address 2"
                        inputId = "address2"
                        inputValue = {userInfo.address2}
                        placeholder = "Apartment, studio, or floor"
                        divClassname = "form-group col-lg-5 col-md-11 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelCity"
                        labelValue = "City"
                        inputId = "city"
                        inputValue = {userInfo.city}
                        placeholder = "City"
                        divClassname = "form-group col-lg-3 col-md-3 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelState"
                        labelValue = "State"
                        inputId = "state"
                        inputValue = {userInfo.state}
                        placeholder = "State"
                        divClassname = "form-group col-lg-3 col-md-3 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelCountry"
                        labelValue = "Country"
                        inputId = "country"
                        inputValue = {userInfo.country}
                        placeholder = "Country"
                        divClassname = "form-group col-lg-3 col-md-3 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    {/* <InputSelection
                        labelName = "labelState"
                        labelValue = "State"
                        inputId   = "state"
                        inputValue = {userInfo.state}
                        selectName   = "state"
                        optionsKeys   = {[['select','select'],["Ontario","Ontario"],["Quebec","Quebec"], 
                                        ["British Colombia","British Colombia"], ["Shiishion", "Shiishion"]]}
                        onChangeFunc = {handelInputUserData}
                    /> */}
                    <LabelAndInput 
                        labelName = "labelZip"
                        labelValue = "Zip"
                        inputId = "zip"
                        inputValue = {userInfo.zip}
                        placeholder = "Zip"
                        divClassname = "form-group col-lg-2 col-md-2 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                    <LabelAndInput 
                        labelName = "labelcomment"
                        labelValue = "Any comments or notes?"
                        inputId = "comment"
                        inputType = "comment"
                        inputValue = {userInfo.comment}
                        placeholder = "Comments"
                        divClassname = "form-group col-lg-4 col-md-11 col-sm-11"
                        onChangeFunc = {handelInputUserData}
                    />
                </div>
                    {showCheckBoxCopy ?
                        <CheckboxAndLabel
                            labelName = "gridCheck"
                            labelValue = "Copy above data for domain owners details"
                            inputId = "gridCheck3"
                            inputName = "checkBoxCopyToRegistrar"
                            onChangeFunc = {handleCheckBoxCopyToRegistrar}
                            checkboxStatus = {checkBoxCopyToRegistrar}/>
                         :
                        ""
                    }
                <hr/>
        </React.Fragment>
    );
}

NewUserFrom.defaultProps = {
    showCheckBoxCopy: true
}

export default NewUserFrom;