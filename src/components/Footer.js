import React, { Component } from 'react';
import { firebaseHandeler } from '../firebaseHandler/firebaseHandler';

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
            <div className="container">
            <span> &copy; Sparxitsolutions.com </span> <button onClick={()=> {firebaseHandeler()}} >For Firebase</button>
            </div>
         </footer>
        )
    }
}
export default Footer;