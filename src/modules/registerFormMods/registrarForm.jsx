import React from 'react';
import LabelAndInput from '../elements/labelAndInput';


const RegistrarForm = (props) =>{
    const {handelInputRegistrarData, name, surname, email, 
            phoneNumber, address, address2, city, zip, state, country } = props
    return(
        <React.Fragment>
              <h3>Domain name owner details</h3>
                    <div className="form-row">
                        <LabelAndInput 
                            labelName = "labelRegistrarname"
                            labelValue = "* Name"
                            inputId = "Regname"
                            inputValue = {name}
                            name = "name"
                            placeholder = "Name"
                            divClassname = "form-group col-lg-3 col-md-6 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelRegistrarsurname"
                            labelValue = "* Surname"
                            inputId = "RegsurName"
                            inputValue = {surname}
                            name = "surname"
                            placeholder = "Surname"
                            divClassname = "form-group col-lg-2 col-md-5 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelRegistrarEmail"
                            labelValue = "* Email"
                            inputId = "Regemail"
                            inputType = "email"
                            inputValue = {email}
                            name = "email"
                            placeholder = "Email"
                            type="email"
                            divClassname = "form-group col-lg-4 col-md-7 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelRegistrarNumber"
                            labelValue = "* Phone Number"
                            inputId = "RegphoneNumber"
                            inputType="phoneNumber"
                            inputValue = {phoneNumber}
                            name = "phoneNumber"
                            divClassname = "form-group col-lg-2 col-md-4 col-sm-11"
                            placeholder = "Phone Number"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelRegistrarAddress"
                            labelValue = "* Address 1"
                            inputId = "Regaddress"
                            inputValue = {address}
                            name = "address"
                            placeholder = "NR & Streetname"
                            divClassname = "form-group col-lg-5 col-md-11 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelRegistrarAddress2"
                            labelValue = "Address 2"
                            inputId = "Regaddress2"
                            inputValue = {address2}
                            name = "address2"
                            placeholder = "Apartment, studio, or floor"
                            divClassname = "form-group col-lg-4 col-md-11 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelRegistrarCity"
                            labelValue = "* City"
                            inputId = "Regcity"
                            inputValue = {city}
                            name = "city"
                            placeholder = "City"
                            divClassname = "form-group col-lg-2 col-md-3 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelState"
                            labelValue = "State"
                            inputId = "state"
                            inputValue = {state}
                            placeholder = "State"
                            divClassname = "form-group col-lg-4 col-md-3 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        <LabelAndInput 
                            labelName = "labelCountry"
                            labelValue = "* Country"
                            inputId = "country"
                            inputValue = {country}
                            placeholder = "Country"
                            divClassname = "form-group col-lg-4 col-md-3 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                        {/* <InputSelection
                            labelName = "labelRegistrarstate"
                            labelValue = "State"
                            inputId   = "regstate"
                            selectName   = "state"
                            optionsKeys   = {[['select','select'],["Ontario","Ontario"],["Quebec","Quebec"], 
                                         ["British Colombia","British Colombia"], ["Shiishion", "Shiishion"]]}
                                         onChangeFunc = {handelInputRegistrarData}
                        /> */}
                        <LabelAndInput 
                            labelName = "labelRegistrarzip"
                            labelValue = "Zip"
                            inputId = "Regzip"
                            inputValue = {zip}
                            name = "zip"
                            placeholder = "Zip"
                            divClassname = "form-group col-lg-3 col-md-2 col-sm-11"
                            onChangeFunc = {handelInputRegistrarData}
                        />
                    </div> 
                    <hr/>

        </React.Fragment>
    );
}
 
export default RegistrarForm;