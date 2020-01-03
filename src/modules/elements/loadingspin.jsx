import React, { Component } from 'react';

class LoadingSpin extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showSmallText : false
        };
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </React.Fragment>
         );
    }
}

LoadingSpin.defaultProps = {
    inputValue      : ""
}

export default LoadingSpin;