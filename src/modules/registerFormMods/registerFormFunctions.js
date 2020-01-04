export function handleCheckBoxEx (e,saveToDB, userInfo, domainRegistrar){
    let value = e.target.checked;
    let name  = e.target.name;
    let pass = {};
    pass[name] = value;
    if(name === "checkBoxAgreement" && value === true ){
        //domainRegistrar["qouhEmail"] = userInfo["email"];
        saveToDB({"userInfo" : userInfo,"domainRegistrar" : domainRegistrar});
    }
    return pass;
}

export function handelInputUserDataEx (e,userInfo){
    const name  = e.target.name;
    const value = e.target.value;
    let pass = {};
    pass[name] = value;
    let originalUserInfo = userInfo;
    originalUserInfo[name] = value;
    return originalUserInfo;
}

export function handelInputRegistrarDataEx(e, userInfo){
    const name  = e.target.name;
    const value = e.target.value;
    let pass = {};
    pass[name] = value;
    let domainRegistrar = {...userInfo};
    domainRegistrar[name] = value;
    return domainRegistrar;
}

export function handleCheckBoxCopyToRegistrarEx(e, userInfo, domainRegistrarIm){
    let value = e.target.checked;
    let name  = e.target.name;
    let pass = {};
    pass[name] = value;
    //console.log(pass);
    if (name === "checkBoxCopyToRegistrar" && pass[name]) {  // if copy to reg true
        let domainRegistrar = domainRegistrarIm;
        const {name, surname, email, phoneNumber, address, 
                address2, city, state, zip, country} = userInfo;
        domainRegistrar['name']         = name;
        domainRegistrar['surname']      = surname;
        domainRegistrar['email']        = email;
        domainRegistrar['phoneNumber']  = phoneNumber;
        domainRegistrar['address']      = address;
        domainRegistrar['address2']     = address2;
        domainRegistrar['city']         = city;
        domainRegistrar['state']        = state;
        domainRegistrar['country']      = country;
        domainRegistrar['zip']          = zip;
        let pass2                       = {};
        pass2["domainRegistrar"]        = domainRegistrar;
        pass2["checkBoxCopyToRegistrar"] = pass["checkBoxCopyToRegistrar"];
        return pass2;
    } else if(name === "checkBoxCopyToRegistrar" && !pass[name]){
        let domainRegistrar = domainRegistrarIm;
        domainRegistrar['name']         = "";
        domainRegistrar['surname']      = "";
        domainRegistrar['email']        = "";
        domainRegistrar['phoneNumber']  = "";
        domainRegistrar['address']      = "";
        domainRegistrar['address2']     = "";
        domainRegistrar['city']         = "";
        domainRegistrar['state']        = "";
        domainRegistrar['country']      = "";
        domainRegistrar['zip']          = "";
        let pass2                       = {};
        pass2["domainRegistrar"]        = domainRegistrar;
        pass2["checkBoxCopyToRegistrar"] = pass["checkBoxCopyToRegistrar"]; 
        return pass2;
    }else {
        return pass;
    }
}

