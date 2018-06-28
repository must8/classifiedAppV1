
import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginStatusAction } from '../userActions/loginActions'

class Login extends Component {   

    constructor(props){
        super(props) 
        this.state = {
           users : [
            {
                username:"test",
                password:"test"
            },
            {
                username:"demo",
                password:"demo"
            }
           ],
           userInput:{
                username:"",
                password:""
           },
           redirectStatus: false
        }
    }

    handleChange = (e, type)=> {

            if (type=="password"){
                this.setState({
                    userInput: {...this.state.userInput, password:e.target.value}
                })
            }
            if (type=="username"){
                this.setState({
                    userInput: {...this.state.userInput, username:e.target.value}
                })
            }
     }

     handleLogin = (e) =>{
         this.state.users.map((item)=>{
           if(item.password == this.state.userInput.password && item.username == this.state.userInput.username ){
             this.props.loginStatus({loginStatus:true});
                this.setState({redirectStatus:true});
           }
         })
         e.preventDefault();
     }

render () {
    if(this.state.redirectStatus){
        return <Redirect to='/home'  />
    }
    return (
    <div> 
        <form onSubmit={(e)=>this.handleLogin(e)}> 
            <div> <label> UserName </label> 
               <input value={this.state.userInput.username} onChange={(e)=>this.handleChange(e,"username")} type="text" />demo
            </div>
            <div> <label> Password </label> 
               <input value={this.state.userInput.password} onChange={(e)=>this.handleChange(e,"password")} type="text" />demo
            </div>
            <button> Login </button>
        </form>
     </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
    return {
       loginStatus : (loginstaus) => dispatch(loginStatusAction(loginstaus))
    }
}

export default connect( null , mapDispatchToProps )(Login);
