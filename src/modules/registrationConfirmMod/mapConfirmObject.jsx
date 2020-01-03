import React, { Component } from 'react';

class MapConfirmObject extends Component {
    render() { 
        const {ObjToMap} = this.props;
        const ObjToMapKeys = Object.keys(ObjToMap);
        const showObjToMap = ObjToMapKeys.map(function(ObjToMapKey){

            return (<React.Fragment key={ObjToMapKey + "_"}>
                        <dt  className="col-sm-3">{ObjToMapKey}</dt>
                        <dd className="col-sm-9">{ObjToMap[ObjToMapKey]}</dd>
                    </React.Fragment>);
        })
        return (             
        <React.Fragment>
            <h3>{this.props.title}</h3>
            <dl className="row">
                {showObjToMap}
            </dl>
        </React.Fragment> );
    }
}
 
export default MapConfirmObject;