export function verifyInputs (userInfo, domainRegistrar, loggedin){
    let problems = [];
    if(!loggedin){
        console.log(loggedin);
        if(required(userInfo.name)){problems.push("User name is required.")}
        if(required(userInfo.surname)){problems.push("User surname is required.")}
        if(required(userInfo.email)){problems.push("User email is required.")}
        if(required(userInfo.password)){problems.push("User password is required.")}
        if(required(userInfo.password2)){problems.push("User password 2 is required.")}
        if(required(userInfo.phoneNumber)){problems.push("User phone number is required.")}

        if(onlyText(userInfo.name)){problems.push("user name cannot contain special characters.")};
        if(onlyText(userInfo.surname)){problems.push("User surname cannot contain special characters.")};
        if(onlyEmail(userInfo.email)){problems.push("User email is invalid, please type in a correct email.")};
        //if(await emailExists(userInfo.email)){problems.push("Email account is already registerd, please login.")};
        if(onlyPassword(userInfo.password)){problems.push("User password should have minimum 8 characters.")};
        if(onlyPassword(userInfo.password2)){problems.push("User password 2 should have minimum 8 characters.")};
        if(userInfo.password !== userInfo.password2){problems.push("User passwords do not match.")};
        if(onlyPhoneNumber(userInfo.phoneNumber)){problems.push("Phone number is invalid.")};
        if(onlyText(userInfo.address)){problems.push("User address cannot contain special characters.")};
        if(onlyText(userInfo.address2)){problems.push("User address2 cannot contain special characters.")};
        if(onlyText(userInfo.city)){problems.push("User city cannot contain special characters.")};
        if(onlyText(userInfo.state)){problems.push("User state cannot contain special characters.")};
        if(onlyText(userInfo.country)){problems.push("User country cannot contain special characters.")};
        if(onlyText(userInfo.zip)){problems.push("User zip cannot contain special characters.")};
        if(onlyComment(userInfo.comment)){problems.push("User comment cannot contain special characters.")};
    }

    if(required(domainRegistrar.name)){problems.push("Domain owner name is required.")}
    if(required(domainRegistrar.surname)){problems.push("Domain owner surname is required.")}
    if(required(domainRegistrar.email)){problems.push("Domain owner email is required.")}
    if(required(domainRegistrar.phoneNumber)){problems.push("Domain owner phone number is required.")}
    if(required(domainRegistrar.address)){problems.push("Domain owner address is required.")}
    if(required(domainRegistrar.city)){problems.push("Domain owner city is required.")}
    if(required(domainRegistrar.country)){problems.push("Domain owner country is required.")}

    if(onlyText(domainRegistrar.name)){problems.push("Domain owner name cannot contain special characters.")};
    if(onlyText(domainRegistrar.surname)){problems.push("Domain owner surname cannot contain special characters.")};
    if(onlyEmail(domainRegistrar.email)){problems.push("Domain owner email is invalid, please type in a correct email.")};
    if(onlyPhoneNumber(domainRegistrar.phoneNumber)){problems.push("Phone number is invalid.")};
    if(onlyText(domainRegistrar.address)){problems.push("Domain owner address cannot contain special characters.")};
    if(onlyText(domainRegistrar.address2)){problems.push("Domain owner address2 cannot contain special characters.")};
    if(onlyText(domainRegistrar.city)){problems.push("Domain owner city cannot contain special characters.")};
    if(onlyText(domainRegistrar.state)){problems.push("Domain owner state cannot contain special characters.")};
    if(onlyText(domainRegistrar.country)){problems.push("Domain owner country cannot contain special characters.")};
    if(onlyText(domainRegistrar.zip)){problems.push("Domain owner zip cannot contain special characters.")};
    
    return problems;
}

export function verifyInputsContactPage (state){
    let {name, surname, email, phoneNumber, comment} = state;
    let problems = [];
    if(required(name)){problems.push("User name is required.")}
    if(required(email)){problems.push("User email is required.")}
    if(required(comment)){problems.push("Comment is required")}
    if(onlyText(name)){problems.push("user name cannot contain special characters.")};
    if(onlyText(surname)){problems.push("User surname cannot contain special characters.")};
    if(onlyEmail(email)){problems.push("User email is invalid, please type in a correct email.")};
    if(onlyPhoneNumber(phoneNumber)){problems.push("Phone number is invalid.")};
    if(onlyComment(comment)){problems.push("User comment cannot contain special characters.")};
    return problems;
}

function required(value){
    if(value === ""){
        return true;
    }
}

function onlyComment(value){
    let regex = /[^a-zA-Z0-9.,()'"?!\s]/;
    let result = regex.test(value);
    if(result && value !== ""){
        return "Please don't use any special characters!";
    }else{
        return false;
    }
}

function onlyText(value){
    let regex = /[^\s\w]/;
    let result = regex.test(value);
    if(result && value !== ""){
        return "Only alphabetic & numberic characters are allowed!" }
    else{
        return "";
    }
}

function onlyEmail(value){
    let regex = /[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}/;
    let result = regex.test(value);
    if(!result && value !== ""){
        return "Email address seems to be invalid, Please check!"
    }else{
        return "";
    }
}
// async function emailExists(value){
//     console.log("Email send: " + value);
//     const {data} = await axios.post(process.env.REACT_APP_backendAPI+"/emailexist",{
//         email : value
//     });
//     console.log(data);
//     return data;
// }

function onlyPassword(value){
    let regex = /.{8,}/;
    let result = regex.test(value);
    if(!result && value !== ""){
        return"Password should have minimum 8 charachters!"
    }else{
        return "";
    }
}

function onlyPhoneNumber(value){
    let regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    let result = regex.test(value);
    if(!result && value !== ""){
        return "Please check your phone nr, don't forget area code!"
    }else{
        return "";
    }
}

export function domainVerify(value){
    let regex = /^(www.)?[\w-]+.(com|ca|net)$/;
    let result = regex.test(value);
    if(result){
        return true;
    }else{
        return false;
    }
}

    
export function onlyEmailElias(value){
    let regex = /^[a-zA-Z0-9-_.]+$/;
    let result = regex.test(value);
    if(!result && value !== ""){
        return false
    }else{
        return true
    }
}