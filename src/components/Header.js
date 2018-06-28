
import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import { connect } from 'react-redux'


class Header extends Component {   

render () {
    return (
        <header className="header">
        <div className="clearfix header-wrap">
            <figure className="logo"> 
                <Link to="/home">
                    <img alt="" src="https://s3-eu-west-1.amazonaws.com/tpd/logos/588bbd090000ff00059b9867/0x0.png" />
                </Link> 
            </figure>
            <div className="buttons-wrap">
            <button><Link to="/home">Home</Link></button>
            <button><Link to="/mycart">Mycart</Link></button>
            {
                !this.props.loginData.loginStatus && <button><Link to="/login">Login</Link></button>
            }
            {
                this.props.loginData.loginStatus && <button><Link to="/profile">My profile</Link></button>
            }
            </div>
        </div>
       </header>
    )
  }
}

function mapstatetoprops(store) {
    return {
        loginData: store.loginReducer.loginData
    }
}

export default connect(mapstatetoprops)(Header);