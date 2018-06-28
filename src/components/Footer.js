import React, { Component } from 'react';
import { firebaseHandeler } from '../firebaseHandler/firebaseHandler';

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
            <span> &copy; Sparxitsolutions.com </span> <button onClick={()=> {firebaseHandeler()}} >For Firebase</button>
         </footer>
        )
    }
}
export default Footer;