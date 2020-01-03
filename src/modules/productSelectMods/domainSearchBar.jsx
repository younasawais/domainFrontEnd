import React from 'react';
import LoadingSpin from './../elements/loadingspin';

const DomainSearchBar = (props) =>{
    const {domainName, domainNameAvailable, checkDomain, inputDomain, 
            btnCheck, handleEnter, loading} = props;
    return(
        <React.Fragment>
            <div className="input-group mb-3" onKeyDown={handleEnter}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Check your domain name here!" 
                    aria-label="Check your domain name here!" 
                    aria-describedby="button-addon2"
                    name="domainNameInput"
                    onChange={inputDomain}
                    onKeyDown={handleEnter}/>
                    <div className="input-group-prepend">
                    <select name="domainExt" className="custom-select" id="inputGroupSelect01" onChange={inputDomain}>
                        <option value=".com">.COM</option>
                        <option value=".ca">.CA</option>
                        <option value=".net">.NET</option>
                        <option value=".io">.IO</option>
                    </select>
                    </div>
                <div className="input-group-append">
                    <button 
                        className="btn btn-outline-secondary" 
                        onClick={checkDomain} 
                        type="button" 
                        id="button-addon2"
                        >CHECK</button>
                </div>
            </div>
            {loading ?<LoadingSpin/> : ""}
            {btnCheck ?
            domainNameAvailable === "available" ?
                <h5 className="form-text">
                    {domainName + " : "}<span id="domainAvailable">{domainNameAvailable}</span>
                </h5> 
                :
                    <h5 className="form-text">
                        {domainName + " : "}<span id="domainUnavailable">{domainNameAvailable}</span>
                    </h5> 
                :
                ""
            }
        </React.Fragment>
    )

}

export default DomainSearchBar;

 