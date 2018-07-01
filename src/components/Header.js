
import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import { connect } from 'react-redux'


class Header extends Component {   

render () {
    return (
        <header className="header">
        <div className="clearfix header-wrap container">
         <div className="header-container clearfix"> 
            <figure className="logo tab-h"> 
                <Link to="/home">
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrvsDmAwLTOTPxrzbzEkXzY_ngiiIR1DW-YIcCRX1ciUrqLc56A" />
                </Link> 
            </figure>
            <div className="buttons-wrap tab-h">
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