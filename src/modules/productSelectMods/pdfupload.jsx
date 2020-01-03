import React, { Component } from 'react';

class PdfUpload extends Component {
    state = {  }
    render() { 
        let {pdfUploadOnChange, errorMessage} = this.props;
        return ( 
            <React.Fragment>
                <div className="form-group files">
                    <input type="file" name="testfile" onChange={pdfUploadOnChange}/><br/>
                    <small>You can upload the file later as well.</small>
                    {
                        errorMessage ?
                        <React.Fragment>
                            <br /><small className="smallText">Error: Please make sure file is pdf/doc/docs/jpg and max 5mb!</small>
                        </React.Fragment>
                        : ""
                    }
                </div>
            </React.Fragment>
         );
    }
}

PdfUpload.defaultProps = {
    errorMessage : false
}

export default PdfUpload;