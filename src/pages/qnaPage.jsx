import React, { Component } from 'react';


class QnA extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile: null
          }
    }


    render() { 
        return (
            <React.Fragment>
                <div className="form-group files">
                    <p>qna</p>
                </div>
            </React.Fragment>
         );
    }
}

export default QnA;