import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class ContactToseller extends Component {
    render(){
        return(
            <div className="connectToSeller">
              <span className="chat-title"> Chat with Seller </span>
               <form >
               <div className="clearfix">
                 <textarea className="textarea">
                 </textarea>
                 {
                    !this.props.loginData.loginStatus && <button class="saler-login"><Link to="/login">Please login to chat</Link></button>
                }
                 <button className="message-submit">Submit your messege </button>
                 </div>
               </form>
               
            </div>
        )
    }
}

function mapstatetoprops(store) {
    return {
        loginData: store.loginReducer.loginData
        
    }
}


export default connect(mapstatetoprops, null)(ContactToseller); 