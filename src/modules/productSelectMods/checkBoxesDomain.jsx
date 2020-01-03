import React from 'react';

const CheckBoxesDomain = (props) =>{
    const {checkBoxEmailSetup, domainName, inputEmailSetup, checkBoxOwnedDomainfunc, checkBoxOwnedDomain, 
           checkBoxNewDomain, checkBoxNewDomainFunc, domainNameAvailable} = props;
           
    let registerDomain;
    let hideBoth;
    if(domainNameAvailable === "available"){
        registerDomain = true
    }else if(domainNameAvailable === "unavailable"){
        registerDomain = false
    }else{
        hideBoth = true
    }
    return(
        <React.Fragment>
                {
                    hideBoth ?   
                        ""
                    :
                    registerDomain ? 
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={domainName}
                                checked={checkBoxNewDomain}
                                id='checkBoxNewDomain'
                                onChange={checkBoxNewDomainFunc}/>
                            <label className="form-check-label">
                                Register {domainName}
                            </label>
                        </div>
                    :
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox"
                            checked={checkBoxOwnedDomain}
                            value="" 
                            id="checkBoxOwnedDomain"
                            onChange={checkBoxOwnedDomainfunc}/>
                        <label className="form-check-label">
                            I already own this domain name
                        </label>
                    </div> }
                    {
                       checkBoxNewDomain ||  checkBoxOwnedDomain ?

                    
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            checked={checkBoxEmailSetup}
                            onChange={inputEmailSetup}
                            id="defaultCheck2" />
                        <label className="form-check-label">
                            I would like my custom email to be setup
                        </label>
                    </div>
                    : "" }
                    <hr />
        </React.Fragment>
    )

}

export default CheckBoxesDomain;

 