import React, { Component } from 'react';

class SelerInformation extends Component {
    render(){
        return(
            <div className="seler-information">
                <div className="seler-title"> You can note seller information in case you want to contact to him directly.</div>
                <div> Name: <span>
                  {this.props.sellerInfo.name} </span>
                </div>
                <div> Mobile No: <span>
                  {this.props.sellerInfo.mobile} </span> 
                </div>
                <div> Email: <span>
                  {this.props.sellerInfo.email} </span> 
                </div>   
            </div>  
        )
    }
}

export default SelerInformation; 