import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class ContactToseller extends Component {
    render(){
        return(
            <div className="connectToSeller">
              <span> Chat with Seller </span>
              {
                  !this.props.loginData.loginStatus && <button><Link to="/login">Please login to chat</Link></button>
              }
               <form>
                 <textarea className="textarea">
                 </textarea>
                 <button>Submit your messege </button>
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